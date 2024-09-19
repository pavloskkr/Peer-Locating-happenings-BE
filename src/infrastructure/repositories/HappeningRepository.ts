import {IHappeningRepository} from "../../domain/interfaces/IHappeningRepository";
import {IHappening} from "../../domain/interfaces/IHappening";
import AppDataSource from "../database/ormconfig";
import {Happening} from "../../domain/entities/Happening";
import {injectable} from "inversify";

@injectable()
export class HappeningRepository implements IHappeningRepository {
    private happeningRepository = AppDataSource.getRepository(Happening)

    async create(happening: IHappening): Promise<IHappening> {
        const newHappening = this.happeningRepository.create(happening);
        return this.happeningRepository.save(newHappening);
    }

    async delete(id: string): Promise<void> {
        await this.happeningRepository.delete(id);
    }

    async findAll(): Promise<IHappening[]> {
        return this.happeningRepository.find();
    }

    async findByDate(date: Date): Promise<IHappening[]> {
        return this.happeningRepository.find({where: {date}});
    }

    async findByEventType(eventType: string): Promise<IHappening[]> {
        return this.happeningRepository.find({where: {eventType}});
    }

    async findById(id: string): Promise<IHappening | null> {
        return this.happeningRepository.findOne({where: {id}});
    }

    async findByUserId(userId: string): Promise<IHappening[]> {
        return this.happeningRepository.find({where: {createdBy: {id: userId}}});
    }

    async update(happening: IHappening): Promise<IHappening> {
        const existingHappening = await this.happeningRepository.findOne({where: { id: happening.id }})

        if (!existingHappening) {
            throw new Error('Happening event not found');
        }
``
        this.happeningRepository.merge(existingHappening, happening);

        return this.happeningRepository.save(existingHappening);
    }

}