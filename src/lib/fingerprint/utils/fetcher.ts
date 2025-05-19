import { FingerprintResponse } from "@/types/response.type";

export const fetchFingerprint = async (): Promise<FingerprintResponse> => {
  const response = await fetch('https://admin-rul9.onrender.com/api/v1/system-info', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};