import { inject, injectable } from 'inversify';
import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";
import {IHappening} from "../../domain/interfaces/IHappening";

@injectable()
export class FindHappeningsByDateUseCase {
    constructor(
        @inject('IHappeningRepository') private happeningRepository: IHappeningRepository
    ) {}

    async execute(date: Date): Promise<IHappening[]> {
        return this.happeningRepository.findByDate(date);
    }
}
