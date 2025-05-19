/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchFingerprint = async (): Promise<any> => {
  const response = await fetch('https://admin-rul9.onrender.com/api/v1/system-info', {
    mode: 'no-cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};