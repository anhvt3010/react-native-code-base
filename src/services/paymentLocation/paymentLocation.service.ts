import axiosInstance from "../../../axiosConfig";
import {PaymentLocationResponse} from "./paymentLocation.type";

export const getAll = ():
    Promise<PaymentLocationResponse[]> => axiosInstance.get('/pl');

export const getOne = (id : number):
    Promise<PaymentLocationResponse> => axiosInstance.get('/pl/' + id);

export const getNearest = ():
    Promise<PaymentLocationResponse> => axiosInstance.get('/pl/nearest');