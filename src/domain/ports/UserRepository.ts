import { User } from "../models/User";

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
}

// export interface UserServicePort {
//   getAll(): Promise<User[]>;
//   create(
//     username: string,
//     name: string,
//     lastName: string,
//     email: string,
//     adress: string,
//     cellphone: string,
//     password: string
//   ): Promise<User>;
// }