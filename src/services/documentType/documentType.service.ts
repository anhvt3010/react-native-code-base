import axiosInstance from "../../../axiosConfig";
import {DocumentTypeResponse} from "./documentType.type";

export const getParents = ():
    Promise<DocumentTypeResponse[]> => axiosInstance.post('/dt/parents');

export const getAllByParentId = (parentId:number):
    Promise<DocumentTypeResponse[]> => axiosInstance.post('/dt/parents/' + parentId);