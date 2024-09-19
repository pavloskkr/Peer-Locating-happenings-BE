import {IHappening} from "./IHappening";
import {Happening} from "../entities/Happening";

export interface IHappeningRepository {
    create(happening: IHappening): Promise<IHappening>;
    update(happening: IHappening): Promise<IHappening>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<IHappening | null>;
    findByUserId(userId: string): Promise<IHappening[]>;
    findByEventType(eventType: string): Promise<IHappening[]>;
    findByDate(date: Date): Promise<IHappening[]>;
    findAll(): Promise<IHappening[]>;
}
