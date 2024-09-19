import {IUserRepository} from "../../domain/interfaces/IUserRepository";
import AppDataSource from "../database/ormconfig";
import {User} from "../../domain/entities/User";
import {IUser} from "../../domain/interfaces/IUser";
import {injectable} from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
    private userRepository = AppDataSource.getRepository(User);

    async create(user: IUser): Promise<IUser> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async findByFirebaseUid(firebaseUid: string): Promise<IUser | null> {
        return this.userRepository.findOne({ where: { firebaseUid } })
    }

    async findById(id: string): Promise<IUser | null> {
        return this.userRepository.findOne({ where: { id } })
    }

    async getAll(): Promise<IUser[]> {
        return await this.userRepository.find();
    }

   async update(user: IUser): Promise<IUser> {
        const existingUser = await this.userRepository.findOne({where: {id: user.id}});

        if (!existingUser) {
            throw new Error('User not found');
        }

        this.userRepository.merge(existingUser, user);

        return this.userRepository.save(existingUser);
    }

}