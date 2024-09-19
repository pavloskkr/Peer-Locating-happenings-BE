import express from 'express';
import { UserController } from '../controllers/UserController';
import {DIContainer} from "../../infrastructure/DIContainer";

const router = express.Router();
const userController = DIContainer.get(UserController);

router.post('/users', (req, res) => userController.create(req, res));
router.put('/users/:id', (req, res) => userController.update(req, res));
router.delete('/users/:id', (req, res) => userController.delete(req, res));
router.get('/users/:firebaseUid', (req, res) => userController.findByFirebaseUid(req, res));
router.get('/users/id/:id', (req, res) => userController.findById(req, res));

export default router;
