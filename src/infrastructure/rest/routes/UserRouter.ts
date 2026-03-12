import { Router } from "express";
import { UserController } from "../controllers/UserController";

export class UserRouter {
  public router: Router;

  constructor(private readonly userController: UserController) {
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get(
      "/users",
      this.userController.getAll.bind(this.userController)
    );
    this.router.get(
      "/users/:id",
      this.userController.getById.bind(this.userController)
    );
    this.router.post(
      "/users",
      this.userController.create.bind(this.userController)
    );
  }
}