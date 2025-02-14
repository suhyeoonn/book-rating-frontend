import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/search")) {
    // 기존 URL의 "/search"를 "/explore"로 변경
    const newPath = req.nextUrl.pathname.replace("/search", "/explore");
    return NextResponse.redirect(new URL(newPath, req.url), 301);
  }
}
