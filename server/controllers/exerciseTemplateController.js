import asyncHandler from '../middleware/asyncHandler.js';
import ExerciseTemplate from '../models/exerciseTemplateModel.js';

// @desc Create exercise template
// @route POST /api/exercise-templates
// @access Public
const createExerciseTemplate = asyncHandler(async (req, res) => {
	const { name, categories, measurement, description } = req.body;

	const exerciseTemplate = new ExerciseTemplate({
		user: req.user._id,
		name,
		categories,
		measurement,
		description,
	});

	const createdExerciseTemplate = await exerciseTemplate.save();

	res.status(201).json(createdExerciseTemplate);
});

// @desc Fetch all exercise templates
// @route GET /api/exercise-templates
// @access Public
const getExerciseTemplates = asyncHandler(async (req, res) => {
	const exerciseTemplates = await ExerciseTemplate.find({});
	res.json(exerciseTemplates);
});

// @desc Fetch Exercise Template by ID
// @route GET /api/exercise-templates/:id
// @access Public
const getExerciseTemplatebyId = asyncHandler(async (req, res) => {
	const exerciseTemplate = await ExerciseTemplate.findById(req.params.id);

	if (exerciseTemplate) {
		return res.json(exerciseTemplate);
	} else {
		res.status(404);
		throw new Error('Exercise Template not found');
	}
});

// @desc Delete Exercise Template by ID
// @route DELETE /api/exercise-templates/:id
// @access Public
const deleteExerciseTemplatebyId = asyncHandler(async (req, res) => {
	const exerciseTemplate = await ExerciseTemplate.findById(req.params.id);

	if (exerciseTemplate) {
		if (!exerciseTemplate.user || exerciseTemplate.user !== req.user._id) {
			res.status(403);
			throw new Error('Action forbidden.');
		} else {
			await ExerciseTemplate.findByIdAndDelete(req.params.id);
			res.status(200).json({ message: 'Exercise Template deleted.' });
		}
	} else {
		res.status(404);
		throw new Error('Exercise Template not found');
	}
});

export {
	createExerciseTemplate,
	getExerciseTemplates,
	getExerciseTemplatebyId,
	deleteExerciseTemplatebyId,
};
