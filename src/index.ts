import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import { errorHandler } from './interface/middleware/errorHandler';
import { logger } from './infrastructure/logger';
import { setupSwagger } from './interface/swagger';
import path from 'path';
import {initializeDatabase} from "./infrastructure/database/database";
import testRoutes from "./interface/routes/testRoutes";
import userRoutes from "./interface/routes/UserRoutes";
import happeningRoutes from "./interface/routes/HappeningRoutes";

const app: Application = express();

app.use(express.json());
app.use('/api', happeningRoutes);
app.use('/api', userRoutes);
app.use('/api', testRoutes);

const PORT = process.env.PORT || 3000;

initializeDatabase();

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
