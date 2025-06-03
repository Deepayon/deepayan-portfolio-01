import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Deepayan Das - Development Engineer & Software Developer"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        backgroundImage: "linear-gradient(45deg, #0ea5e9 0%, #ef4444 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          margin: "20px",
          padding: "40px",
          borderRadius: "20px",
          border: "2px solid #0ea5e9",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Deepayan Das
        </h1>
        <p
          style={{
            fontSize: "30px",
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Development Engineer & Software Developer
        </p>
        <p
          style={{
            fontSize: "24px",
            color: "#0ea5e9",
            textAlign: "center",
          }}
        >
          Java • Machine Learning • SQL • Web Development
        </p>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
