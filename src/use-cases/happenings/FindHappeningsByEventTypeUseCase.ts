import { inject, injectable } from 'inversify';
import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";
import {IHappening} from "../../domain/interfaces/IHappening";


@injectable()
export class FindHappeningsByEventTypeUseCase {
    constructor(
        @inject('IHappeningRepository') private happeningRepository: IHappeningRepository
    ) {}

    async execute(eventType: string): Promise<IHappening[]> {
        return this.happeningRepository.findByEventType(eventType);
    }
}
