import express from 'express';
import {
	createWorkout,
	getUserWorkouts,
	getWorkoutById,
	updateWorkout,
	deleteWorkoutById,
} from '../controllers/workoutController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createWorkout);
router.route('/user').get(protect, getUserWorkouts);
router
	.route('/:id')
	.get(protect, getWorkoutById)
	.put(protect, updateWorkout)
	.delete(protect, deleteWorkoutById);

export default router;
