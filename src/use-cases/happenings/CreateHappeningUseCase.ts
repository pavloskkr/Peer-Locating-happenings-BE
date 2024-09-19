import { inject, injectable } from 'inversify';
import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";
import {CreateHappeningDto} from "../../interface/dto/CreateHappeningDto";
import {IHappening} from "../../domain/interfaces/IHappening";
import {IUserRepository} from "../../domain/interfaces/IUserRepository";

@injectable()
export class CreateHappeningUseCase {
    constructor(@inject('IHappeningRepository') private happeningRepository: IHappeningRepository,
                @inject('IUserRepository') private userRepository: IUserRepository) {
    }

    async execute(data: CreateHappeningDto): Promise<IHappening> {
        // Fetch the full IUser object based on the user ID
        const user = await this.userRepository.findById(data.createdBy);
        if (!user) {
            throw new Error('User not found');
        }

        const newHappening: IHappening = {
            title: data.title,
            place: data.place,
            date: data.date,
            location: data.location,
            eventType: data.eventType,
            createdBy: user,
            createdAt: new Date(),
        };

        return this.happeningRepository.create(newHappening);
    }
}