import { Request, Response } from 'express';

interface User {
  id: number;
  name: string;
  email: string;
}

// Giả lập một danh sách user trong bộ nhớ (thay cho database tạm thời)
const users: User[] = [
  { id: 1, name: "Nguyen Van A", email: "ana@gmail.com" },
  { id: 2, name: "Tran Thi B", email: "btri@gmail.com" }
];

// Hàm lấy toàn bộ danh sách user
export const getAllUsers = (req: Request, res: Response): void => {
  res.status(200).json(users);
};

// Hàm tạo một user mới
export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ name và email!" });
  }

  const newUser: User = {
    id: users.length + 1,
    name: name,
    email: email
  };

  users.push(newUser);
  return res.status(201).json({ message: "Thêm user thành công!", data: newUser });
};
