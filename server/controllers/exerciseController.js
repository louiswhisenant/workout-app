import asyncHandler from '../middleware/asyncHandler.js';
import Exercise from '../models/exerciseModel.js';

// @desc Create exercise
// @route POST /api/exercises
// @access Public
const createExercise = asyncHandler(async (req, res) => {
	const { relatives, name, categories, sets } = req.body;

	const exercise = new Exercise({
		user: req.user._id,
		relatives,
		name,
		categories,
		sets,
	});

	console.log(exercise);

	const createdExercise = await exercise.save();

	res.status(201).json(createdExercise);
});

// @desc Fetch all exercises
// @route GET /api/exercises
// @access Public
const getExercises = asyncHandler(async (req, res) => {
	const exercises = await Exercise.find({ user: req.user._id });
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

// @desc Fetch Exercises by Workout ID
// @route GET /api/exercises/workout/:id
// @access Public
const getExercisesByWorkout = asyncHandler(async (req, res) => {
	const exercises = await Exercise.find({
		'relatives.workout': req.params.id,
	});

	if (exercises) {
		return res.json(exercises);
	} else {
		res.status(404);
		throw new Error('No exercise found.');
	}
});

// @desc Delete Exercise by ID
// @route DELETE /api/exercises/:id
// @access Public
const deleteExercisebyId = asyncHandler(async (req, res) => {
	const exercise = await Exercise.find({ workout: req.params.id });

	if (exercise) {
		if (exercise.user !== req.user._id) {
			res.status(403);
			throw new Error('Action forbidden.');
		} else {
			await Exercise.findByIdAndDelete(req.params.id);
			res.status(200).json({ message: 'Exercise deleted.' });
		}
	} else {
		res.status(404);
		throw new Error('Exercise not found');
	}
});

export {
	createExercise,
	getExercises,
	getExercisebyId,
	getExercisesByWorkout,
	deleteExercisebyId,
};
