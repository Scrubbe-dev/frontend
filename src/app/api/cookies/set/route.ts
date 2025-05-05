// src/app/api/cookies/set/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { accessToken, refreshToken } = await request.json();

    const response = NextResponse.json({ success: true });

    // Set access token cookie
    response.cookies.set("accessToken", accessToken, {
      secure: true,
      sameSite: "strict",
      httpOnly: true,
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    // Set refresh token cookie
    response.cookies.set("refreshToken", refreshToken, {
      secure: true,
      sameSite: "strict",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error setting cookies:", error);
    return NextResponse.json(
      { success: false, message: "Failed to set cookies" },
      { status: 500 }
    );
  }
}
