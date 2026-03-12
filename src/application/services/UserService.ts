import { User } from "../../domain/models/User";

export interface UserService {
  getUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
  saveUser(user: User): Promise<User>;
//   deleteUser(id: string): Promise<void>;
}