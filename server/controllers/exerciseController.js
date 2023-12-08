import asyncHandler from '../middleware/asyncHandler.js';
import Exercise from '../models/exerciseModel.js';

// @desc Fetch all exercises
// @route GET /api/exercises
// @access Public
const getExercises = asyncHandler(async (req, res) => {
	const exercises = await Exercise.find({});
	res.json(exercises);
});

// @desc Fetch Exercise by ID
// @route GET /api/exercises/:id
// @access Public
const getExercisebyId = asyncHandler(async (req, res) => {
	const exercise = await Exercise.findById(req.params.id);

	if (exercise) {
		return res.json(exercise);
	} else {
		res.status(404);
		throw new Error('Exercise not found');
	}
});

export { getExercises, getExercisebyId };
