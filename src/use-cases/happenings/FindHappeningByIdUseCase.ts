import { inject, injectable } from 'inversify';
import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";
import {IHappening} from "../../domain/interfaces/IHappening";

@injectable()
export class FindHappeningByIdUseCase {
    constructor(
        @inject('IHappeningRepository') private happeningRepository: IHappeningRepository
    ) {}

    async execute(id: string): Promise<IHappening | null> {
        return this.happeningRepository.findById(id);
    }
}
