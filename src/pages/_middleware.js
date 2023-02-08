import jwtDecode from "jwt-decode"; 
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const token = await req.cookies.userToken;   

  if (pathname === "/" && !token) {
    return NextResponse.next();
  }
  if ((token && pathname === "/") || pathname === "/") {
    return NextResponse.redirect("/vehicles");
  }
  if (pathname === "/"  && !token) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect("/");
  }

  let decoded = null;
  if (token) {
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      return NextResponse.redirect("/");
    }
 
    const IsAdmin = decoded.userType === "HQ-ADMIN";
    if (IsAdmin) {
      return NextResponse.next();
    } 
  }
  return NextResponse.next();
}