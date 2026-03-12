import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/ports/UserRepository";
export class UserRepositoryMySQL implements UserRepository {
  // Almacenamiento en memoria (reemplazar con pool de MySQL)
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
    // MySQL: const [rows] = await this.pool.query("SELECT * FROM users");
    // return rows as User[];
    return this.users;
  }

  async save(user: User): Promise<User> {
    // MySQL:
    // await this.pool.query(
    //   "INSERT INTO users (id, username, name, lastName, email, adress, cellphone, password) VALUES (?,?,?,?,?,?,?,?)",
    //   [user.id, user.username, user.name, user.lastName, user.email, user.adress, user.cellphone, user.password]
    // );
    this.users.push(user);
    return user;
  }
}
