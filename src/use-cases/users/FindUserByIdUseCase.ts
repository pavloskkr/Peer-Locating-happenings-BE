import { inject, injectable } from 'inversify';
import {IUserRepository} from "../../domain/interfaces/IUserRepository";
import {IUser} from "../../domain/interfaces/IUser";

@injectable()
export class FindUserByIdUseCase {
    constructor(
        @inject('IUserRepository') private userRepository: IUserRepository
    ) {}

    async execute(id: string): Promise<IUser | null> {
        return this.userRepository.findById(id);
    }
}
