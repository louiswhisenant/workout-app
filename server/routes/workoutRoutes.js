import express from 'express';
import {
	createWorkout,
	createWorkoutSeries,
	getUserWorkouts,
	getCurrentWorkout,
	getWorkoutById,
	getWorkoutsByMacrocycle,
	updateWorkoutById,
	deleteWorkoutById,
} from '../controllers/workoutController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createWorkout);
router.route('/series').post(protect, createWorkoutSeries);
router.route('/user').get(protect, getUserWorkouts);
router.route('/current').get(protect, getCurrentWorkout);
router.route('/macrocycle/:id').get(protect, getWorkoutsByMacrocycle);
router
	.route('/:id')
	.get(protect, getWorkoutById)
	.put(protect, updateWorkoutById)
	.delete(protect, deleteWorkoutById);

export default router;
