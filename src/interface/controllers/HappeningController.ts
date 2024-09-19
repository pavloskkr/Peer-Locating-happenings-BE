import {Request, Response} from 'express';
import {inject, injectable} from 'inversify';
import {CreateHappeningDto} from '../dto/CreateHappeningDto';
import {UpdateHappeningDto} from '../dto/UpdateHappeningDto';
import {validateOrReject} from 'class-validator';
import {CreateHappeningUseCase} from "../../use-cases/happenings/CreateHappeningUseCase";
import {UpdateHappeningUseCase} from "../../use-cases/happenings/UpdateHappeningUseCase";
import {DeleteHappeningUseCase} from "../../use-cases/happenings/DeleteHappeningUseCase";
import {FindHappeningByIdUseCase} from "../../use-cases/happenings/FindHappeningByIdUseCase";
import {FindHappeningsByUserUseCase} from "../../use-cases/happenings/FindHappeningsByUserUseCase";
import {FindAllHappeningsUseCase} from "../../use-cases/happenings/FindAllHappeningsUseCase";

@injectable()
export class HappeningController {
    constructor(
        @inject(CreateHappeningUseCase) private createHappeningUseCase: CreateHappeningUseCase,
        @inject(UpdateHappeningUseCase) private updateHappeningUseCase: UpdateHappeningUseCase,
        @inject(DeleteHappeningUseCase) private deleteHappeningUseCase: DeleteHappeningUseCase,
        @inject(FindHappeningByIdUseCase) private findHappeningByIdUseCase: FindHappeningByIdUseCase,
        @inject(FindHappeningsByUserUseCase) private findHappeningsByUserUseCase: FindHappeningsByUserUseCase,
        @inject(FindAllHappeningsUseCase) private findAllHappeningsUseCase: FindAllHappeningsUseCase
    ) {
    }

    // Create Happening
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data: CreateHappeningDto = req.body;
            await validateOrReject(data);  // Validate incoming data using class-validator

            const newHappening = await this.createHappeningUseCase.execute(data);
            return res.status(201).json(newHappening);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Update Happening
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const data: UpdateHappeningDto = req.body;
            await validateOrReject(data);  // Validate incoming data

            const updatedHappening = await this.updateHappeningUseCase.execute(data);
            return res.status(200).json(updatedHappening);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Delete Happening
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            await this.deleteHappeningUseCase.execute(id);
            return res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Find Happening by ID
    async findById(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            const happening = await this.findHappeningByIdUseCase.execute(id);
            if (!happening) return res.status(404).json({message: 'Happening not found'});

            return res.status(200).json(happening);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Find Happenings by User
    async findByUser(req: Request, res: Response): Promise<Response> {
        try {
            const {userId} = req.params;
            const happenings = await this.findHappeningsByUserUseCase.execute(userId);
            return res.status(200).json(happenings);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const happenings = await this.findAllHappeningsUseCase.execute();
            return res.status(200).json(happenings);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({message: error.message});
            } else {
                return res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }
}
