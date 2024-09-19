import {DataSource} from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5433,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '1995',
    database: process.env.DB_NAME || 'peer-core-db',
    entities: [
        // Specify your entity paths
        'src/domain/entities/*.ts',
    ],
    synchronize: true, // Set this to false in production
    logging: true,
});

export default AppDataSource;
