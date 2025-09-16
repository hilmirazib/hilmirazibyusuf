import { ImageResponse } from "@vercel/og";

export const runtime = "edge"; // wajib untuk OG image

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "My Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: "white",
          background: "linear-gradient(135deg, #1f2937, #111827)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div tw="flex flex-col">
          <div tw="text-5xl font-bold">{title}</div>
          <div tw="mt-4 text-2xl text-gray-300">by Hilmi Yusuf</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
