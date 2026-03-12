import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/ports/UserRepository";
export class UserRepositoryMySQL implements UserRepository {
  private users: User[] = [];

  /**
   * Para MySQL real, reemplazar por:
   *
   * private pool = mysql.createPool({
   *   host: process.env.DB_HOST,
   *   user: process.env.DB_USER,
   *   password: process.env.DB_PASSWORD,
   *   database: process.env.DB_NAME,
   * });
   */

  async findAll(): Promise<User[]> {
    this.users = [
      new User("1", "jdoe", "John", "Doe", "john.doe@example.com", "123 Main St", "555-1234", "password123")
    ];
    return this.users;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
}
