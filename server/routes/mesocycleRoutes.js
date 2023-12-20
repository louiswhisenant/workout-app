import express from 'express';
import {
	createMesocycle,
	createMesocycleSeries,
	getUserMesocycles,
	getCurrentMesocycle,
	getMesocycleById,
	updateMesocycleById,
	deleteMesocycleById,
} from '../controllers/mesocycleController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createMesocycle);
router.route('/series').post(protect, createMesocycleSeries);
router.route('/user').get(protect, getUserMesocycles);
router.route('/current').get(protect, getCurrentMesocycle);
router
	.route('/:id')
	.get(protect, getMesocycleById)
	.put(protect, updateMesocycleById)
	.delete(protect, deleteMesocycleById);

export default router;
