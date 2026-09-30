import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #fff8f4 0%, #f8e1dc 55%, #f1c9c6 100%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px", flex: 1 }}>
          <div style={{ fontSize: 22, letterSpacing: 8, color: "#b76e79", textTransform: "uppercase" }}>Luxury Indian Couture</div>
          <div style={{ fontSize: 110, color: "#5b1a32", letterSpacing: 18, marginTop: 20 }}>MEHRISA</div>
          <div style={{ fontSize: 44, color: "#8e4a5c", fontStyle: "italic", marginTop: 6 }}>Couture, woven in grace.</div>
          <div style={{ fontSize: 24, color: "#7a5f66", marginTop: 36 }}>Bridal · Lehengas · Sarees · Festive Couture</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1740674570259-a47d713a2976?w=720&h=1140&fit=crop&q=80"
          alt=""
          width={360}
          height={570}
          style={{ marginTop: 60, marginRight: 70, borderRadius: "999px 999px 0 0", objectFit: "cover", border: "6px solid #c9a15b" }}
        />
      </div>
    ),
    size
  );
}
