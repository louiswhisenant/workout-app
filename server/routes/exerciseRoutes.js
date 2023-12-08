import express from 'express';
import {
	getExercises,
	getExercisebyId,
} from '../controllers/exerciseController.js';

const router = express.Router();

router.route('/').get(getExercises);
router.route('/:id').get(getExercisebyId);

export default router;
