import { ImageResponse } from "next/og";

export const alt = "Javi Air Conditioning";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e1d25", // brand-navy equivalent
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          padding: "60px",
        }}
      >
        {/* Left accent bar (brand-ice) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "16px",
            background: "#a5f3fc", // brand-ice
          }}
        />

        {/* Snowflake absolute watermark */}
        <div
          style={{
            position: "absolute",
            right: "80px",
            top: "80px",
            fontSize: "180px",
            color: "rgba(165, 243, 252, 0.03)",
            lineHeight: 1,
          }}
        >
          ❆
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Logo Title */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-2px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            JAVI AIR CONDITIONING
          </div>

          {/* Subtitle / Value proposition */}
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#cbd5e1",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            5.0 Star Honest HVAC Service • Allergy Specialist
          </div>

          {/* Badge block */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "12px 24px",
                borderRadius: "12px",
                color: "#bae6fd",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              License #CAC1821100
            </div>
            <div
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                padding: "12px 24px",
                borderRadius: "12px",
                color: "#34d399",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              24/7 Priority Emergency Dispatch
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
