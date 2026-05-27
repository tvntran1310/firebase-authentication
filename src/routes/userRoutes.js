const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Đường dẫn GET /users -> Lấy danh sách user
router.get('/', userController.getAllUsers);

// Đường dẫn POST /users -> Tạo user mới
router.post('/', userController.createUser);

module.exports = router;