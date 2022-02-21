import axios from "axios";
import { authenticationService } from "../services/authentication.service";

export const jwtInterceptor = () => {
  axios.interceptors.request.use((request) => {
    const token = authenticationService.token;
    if (token) {
      request.headers.common.Authorization = `Bearer: ${token}`;
    }

    return request;
  });
};
