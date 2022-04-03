import { UserRepository } from "../../repositories/implementation/UserRepository";
import { ListAllUserUseCase } from "./ListAllUserUseCase";
import { ListAllUserController } from "./ListAllUserController";

const repository = UserRepository.getInstance()

const listUseCase = new ListAllUserUseCase(repository)

const listController = new ListAllUserController(listUseCase)

export { listController }