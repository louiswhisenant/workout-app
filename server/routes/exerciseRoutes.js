import express from 'express';
import {
	createExercise,
	getExercises,
	getExercisebyId,
	getExercisesByWorkout,
} from '../controllers/exerciseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createExercise).get(getExercises);
router.route('/:id').get(getExercisebyId);
router.route('/workout/:id').get(getExercisesByWorkout);

export default router;
