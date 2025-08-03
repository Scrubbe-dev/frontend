import { AxiosInstance } from "axios";
import { getSession } from "next-auth/react";

export const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    async (config) => {
      const session = await getSession();

      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        // await signOut({});
      }
      return Promise.reject(error);
    }
  );
};
