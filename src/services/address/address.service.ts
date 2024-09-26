import axiosInstance from "../../../axiosConfig";
import {District, Province, Ward} from "./address.type";

export const getProvinces = ():
    Promise<Province[]> => axiosInstance.post('/address/provinces');

export const getDistricts = ():
    Promise<District[]> => axiosInstance.post('/address/districts');

export const getWards = ():
    Promise<Ward[]> => axiosInstance.post('/address/wards');