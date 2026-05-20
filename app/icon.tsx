import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#a5f3fc", // solid Ice Blue
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff" // white wind lines
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.8 19.6A3.42 3.42 0 1 0 15 14h-5" />
          <path d="M14.7 13.6A3.17 3.17 0 1 0 17 8H3" />
          <path d="M10.3 8.3c-.3-.3-.7-.3-1 .1C8.2 9.6 6.8 11 5 11H2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
