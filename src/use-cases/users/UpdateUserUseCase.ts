import { inject, injectable } from 'inversify';
import {IUserRepository} from "../../domain/interfaces/IUserRepository";
import {UpdateUserDto} from "../../interface/dto/UpdateUserDto";
import {IUser} from "../../domain/interfaces/IUser";

@injectable()
export class UpdateUserUseCase {
    constructor(
        @inject('IUserRepository') private userRepository: IUserRepository
    ) {}

    async execute(data: UpdateUserDto): Promise<IUser> {
        const existingUser = await this.userRepository.findById(data.id);
        if (!existingUser) throw new Error('User not found');

        if (data.email) existingUser.email = data.email;

        return this.userRepository.update(existingUser);
    }
}
