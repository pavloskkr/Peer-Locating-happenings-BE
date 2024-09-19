import { inject, injectable } from 'inversify';
import {IUserRepository} from "../../domain/interfaces/IUserRepository";
import {IUser} from "../../domain/interfaces/IUser";

@injectable()
export class GetAllUsersUseCase {
    constructor(
        @inject('IUserRepository') private userRepository: IUserRepository
    ) {}

    async execute(): Promise<IUser[]> {
        return this.userRepository.getAll();
    }
}
