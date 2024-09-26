import axiosInstance from "../../../axiosConfig";
import {UserResponse} from "./user.type";

export const getInfo = (id:number):
    Promise<UserResponse> => axiosInstance.get('/users/' + id);