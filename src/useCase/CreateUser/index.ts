import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { UserRepository } from "../../repositories/implementation/UserRepository";

const userRepository = UserRepository.getInstance()

const userUseCase = new CreateUserUseCase(userRepository)

const userController = new CreateUserController(userUseCase)

export { userController }