import asyncHandler from '../middleware/asyncHandler.js';
import Workout from '../models/workoutModel.js';

// @desc Create order
// @route POST /api/workouts
// @access Private
const createWorkout = asyncHandler(async (req, res) => {
	const {
		// create workout using Workout model here.
	} = req.body;

	const workout = new Workout({
		exercises: exercises.map((item) => ({
			...item,
			product: item._id,
			_id: undefined,
		})),
		user: req.user._id,
		email: req.user.email,
	});

	const newWorkout = await workout.save();

	res.status(201).json(newWorkout);
});

// @desc Get user workouts
// @route GET /api/workouts/user
// @access Private
const getUserWorkouts = asyncHandler(async (req, res) => {
	console.log('get user workouts');
});

// @desc Get workout by ID
// @route GET /api/workouts/:id
// @access Private
const getWorkoutById = asyncHandler(async (req, res) => {
	console.log('get workout by ID');
});

// @desc Update workout
// @route PUT /api/workouts/:id
// @access Private
const updateWorkout = asyncHandler(async (req, res) => {
	const workout = await Workout.findById(req.params.id);

	if (workout) {
		// Update workout logic here.

		const updatedWorkout = await workout.save();

		if (res.status === 500) {
			console.log(error);
		}

		res.json(updatedWorkout);
	} else {
		res.status(404);
		throw new Error('Workout not found');
	}
});

// @desc Delete workout by ID
// @route DELETE /api/workouts/:id
// @access Private
const deleteWorkoutById = asyncHandler(async (req, res) => {
	console.log('delete workout by ID');
});

export {
	createWorkout,
	getUserWorkouts,
	getWorkoutById,
	updateWorkout,
	deleteWorkoutById,
};
