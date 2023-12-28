import express from 'express';
import {
	createMicrocycle,
	createMicrocycleSeries,
	getUserMicrocycles,
	getCurrentMicrocycle,
	getMicrocycleById,
	updateMicrocycleById,
	deleteMicrocycleById,
	getMicrocycleByMacrocycle,
} from '../controllers/microcycleController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createMicrocycle);
router.route('/series').post(protect, createMicrocycleSeries);
router.route('/user').get(protect, getUserMicrocycles);
router.route('/current').get(protect, getCurrentMicrocycle);
router
	.route('/:id')
	.get(protect, getMicrocycleById)
	.put(protect, updateMicrocycleById)
	.delete(protect, deleteMicrocycleById);
router.route('/macrocycle/:id').get(protect, getMicrocycleByMacrocycle);

export default router;
