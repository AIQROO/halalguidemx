import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 8C30 8 22 22 22 42C22 55 30 67 50 88C70 67 78 55 78 42C78 22 70 8 50 8Z"
            fill="#072A30"
            stroke="#C15C3D"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="M48 33C54 33 58 38 57.5 44.5C57 50 51.5 54 45.5 52.5C49.5 51 51.5 46.5 50.5 42C49.5 37.5 45.5 35 42 36.5C44 34 46 33 48 33Z"
            fill="#FCF9F2"
          />
          <path
            d="M58 39L59.5 36L61 39L64 39.5L61.5 41L62.5 44L60 42L57.5 44L58.5 41L56 39.5L58 39Z"
            fill="#C15C3D"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
