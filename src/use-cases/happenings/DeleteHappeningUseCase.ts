import { inject, injectable } from 'inversify';
import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";

@injectable()
export class DeleteHappeningUseCase {
    constructor(
        @inject('IHappeningRepository') private happeningRepository: IHappeningRepository
    ) {}

    async execute(id: string): Promise<void> {
        const existingHappening = await this.happeningRepository.findById(id);
        if (!existingHappening) throw new Error('Happening not found');

        return this.happeningRepository.delete(id);
    }
}
