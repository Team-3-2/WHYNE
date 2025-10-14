import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  const token = request.cookies.get("accessToken")?.value;

  if (token) {
    return NextResponse.redirect(new URL("/myprofile", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/login", "/signup"],
};

export default middleware;
