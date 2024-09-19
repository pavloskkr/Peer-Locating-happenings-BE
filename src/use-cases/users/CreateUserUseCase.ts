import { inject, injectable } from 'inversify';
import {IUserRepository} from "../../domain/interfaces/IUserRepository";
import {CreateUserDto} from "../../interface/dto/CreateUserDto";
import {IUser} from "../../domain/interfaces/IUser";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('IUserRepository') private userRepository: IUserRepository
    ) {}

    async execute(data: CreateUserDto): Promise<IUser> {
        const newUser: IUser = {
            firebaseUid: data.firebaseUid,
            username: data.username,
            email: data.email,
            createdAt: new Date(),
        };

        return this.userRepository.create(newUser);
    }
}
