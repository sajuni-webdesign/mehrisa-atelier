/**
 * Cloudflare Pages serves static assets without byte-range support, but Safari/iOS
 * require HTTP 206 responses to play <video>. This function adds Range handling for /videos/*.
 */
export async function onRequest({ request, env }) {
  const range = request.headers.get("Range");
  const plain = new Request(request.url, { method: "GET", headers: { Accept: request.headers.get("Accept") || "*/*" } });
  const res = await env.ASSETS.fetch(plain);
  if (!res.ok) return res;

  const headers = new Headers(res.headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", "public, max-age=2592000, stale-while-revalidate=86400");

  const match = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if (!match) {
    return request.method === "HEAD" ? new Response(null, { status: 200, headers }) : new Response(res.body, { status: 200, headers });
  }

  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  let start = match[1] === "" ? size - Number(match[2]) : Number(match[1]);
  let end = match[1] === "" || match[2] === "" ? size - 1 : Math.min(Number(match[2]), size - 1);
  if (Number.isNaN(start) || start < 0) start = 0;

  if (start >= size || start > end) {
    headers.set("Content-Range", `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }

  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(request.method === "HEAD" ? null : buf.slice(start, end + 1), { status: 206, headers });
}
