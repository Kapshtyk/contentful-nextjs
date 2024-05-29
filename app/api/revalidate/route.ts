import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/[locale]/[slug]", "page");
  revalidatePath("/[locale]", "page");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
