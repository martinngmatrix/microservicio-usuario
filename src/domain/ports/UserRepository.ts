import { User } from "../models/User";

export interface UserServicePort {
  getAll(): Promise<User[]>;
  create(name: string, email: string): Promise<User>;
}