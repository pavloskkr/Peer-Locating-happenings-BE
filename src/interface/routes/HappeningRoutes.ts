import express from 'express';
import {HappeningController} from '../controllers/HappeningController';
import {DIContainer} from "../../infrastructure/DIContainer";

const router = express.Router();
const happeningController = DIContainer.get(HappeningController);

router.post('/happenings', (req, res) => happeningController.create(req, res));
router.put('/happenings/:id', (req, res) => happeningController.update(req, res));
router.delete('/happenings/:id', (req, res) => happeningController.delete(req, res));
router.get('/happenings', (req, res) => happeningController.findAll(req, res));
router.get('/happenings/:id', (req, res) => happeningController.findById(req, res));
router.get('/happenings/user/:userId', (req, res) => happeningController.findByUser(req, res));

export default router;
