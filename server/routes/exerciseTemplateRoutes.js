import express from 'express';
import {
	createExerciseTemplate,
	getExerciseTemplates,
	getExerciseTemplatebyId,
	deleteExerciseTemplatebyId,
} from '../controllers/exerciseTemplateController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
	.route('/')
	.post(protect, createExerciseTemplate)
	.get(protect, getExerciseTemplates);
router
	.route('/:id')
	.get(protect, getExerciseTemplatebyId)
	.delete(protect, deleteExerciseTemplatebyId);

export default router;
