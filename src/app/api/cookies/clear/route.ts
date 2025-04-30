import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = cookies();

    // Delete auth cookies
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error clearing cookies:", error);
    return NextResponse.json(
      { success: false, message: "Failed to clear cookies" },
      { status: 500 }
    );
  }
}
