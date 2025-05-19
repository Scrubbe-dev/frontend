export const fetchFingerprint = async (): Promise<any> => {
  const response = await fetch('https://admin-rul9.onrender.com/api/v1/system-info', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    credentials: 'include', 
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};