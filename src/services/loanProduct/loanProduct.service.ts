import axiosInstance from "../../../axiosConfig";
import {LoanProductDetailResponse, LoanProductResponse} from "./loanProduct.type";

export const getAll = ():
    Promise<LoanProductResponse[]> => axiosInstance.get('/lp');

export const getOne = (loanProductId:number):
    Promise<LoanProductResponse> => axiosInstance.get('/lp/' + loanProductId);

export const getLoanProductDetail = (loanProductId:number):
    Promise<LoanProductDetailResponse> => axiosInstance.get('/lp/detail/' + loanProductId);