import asyncHandler from '../middleware/asyncHandler.js';
import Macrocycle from '../models/macrocycleModel.js';

// @desc Create macrocycle
// @route POST /api/macrocycles
// @access Private
const createMacrocycle = asyncHandler(async (req, res) => {
	const { relatives } = req.body;

	const macrocycle = new Macrocycle({
		user: req.user._id,
		relatives,
	});

	const newMacrocycle = await macrocycle.save();

	res.status(201).json(newMacrocycle);
});

// @desc Get user macrocycles
// @route GET /api/macrocycles/user
// @access Private
const getUserMacrocycles = asyncHandler(async (req, res) => {
	console.log('get user macrocycles');
});

// @desc Get macrocycle by ID
// @route GET /api/macrocycles/:id
// @access Private
const getMacrocycleById = asyncHandler(async (req, res) => {
	const macrocycle = await Macrocycle.findById(req.params.id);

	if (macrocycle) {
		return res.json(macrocycle);
	} else {
		res.status(404);
		throw new Error('No current macrocycle found for user.');
	}
});

// @desc Update macrocycle
// @route PUT /api/macrocycles/:id
// @access Private
const updateMacrocycleById = asyncHandler(async (req, res) => {
	const macrocycle = await Macrocycle.findById(req.params.id);

	if (macrocycle) {
		Object.keys(req.body).forEach((key) => {
			if (
				macrocycle.hasOwnProperty(key) &&
				req.body[key] !== macrocycle[key]
			) {
				macrocycle[key] = req.body[key];
			} else if (!macrocycle.hasOwnProperty[key]) {
				macrocycle[key] = req.body[key];
			}
		});

		const updatedMacrocycle = await macrocycle.save();

		if (res.status === 500) {
			console.log(error);
		}

		res.json(updatedMacrocycle);
	} else {
		res.status(404);
		throw new Error('Macrocycle not found');
	}
});

// @desc Delete macrocycle by ID
// @route DELETE /api/macrocycles/:id
// @access Private
const deleteMacrocycleById = asyncHandler(async (req, res) => {
	console.log('delete macrocycle by ID');
});

export {
	createMacrocycle,
	getUserMacrocycles,
	getMacrocycleById,
	updateMacrocycleById,
	deleteMacrocycleById,
};
