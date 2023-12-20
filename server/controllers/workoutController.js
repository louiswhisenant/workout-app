import asyncHandler from '../middleware/asyncHandler.js';
import Workout from '../models/workoutModel.js';

// @desc Create workout
// @route POST /api/workouts
// @access Private
const createWorkout = asyncHandler(async (req, res) => {
	const { relatives } = req.body;

	const workout = new Workout({
		// exercises: exercises.map((item) => ({
		// 	...item,
		// 	exercise: item._id,
		// 	_id: undefined,
		// })),
		user: req.user._id,
		relatives,
	});

	const newWorkout = await workout.save();

	res.status(201).json(newWorkout);
});

// @desc Create workout
// @route POST /api/workouts/series
// @access Private
const createWorkoutSeries = asyncHandler(async (req, res) => {
	const series = req.body;

	const payload = series.map((item) => {
		const a = new Workout({
			...item,
			user: req.user._id,
		});
	});

	const newWorkoutSeries = await Workout.insertMany(series);

	res.status(201).json(newWorkout);
});

// @desc Get user workouts
// @route GET /api/workouts/user
// @access Private
const getUserWorkouts = asyncHandler(async (req, res) => {
	console.log('get user workouts');
});

// @desc Get current workout
// @route GET /api/workouts/current
// @access Private
const getCurrentWorkout = asyncHandler(async (req, res) => {
	const workout = await Workout.findOne({
		user: req.user._id,
		isCurrent: true,
	});

	if (workout) {
		return res.json(workout);
	} else {
		res.status(404);
		throw new Error('No current workout found for user.');
	}
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
const updateWorkoutById = asyncHandler(async (req, res) => {
	const workout = await Workout.findById(req.params.id);

	if (workout) {
		Object.keys(req.body).forEach((key) => {
			if (workout.hasOwnProperty(key) && req.body[key] !== workout[key]) {
				workout[key] = req.body[key];
			} else if (!workout.hasOwnProperty[key]) {
				workout[key] = req.body[key];
			}
		});

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
	createWorkoutSeries,
	getUserWorkouts,
	getCurrentWorkout,
	getWorkoutById,
	updateWorkoutById,
	deleteWorkoutById,
};
