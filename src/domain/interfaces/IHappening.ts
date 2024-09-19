import {IUser} from "./IUser";
import {Happening} from "../entities/Happening";

export interface IHappening {
    title: string;
    place: string;
    date: Date;
    location: string;
    eventType: string;
    createdBy: IUser;
    createdAt: Date;
}