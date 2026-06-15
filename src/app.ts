import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

// Middleware giúp Express đọc được dữ liệu JSON gửi lên từ Client (Postman/Trình duyệt)
app.use(express.json());

// Định nghĩa một route cơ bản tại trang chủ
app.get('/', (req, res) => {
  res.send('Hello!');
});

// Kết nối phần userRoutes vào đường dẫn tổng '/api/users'
app.use('/api/users', userRoutes);

// Chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});
