import {DocumentTypeResponse} from "../documentType/documentType.type";

export interface LoanProductResponse {
    id: number;
    code: string;
    name: string;
    minAmount: number;
    maxAmount: number;
    prepaymentPenaltyRate: number;
    description: string;
}


export interface LoanProductDetailResponse {
    id: number;
    code: string;
    name: string;
    minAmount: number;
    maxAmount: number;
    description: string;
    prepaymentPenaltyRate: number;
    documentTypeResponses : DocumentTypeResponse[];
}