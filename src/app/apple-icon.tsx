import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FCF9F2",
          borderRadius: 40,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 12C30 12 22 25 22 42C22 55 30 66 50 86C70 66 78 55 78 42C78 25 70 12 50 12Z"
            fill="#072A30"
            stroke="#C15C3D"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M50 18C36 18 31 28 31 42C31 51 38 60 50 73C62 60 69 51 69 42C69 28 64 18 50 18Z"
            stroke="#FCF9F2"
            strokeWidth="1.5"
            strokeOpacity="0.55"
            fill="none"
          />
          <path
            d="M48 36C53 36 57 40 56.5 46C56 51 51 54 45.5 52.5C49 51 50.5 47 49.5 43C48.5 39 45 37 42 38C44 36.5 46 36 48 36Z"
            fill="#FCF9F2"
          />
          <path
            d="M55 41L56 38.5L57 41L59.5 41.5L57 42.5L58 45L55.5 43.5L53 45L54 42.5L51.5 41.5L55 41Z"
            fill="#C15C3D"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
