export interface PaymentLocationResponse {
    id: number;
    code: string;
    name: string;
    coordinates: number;
    latitude: string;
    longitude: string;
    distance: number;
    address: string;
    openingTime: string;
    closingTime: number;
    statusWork: string;
    googleMapsLink: string;
}