import { inject, injectable } from 'inversify';
import {IUserRepository} from "../../domain/interfaces/IUserRepository";

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject('IUserRepository') private userRepository: IUserRepository
    ) {}

    async execute(id: string): Promise<void> {
        const existingUser = await this.userRepository.findById(id);
        if (!existingUser) throw new Error('User not found');

        return this.userRepository.delete(id);
    }
}
