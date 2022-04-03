import { UserRepository } from "../../repositories/implementation/UserRepository";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUserController";

const repository = UserRepository.getInstance()

const updateUseCase = new UpdateUserUseCase(repository)

const updateController = new UpdateUserController(updateUseCase)

export { updateController }