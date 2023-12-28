import asyncHandler from '../middleware/asyncHandler.js';
import Microcycle from '../models/microcycleModel.js';

// @desc Create microcycle
// @route POST /api/microcycles
// @access Private
const createMicrocycle = asyncHandler(async (req, res) => {
	const { relatives } = req.body;

	const microcycle = new Microcycle({
		// exercises: exercises.map((item) => ({
		// 	...item,
		// 	exercise: item._id,
		// 	_id: undefined,
		// })),
		user: req.user._id,
		relatives,
	});

	const newMicrocycle = await microcycle.save();

	res.status(201).json(newMicrocycle);
});

// @desc Create microcycle
// @route POST /api/microcycles/series
// @access Private
const createMicrocycleSeries = asyncHandler(async (req, res) => {
	const series = req.body;

	const payload = series.map((item) => {
		return new Microcycle({
			...item,
			user: req.user._id,
		});
	});

	const newMicrocycleSeries = await Microcycle.insertMany(payload);

	res.status(201).json(newMicrocycleSeries);
});

// @desc Get user microcycles
// @route GET /api/microcycles/user
// @access Private
const getUserMicrocycles = asyncHandler(async (req, res) => {
	console.log('get user microcycles');
});

// @desc Get current microcycle
// @route GET /api/microcycles/current
// @access Private
const getCurrentMicrocycle = asyncHandler(async (req, res) => {
	const microcycle = await Microcycle.findOne({
		user: req.user._id,
		isCurrent: true,
	});

	if (microcycle) {
		return res.json(microcycle);
	} else {
		res.status(404);
		throw new Error('No current microcycle found for user.');
	}
});

// @desc Get microcycle by ID
// @route GET /api/microcycles/:id
// @access Private
const getMicrocycleById = asyncHandler(async (req, res) => {
	console.log('get microcycle by ID');
});

// @desc Get Microcycles by Macrocycle ID
// @route GET /api/microcycles/macrocycle/:id
// @access Public
const getMicrocycleByMacrocycle = asyncHandler(async (req, res) => {
	const microcycles = await Microcycle.find({
		'relatives.macrocycle': req.params.id,
	});

	if (microcycles) {
		return res.json(microcycles);
	} else {
		res.status(404);
		throw new Error('No microcycles found.');
	}
});

// @desc Update microcycle
// @route PUT /api/microcycles/:id
// @access Private
const updateMicrocycleById = asyncHandler(async (req, res) => {
	const microcycle = await Microcycle.findById(req.params.id);

	if (microcycle) {
		Object.keys(req.body).forEach((key) => {
			if (
				microcycle.hasOwnProperty(key) &&
				req.body[key] !== microcycle[key]
			) {
				microcycle[key] = req.body[key];
			} else if (!microcycle.hasOwnProperty[key]) {
				microcycle[key] = req.body[key];
			}
		});

		const updatedMicrocycle = await microcycle.save();

		if (res.status === 500) {
			console.log(error);
		}

		res.json(updatedMicrocycle);
	} else {
		res.status(404);
		throw new Error('Microcycle not found');
	}
});

// @desc Delete microcycle by ID
// @route DELETE /api/microcycles/:id
// @access Private
const deleteMicrocycleById = asyncHandler(async (req, res) => {
	console.log('delete microcycle by ID');
});

export {
	createMicrocycle,
	createMicrocycleSeries,
	getUserMicrocycles,
	getCurrentMicrocycle,
	getMicrocycleById,
	getMicrocycleByMacrocycle,
	updateMicrocycleById,
	deleteMicrocycleById,
};
