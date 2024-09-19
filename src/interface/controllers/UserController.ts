import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CreateUserDto } from '../dto/CreateUserDto';
import { UpdateUserDto } from '../dto/UpdateUserDto';
import { validateOrReject } from 'class-validator';
import {CreateUserUseCase} from "../../use-cases/users/CreateUserUseCase";
import {UpdateUserUseCase} from "../../use-cases/users/UpdateUserUseCase";
import {DeleteUserUseCase} from "../../use-cases/users/DeleteUserUseCase";
import {FindUserByFirebaseUidUseCase} from "../../use-cases/users/FindUserByFirebaseUidUseCase";
import {FindUserByIdUseCase} from "../../use-cases/users/FindUserByIdUseCase";

@injectable()
export class UserController {
    constructor(
        @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
        @inject(UpdateUserUseCase) private updateUserUseCase: UpdateUserUseCase,
        @inject(DeleteUserUseCase) private deleteUserUseCase: DeleteUserUseCase,
        @inject(FindUserByFirebaseUidUseCase) private findUserByFirebaseUidUseCase: FindUserByFirebaseUidUseCase,
        @inject(FindUserByIdUseCase) private findUserByIdUseCase: FindUserByIdUseCase
    ) {}

    // Create User
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data: CreateUserDto = req.body;
            await validateOrReject(data);  // Validate incoming data using class-validator

            const newUser = await this.createUserUseCase.execute(data);
            return res.status(201).json(newUser);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Update User
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const data: UpdateUserDto = req.body;
            await validateOrReject(data);  // Validate incoming data

            const updatedUser = await this.updateUserUseCase.execute(data);
            return res.status(200).json(updatedUser);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Delete User
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await this.deleteUserUseCase.execute(id);
            return res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Find User by Firebase UID
    async findByFirebaseUid(req: Request, res: Response): Promise<Response> {
        try {
            const { firebaseUid } = req.params;
            const user = await this.findUserByFirebaseUidUseCase.execute(firebaseUid);
            if (!user) return res.status(404).json({ message: 'User not found' });

            return res.status(200).json(user);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Find User by ID
    async findById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const user = await this.findUserByIdUseCase.execute(id);
            if (!user) return res.status(404).json({ message: 'User not found' });

            return res.status(200).json(user);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }
}
