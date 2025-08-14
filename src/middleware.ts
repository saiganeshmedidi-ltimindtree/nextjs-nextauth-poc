import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  const isAuth = !!token;
  const isLoginPage = req.nextUrl.pathname === "/login";

  if (isAuth && isLoginPage) {
    // Redirect authenticated users away from login
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};
