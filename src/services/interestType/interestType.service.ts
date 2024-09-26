import {InterestTypeResponse} from "./interestType.type";
import axiosInstance from "../../../axiosConfig";

export const getAll = ():
    Promise<InterestTypeResponse[]> =>  axiosInstance.post('/it');

export const getOne = (id : number):
    Promise<InterestTypeResponse> =>  axiosInstance.post('/it/' + id);