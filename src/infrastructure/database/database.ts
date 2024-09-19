import {DataSource} from "typeorm";
import config from "./ormconfig";
import AppDataSource from "./ormconfig";

export async function initializeDatabase() {
    try {
        await AppDataSource.initialize();
        console.log('Database connection established');
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1); // Exit the process if the connection fails
    }
}