import { Request, Response } from "express";
import { UserService } from "../../../application/services/UserService";
import { User } from "../../../domain/models/User";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async getAll(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getUsers();
    res.status(200).json(users);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const user = await this.userService.getUserById(id as string);
      res.status(200).json(user);
    } catch {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const { username, name, lastName, email, adress, cellphone, password } = req.body as User;

    if (!username || !name || !lastName || !email || !adress || !cellphone || !password) {
      res.status(400).json({ message: "Todos los campos son requeridos" });
      return;
    }

    const user = new User("", username, name, lastName, email, adress, cellphone, password);
    await this.userService.saveUser(user);
    res.status(201).json({ message: "Usuario creado exitosamente" });
  }
}