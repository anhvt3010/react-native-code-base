import axiosInstance from "../../../axiosConfig";
import {
    AuthenticationRequest,
    AuthenticationResponse, BiometricLoginRequest,
    ChangePasswordRequest, ForgotPasswordRequest,
    LogoutRequest,
    VerifyForgotPasswordRequest
} from "./auth.type";

export const getToken = (authenticationRequest : AuthenticationRequest):
    Promise<AuthenticationResponse> => axiosInstance.post('/auth/token', authenticationRequest);

export const changeNewPassword = (changePasswordRequest : ChangePasswordRequest):
    Promise<any> => axiosInstance.post('/auth/change-new-password', changePasswordRequest);

export const reqForgotPassword = (verifyForgotPasswordRequest : VerifyForgotPasswordRequest):
    Promise<any> => axiosInstance.post('/auth/req-forgot-password', verifyForgotPasswordRequest);

export const changeForgotPassword = (forgotPasswordRequest : ForgotPasswordRequest):
    Promise<any> => axiosInstance.post('/auth/forgot-password', forgotPasswordRequest);

export const biometricLogin = (biometricLoginRequest : BiometricLoginRequest):
    Promise<any> => axiosInstance.post('/auth/biometric-login', biometricLoginRequest);

export const logout = (logoutRequest : LogoutRequest):
    Promise<any> => axiosInstance.post('/auth/logout', logoutRequest);

export const forgotPassword = ():
    Promise<any> => axiosInstance.post('/auth/forgot-password');