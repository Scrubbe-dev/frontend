import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { accessToken, refreshToken } = await request.json();

    const cookieStore = cookies();

    // Set access token cookie
    cookieStore.set("accessToken", accessToken, {
      secure: true,
      sameSite: "strict",
      httpOnly: true,
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    // Set refresh token cookie
    cookieStore.set("refreshToken", refreshToken, {
      secure: true,
      sameSite: "strict",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error setting cookies:", error);
    return NextResponse.json(
      { success: false, message: "Failed to set cookies" },
      { status: 500 }
    );
  }
}
