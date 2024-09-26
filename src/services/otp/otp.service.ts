import axiosInstance from "../../../axiosConfig";
import {OtpRequest} from "./otp.type";

export const sendOtp = (phone : string):
    Promise<String> => axiosInstance.post('/otp/send', phone);

export const verifyOtp = (otpRequest : OtpRequest):
    Promise<boolean> => axiosInstance.post('/otp/verify', otpRequest);