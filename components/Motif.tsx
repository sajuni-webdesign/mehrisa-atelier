/** Hand-drawn style ornaments used as quiet, boutique-themed watermarks. */

type P = { className?: string };

/** Lotus mandala — concentric petal rings inspired by zardozi medallions. */
export function Mandala({ className = "" }: P) {
  const ring = (n: number, r: number, len: number, w: number) =>
    Array.from({ length: n }, (_, i) => (
      <path
        key={`${r}-${i}`}
        d={`M0 ${-r} C ${w} ${-r - len * 0.35}, ${w} ${-r - len * 0.75}, 0 ${-r - len} C ${-w} ${-r - len * 0.75}, ${-w} ${-r - len * 0.35}, 0 ${-r}Z`}
        transform={`rotate(${(360 / n) * i})`}
      />
    ));
  return (
    <svg viewBox="-200 -200 400 400" className={className} fill="none" stroke="currentColor" strokeWidth="0.9" aria-hidden>
      <circle r="18" />
      <circle r="26" strokeDasharray="2 4" />
      {ring(8, 28, 34, 12)}
      <circle r="70" />
      {ring(16, 72, 40, 10)}
      <circle r="118" strokeDasharray="1 5" />
      {ring(24, 120, 44, 8)}
      <circle r="170" />
      {Array.from({ length: 48 }, (_, i) => (
        <circle key={i} r="2.2" cx={0} cy={-182} transform={`rotate(${7.5 * i})`} />
      ))}
      <circle r="194" strokeDasharray="3 6" />
    </svg>
  );
}

/** A single paisley (kalka / keri) motif. */
export function Paisley({ className = "" }: P) {
  return (
    <svg viewBox="0 0 60 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden>
      <path d="M30 86C12 86 4 70 6 54 9 34 26 24 34 12c3-5 3-9 1-11 8 4 13 13 13 24 0 18-10 26-10 38 0 8 4 12 4 16-3 5-8 7-12 7Z" />
      <path d="M30 78c-11 0-16-10-15-21 2-13 13-20 18-28 4 8 4 16 0 24-3 7-4 14-3 25Z" />
      <circle cx="26" cy="58" r="4" />
      <circle cx="26" cy="58" r="1.4" fill="currentColor" />
      <path d="M18 70c3 2 6 3 9 3M16 46c2-3 5-6 8-8" strokeDasharray="1.5 3" />
    </svg>
  );
}
