import { FingerprintResponse } from "@/types/response.type";

const BaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const fetchFingerprint = async (): Promise<FingerprintResponse> => {
  const response = await fetch(`${BaseUrl}/system-info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
