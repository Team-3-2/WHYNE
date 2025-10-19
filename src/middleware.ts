import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  const token = request.cookies.get("accessToken")?.value;
  const requestedPage = request.nextUrl.pathname;

  if (!token) {
    if (requestedPage === "/login" || requestedPage === "/signup") {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", requestedPage);

    return NextResponse.redirect(url);
  }

  if (requestedPage === "/login" || requestedPage === "/signup") {
    return NextResponse.redirect(new URL("/myprofile", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/myprofile",
    "/wine/:path*",
    "/register/:path*",
    "/review/:path*",
    "/login",
    "/signup",
  ],
};

export default middleware;
