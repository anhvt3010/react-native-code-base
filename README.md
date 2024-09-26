# Trancent Loan Application

## Mô tả
Trancent Loan Application là một ứng dụng React Native cho phép người dùng đăng ký khoản vay, theo dõi khoản vay và tìm kiếm các địa điểm gần đó. Ứng dụng này sử dụng các công nghệ hiện đại như React Navigation, Redux, Axios và TypeScript để cung cấp trải nghiệm người dùng tốt nhất.

## Công nghệ và phiên bản
- **React**: 18.2.0
- **React Native**: 0.74.3
- **Expo**: 51.0.20
- **React Navigation**:
    - **@react-navigation/native**: 6.1.18
    - **@react-navigation/stack**: 6.4.1
    - **@react-navigation/drawer**: 6.7.2
    - **@react-navigation/native-stack**: 6.10.1
- **AsyncStorage**: @react-native-async-storage/async-storage 2.0.0
- **React Native Gesture Handler**: 2.16.1
- **React Native Reanimated**: 3.10.1
- **React Native Safe Area Context**: 4.10.5
- **React Native Screens**: 3.31.1
- **Expo Font**: 12.0.9
- **Expo Splash Screen**: 0.27.5
- **Expo Status Bar**: 1.12.1
- **TypeScript**: 5.3.3
- **Babel**: @babel/core 7.24.8

## Cấu trúc thư mục
- **axiosConfig.ts**: Cấu hình Axios: Tạo một instance của Axios với các interceptor cho request và response.
- **/src**: Thư mục gốc chứa toàn bộ mã nguồn của ứng dụng.
    - **/components**: Chứa các component dùng chung trong ứng dụng.
        - **/common**: Chứa các component dùng chung như Button, Input, và CustomDialog.
            - **Button.tsx**: Component nút dùng chung, có thể tái sử dụng trong nhiều màn hình.
            - **Input.tsx**: Component nhập liệu dùng chung, có thể tái sử dụng trong nhiều màn hình.
            - **CustomDialog.tsx**: Component hộp thoại tùy chỉnh dùng chung, có thể hiển thị thông báo hoặc xác nhận.
    - **/screens**: Chứa các màn hình của ứng dụng.
        - **/...**
    - **/services**: Chứa các hàm gọi API và cấu hình liên quan.
        - **api.ts**: Cấu hình Axios và các hàm gọi API chung.
        - **/...**: Chứa các hàm gọi API liên quan đến sản phẩm vay.
            - **loanProduct.service.ts**: Các hàm gọi API liên quan đến sản phẩm vay.
    - **/navigation**: Chứa cấu hình điều hướng của ứng dụng.
        - **AppNavigator.tsx**: Cấu hình điều hướng của ứng dụng, sử dụng React Navigation để quản lý các màn hình.
    - **/store**: Chứa cấu hình Redux store và các bộ giảm trạng thái.
        - **/actions**: Chứa các hành động Redux.
        - **/reducers**: Chứa các bộ giảm trạng thái Redux.
        - **store.ts**: Cấu hình Redux store, kết hợp các bộ giảm trạng thái và middleware.
    - **/utils**: Chứa các tiện ích và hằng số dùng trong ứng dụng.
        - **constants.ts**: Các hằng số dùng trong ứng dụng, như URL của API.
    - **App.tsx**: Điểm vào chính của ứng dụng, nơi cấu hình Redux Provider và Navigation Container.
## Cài đặt

2. **Cài đặt các phụ thuộc**
   ```sh
   npm install
   ```

4. **Cấu hình API**
    - Mở file `src/utils/constants.ts` và cập nhật `API_ROOT` với URL của API của bạn.
   ```typescript
   export const API_ROOT = 'http://your-spring-boot-api-url';
   ```

## Chạy ứng dụng
   ```sh
   npm start
   ```

## Cấu hình Axios
File `src/services/axiosConfig.ts` chứa cấu hình Axios với các interceptor cho request và response.