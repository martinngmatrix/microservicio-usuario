import express, { Application } from "express";
import { UserRepositoryMySQL } from "../infrastructure/adapters/UserRepositoryMySQL";
import { UserController } from "../infrastructure/rest/controllers/UserController";
import { UserRouter } from "../infrastructure/rest/routes/UserRouter";
import { DomainUserService } from "../application/services/DomainUserService";

export class AppConfig {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.setupRoutes();
  }

  private setupRoutes(): void {
    const userRepository = new UserRepositoryMySQL();
    const userService = new DomainUserService(userRepository);
    const userController = new UserController(userService);
    const userRouter = new UserRouter(userController);

    this.app.use("/api", userRouter.router);
  }
}