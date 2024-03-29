import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

class CustomAxios {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public getInstance(): AxiosInstance {
    return this.instance;
  }
  public setAuthorization(accessToken: string): void {
    this.instance.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  public setRefreshToken(refreshToken: string): void {
    this.instance.defaults.headers["Refresh"] = `Bearer ${refreshToken}`;
  }
}

export const customAxios = new CustomAxios();

const updateToken = async (
  refreshToken: string
): Promise<AxiosResponse<any, any>> => {
  customAxios.setRefreshToken(refreshToken);
  return await customAxios.getInstance().post("/auth/token/refresh");
};

customAxios.getInstance().interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!config.headers["Authorization"]) {
      const accessToken = localStorage.getItem("UAT");
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios
  .getInstance()
  .interceptors.response.use(null, async (originError) => {
    const { config, response } = originError;
    if (
      config &&
      response &&
      response.status === 401 &&
      localStorage.getItem("URT")
    ) {
      try {
        const res = await updateToken(localStorage.getItem("URT") as string);
        customAxios.setAuthorization(res.headers["access-token"]);
        localStorage.setItem("UAT", res.headers["access-token"]);
        localStorage.setItem("URT", res.headers["refresh-token"]);
        config.headers[
          "Authorization"
        ] = `Bearer ${res.headers["access-token"]}`;
        return customAxios.getInstance().request(config);
      } catch (updateTokenErr: any) {
        if (updateTokenErr.response.data === "Refresh token is expired") {
          localStorage.removeItem("UAT");
          localStorage.removeItem("URT");
          window.location.href = "/auth/login";
        }
      }
    }
    return Promise.reject(originError);
  });
