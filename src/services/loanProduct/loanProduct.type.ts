// Định nghĩa kiểu dữ liệu cho Loan
export interface Loan {
    id: number;
    amount: string;
    term: string;
    // Các thuộc tính khác nếu có
}

// Định nghĩa kiểu dữ liệu cho Location
export interface Location {
    id: number;
    name: string;
    address: string;
    // Các thuộc tính khác nếu có
}

// Định nghĩa kiểu dữ liệu cho phản hồi API
export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}