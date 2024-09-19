import { inject, injectable } from 'inversify';
import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";
import {UpdateHappeningDto} from "../../interface/dto/UpdateHappeningDto";
import {IHappening} from "../../domain/interfaces/IHappening";

@injectable()
export class UpdateHappeningUseCase {
    constructor(
        @inject('IHappeningRepository') private happeningRepository: IHappeningRepository
    ) {}

    async execute(data: UpdateHappeningDto): Promise<IHappening> {
        const existingHappening = await this.happeningRepository.findById(data.id);
        if (!existingHappening) throw new Error('Happening not found');

        if (data.title) existingHappening.title = data.title;
        if (data.place) existingHappening.place = data.place;
        if (data.date) existingHappening.date = data.date;
        if (data.location) existingHappening.location = data.location;
        if (data.eventType) existingHappening.eventType = data.eventType;

        return this.happeningRepository.update(existingHappening);
    }
}
