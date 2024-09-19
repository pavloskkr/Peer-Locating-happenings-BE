import { inject, injectable } from 'inversify';
import {IUserRepository} from "../../domain/interfaces/IUserRepository";
import {IUser} from "../../domain/interfaces/IUser";

@injectable()
export class FindUserByFirebaseUidUseCase {
    constructor(
        @inject('IUserRepository') private userRepository: IUserRepository
    ) {}

    async execute(firebaseUid: string): Promise<IUser | null> {
        return this.userRepository.findByFirebaseUid(firebaseUid);
    }
}
