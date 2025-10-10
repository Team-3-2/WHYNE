import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * refresh token을 사용하여 사용자를 다시 인증한다.
 * @author hwitae
 */
const authRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const response = await instance.post("/auth/refresh-token", {
      refreshToken,
    });
    const { accessToken: newAccessToken } = response.data;

    sessionStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    sessionStorage.setItem("accessToken", "");
    localStorage.removeItem("refreshToken");

    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }

    throw new Error(`다시 로그인 해주세요 ${error}`);
  }
};

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const noTokenUrls = ["/", "/login", "/wines", "/wines/recommended"];

    if (noTokenUrls.includes(config.url ?? "")) {
      return config;
    }

    const accessToken = sessionStorage.getItem("accessToken");

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized!");

      const prevRequest = error.config as InternalAxiosRequestConfig;

      try {
        const newAccessToken = await authRefreshToken();

        instance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return instance(prevRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
