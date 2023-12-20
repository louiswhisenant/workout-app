import asyncHandler from '../middleware/asyncHandler.js';
import Mesocycle from '../models/mesocycleModel.js';

// @desc Create mesocycle
// @route POST /api/mesocycles
// @access Private
const createMesocycle = asyncHandler(async (req, res) => {
	const { relatives } = req.body;

	const mesocycle = new Mesocycle({
		// exercises: exercises.map((item) => ({
		// 	...item,
		// 	exercise: item._id,
		// 	_id: undefined,
		// })),
		user: req.user._id,
		relatives,
	});

	const newMesocycle = await mesocycle.save();

	res.status(201).json(newMesocycle);
});

// @desc Create mesocycle
// @route POST /api/mesocycles/series
// @access Private
const createMesocycleSeries = asyncHandler(async (req, res) => {
	const series = req.body;

	const payload = series.map((item) => {
		return new Mesocycle({
			...item,
			user: req.user._id,
		});
	});

	const newMesocycleSeries = await Mesocycle.insertMany(payload);

	res.status(201).json(newMesocycleSeries);
});

// @desc Get user mesocycles
// @route GET /api/mesocycles/user
// @access Private
const getUserMesocycles = asyncHandler(async (req, res) => {
	console.log('get user mesocycles');
});

// @desc Get current mesocycle
// @route GET /api/mesocycles/current
// @access Private
const getCurrentMesocycle = asyncHandler(async (req, res) => {
	const mesocycle = await Mesocycle.findOne({
		user: req.user._id,
		isCurrent: true,
	});

	if (mesocycle) {
		return res.json(mesocycle);
	} else {
		res.status(404);
		throw new Error('No current mesocycle found for user.');
	}
});

// @desc Get mesocycle by ID
// @route GET /api/mesocycles/:id
// @access Private
const getMesocycleById = asyncHandler(async (req, res) => {
	console.log('get mesocycle by ID');
});

// @desc Update mesocycle
// @route PUT /api/mesocycles/:id
// @access Private
const updateMesocycleById = asyncHandler(async (req, res) => {
	const mesocycle = await Mesocycle.findById(req.params.id);

	if (mesocycle) {
		Object.keys(req.body).forEach((key) => {
			if (
				mesocycle.hasOwnProperty(key) &&
				req.body[key] !== mesocycle[key]
			) {
				mesocycle[key] = req.body[key];
			} else if (!mesocycle.hasOwnProperty[key]) {
				mesocycle[key] = req.body[key];
			}
		});

		const updatedMesocycle = await mesocycle.save();

		if (res.status === 500) {
			console.log(error);
		}

		res.json(updatedMesocycle);
	} else {
		res.status(404);
		throw new Error('Mesocycle not found');
	}
});

// @desc Delete mesocycle by ID
// @route DELETE /api/mesocycles/:id
// @access Private
const deleteMesocycleById = asyncHandler(async (req, res) => {
	console.log('delete mesocycle by ID');
});

export {
	createMesocycle,
	createMesocycleSeries,
	getUserMesocycles,
	getCurrentMesocycle,
	getMesocycleById,
	updateMesocycleById,
	deleteMesocycleById,
};
