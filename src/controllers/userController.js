// Giả lập một danh sách user trong bộ nhớ (thay cho database tạm thời)
const users = [
  { id: 1, name: "Nguyen Van A", email: "ana@gmail.com" },
  { id: 2, name: "Tran Thi B", email: "btri@gmail.com" }
];

// Hàm lấy toàn bộ danh sách user
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Hàm tạo một user mới
const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ name và email!" });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email
  };

  users.push(newUser);
  res.status(201).json({ message: "Thêm user thành công!", data: newUser });
};

// Xuất các hàm ra để file khác sử dụng
module.exports = {
  getAllUsers,
  createUser
};