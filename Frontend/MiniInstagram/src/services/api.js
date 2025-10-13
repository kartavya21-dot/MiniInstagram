import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('accessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if it's an auth error and not retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) throw new Error("No refresh token");

        // Request new access token
        const response = await axios.post("http://127.0.0.1:8000/users/token/refresh/", { refresh });

        const newAccess = response.data.access;
        localStorage.setItem("accessToken", newAccess);

        // Retry the original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        // Optional: clear tokens & redirect to login
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }

    return Promise.reject(error);
  }
);

export default api;