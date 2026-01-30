import {axiosInstance} from "./axios";

export const loginApi = async (payload: {email: string, password: string}) => {
  const res = await axiosInstance.post("/auth/login", payload);
  if (res.data?.accessToken) {
    localStorage.setItem("accessToken", res.data.accessToken);
  }
  return res.data;
};
; 
export const signupApi = async (payload:  {email: string, password: string, name: string, phoneNumber: string}) => {
  const res = await axiosInstance.post("/auth/signup", payload);
  if (res.data?.accessToken) {
    localStorage.setItem("accessToken", res.data.accessToken);
  }
  return res.data;
};

export const logoutApi = async () => {
  const res = await axiosInstance.get("/auth/logout");
  localStorage.removeItem("accessToken");
  return res.data;
};
