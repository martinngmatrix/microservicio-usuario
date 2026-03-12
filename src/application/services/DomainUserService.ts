import { User } from "../../domain/models/User";
import { UserService } from "./UserService";
import { UserRepository } from "../../domain/ports/UserRepository";

export class DomainUserService implements UserService {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

//   async getUserById(id: string): Promise<User> {
//     const user = await this.userRepository.findById(id);
//     if (!user) throw new Error(`User with id ${id} not found`);
//     return user;
//   }

  async saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

//   async deleteUser(id: string): Promise<void> {
//     return this.userRepository.deleteUserById(id);
//   }
}