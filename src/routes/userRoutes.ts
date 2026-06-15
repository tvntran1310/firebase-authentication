import express from 'express';
import { getAllUsers, createUser } from '../controllers/userController';

const router = express.Router();

// Đường dẫn GET /users -> Lấy danh sách user
router.get('/', getAllUsers);

// Đường dẫn POST /users -> Tạo user mới
router.post('/', createUser);

export default router;
