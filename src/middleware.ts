import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const aToken = req.cookies.get("UAT");
  const rToken = req.cookies.get("URT");

  if (!aToken || !rToken) {
    return NextResponse.redirect(new URL("http://localhost:3000/auth/login"));
  }
}

export const config = {
  matcher: ["/widget/:path*"],
};
