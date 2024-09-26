import { Loan, Location, ApiResponse } from './loanProduct.type';
import axiosInstance from "../../../axiosConfig";

export const getLoans = (): Promise<ApiResponse<Loan[]>> => axiosInstance.get('/loans');
export const createLoan = (loanData: { amount: string; term: string }): Promise<ApiResponse<Loan>> => axiosInstance.post('/loans', loanData);
export const getNearbyLocations = (): Promise<ApiResponse<Location[]>> => axiosInstance.get('/locations/nearby');