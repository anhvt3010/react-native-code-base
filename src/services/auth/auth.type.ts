export interface AuthenticationRequest {
    username: string;
    password: string;
}

export interface AuthenticationResponse {
    token: string;
    expiryTime: string;
}

export interface ChangePasswordRequest {
    username: string;
    oldPassword: string;
    newPassword: string;
}

export interface VerifyForgotPasswordRequest {
    username: string;
    cin: string;
    phone: string;
}

export interface ForgotPasswordRequest {
    username: string;
    newPassword: string;
}

export interface BiometricLoginRequest {
    username: string;
}

export interface IntrospectRequest {
    token: string;
}

export interface LogoutRequest {
    token: string;
}