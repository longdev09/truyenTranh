import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class InstanceApi {
  client: AxiosInstance;
  constructor(BASE_URL: string) {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 10000, // Timeout 10s
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Hàm gọi API get chung
  public async requestApiMangaDex<T>(
    endpoint: string, // path
    options: AxiosRequestConfig = {} // params
  ): Promise<T> {
    try {
      const response = await this.client.get<T>(endpoint, options);
      return response.data;
    } catch (error) {
      console.error(`Lỗi API (${endpoint}):`, error);
      throw error;
    }
  }
}

export const Instance = new InstanceApi(
  "https://api.truyentranh.longdev.click/api/v1"
);
//https://api.truyentranh.longdev.click/
