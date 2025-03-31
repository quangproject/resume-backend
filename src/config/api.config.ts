import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { ENV } from "./env.config";

class ApiConfig {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `users API-Key ${ENV.CMS_API_KEY}`
      }
    });
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    return this.request<T>("GET", url, { params });
  }

  async post<T>(url: string, data?: any): Promise<T> {
    return this.request<T>("POST", url, { data });
  }

  async put<T>(url: string, data?: any): Promise<T> {
    return this.request<T>("PUT", url, { data });
  }

  async delete<T>(url: string): Promise<T> {
    return this.request<T>("DELETE", url);
  }

  private async request<T>(
    method: string,
    url: string,
    options?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance({
        method,
        url,
        ...options
      });

      if (
        response.data &&
        typeof response.data === "object" &&
        "docs" in response.data &&
        Array.isArray((response.data as any).docs)
      ) {
        return (response.data as any).docs.map((doc: any) =>
          this.sanitizeResponse(doc)
        ) as T;
      }

      if (
        response.data &&
        typeof response.data === "object" &&
        "message" in response.data &&
        "doc" in response.data
      ) {
        return this.sanitizeResponse((response.data as any).doc) as T;
      }

      return this.sanitizeResponse(response.data) as T;
    } catch (error: any) {
      throw error.response?.data || error.message;
    }
  }

  private sanitizeResponse<T>(data: T): T {
    if (data && typeof data === "object") {
      if (
        "apiKey" in data ||
        "enableAPIKey" in data ||
        "loginAttempts" in data
      ) {
        const { apiKey, enableAPIKey, loginAttempts, ...filteredData } =
          data as any;
        return filteredData as T;
      }

      if ("person" in data && typeof data.person === "object") {
        delete data.person;
        return data as T;
      }
    }
    return data;
  }
}

export default ApiConfig;
