import axiosInstance from "../../../axiosConfig";
import {LoanTermResponse} from "./loanTerm.type";

export const getAll = ():
    Promise<LoanTermResponse[]> => axiosInstance.post('/lt');

export const getOne = (id : number):
    Promise<LoanTermResponse> => axiosInstance.post('/lt/' + id);