"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware giúp Express đọc được dữ liệu JSON gửi lên từ Client (Postman/Trình duyệt)
app.use(express_1.default.json());
// Định nghĩa một route cơ bản tại trang chủ
app.get('/', (req, res) => {
    res.send('Hello!');
});
// Kết nối phần userRoutes vào đường dẫn tổng '/api/users'
app.use('/api/users', userRoutes_1.default);
// Chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});
