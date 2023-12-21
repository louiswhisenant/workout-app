import express from 'express';
import {
	createMacrocycle,
	getUserMacrocycles,
	getMacrocycleById,
	updateMacrocycleById,
	deleteMacrocycleById,
} from '../controllers/macrocycleController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createMacrocycle);
router.route('/user').get(protect, getUserMacrocycles);
router
	.route('/:id')
	.get(protect, getMacrocycleById)
	.put(protect, updateMacrocycleById)
	.delete(protect, deleteMacrocycleById);

export default router;
