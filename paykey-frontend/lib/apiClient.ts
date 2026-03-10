import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/admin` || 'https://api.authkey.my',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response && error.response.status === 401) {
      console.warn("Session expired or unauthorized. Redirecting to login...");

      if (typeof window !== 'undefined') {
        localStorage.removeItem('paykey_last_user_email');
        sessionStorage.clear();

        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);