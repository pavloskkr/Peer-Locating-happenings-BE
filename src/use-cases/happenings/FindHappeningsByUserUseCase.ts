import { inject, injectable } from 'inversify';
import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";
import {IHappening} from "../../domain/interfaces/IHappening";

@injectable()
export class FindHappeningsByUserUseCase {
    constructor(
        @inject('IHappeningRepository') private happeningRepository: IHappeningRepository
    ) {}

    async execute(userId: string): Promise<IHappening[]> {
        return this.happeningRepository.findByUserId(userId);
    }
}
