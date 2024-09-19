import {IUser} from "./IUser";

export interface IUserRepository {
    create(user: IUser): Promise<IUser>;
    update(user: IUser): Promise<IUser>;
    delete(id: string): Promise<void>;
    findByFirebaseUid(firebaseUid: string): Promise<IUser | null>;
    findById(id: string): Promise<IUser | null>;
    getAll(): Promise<IUser[]>;
}