import { inject, injectable } from 'inversify';
import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";
import {IHappening} from "../../domain/interfaces/IHappening";

@injectable()
export class FindAllHappeningsUseCase {
    constructor(
        @inject('IHappeningRepository') private happeningRepository: IHappeningRepository
    ) {}

    async execute(): Promise<IHappening[]> {
        return this.happeningRepository.findAll();
    }
}
