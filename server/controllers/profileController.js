import asyncHandler from '../middleware/asyncHandler.js';
import Profile from '../models/profileModel.js';

// @desc Create user profile
// @route POST /api/profile
// @access Private
const createUserProfile = asyncHandler(async (req, res) => {
	const data = req.body;

	const profile = new Profile({ ...data, user: req.user._id });

	const newProfile = await profile.save();

	res.status(201).json(newProfile);
});

// @desc Get user profile
// @route GET /api/profiles
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
	const profile = await Profile.findOne({ user: req.user._id });

	if (profile) {
		return res.json(profile);
	} else {
		res.status(404);
		throw new Error('No current profile found for user.');
	}
});

// @desc Get profile by ID
// @route GET /api/profiles/:id
// @access Private
const getProfileById = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const profile = await Profile.findById(id);

	if (profile) {
		res.status(200).json({
			_id: profile._id,
			name: profile.name,
			// more items to be added in future
		});
	} else {
		res.status(404);
		throw new Error('Profile not found.');
	}
});

// @desc Update user profile
// @route PUT /api/profiles
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const { name, current, true1RM, estimated1RM, training1RM } = req.body;

	const profile = await Profile.findOne({ user: req.user._id });

	if (profile) {
		// This code was not updating documents in the database.
		// Object.keys(data).forEach((key) => {
		// 	if (profile.hasOwnProperty(key) && data[key] !== profile[key]) {
		// 		profile[key] = data[key];
		// 	} else if (!profile.hasOwnProperty[key]) {
		// 		profile[key] = data[key];
		// 	}
		// });

		// But this code does.
		if (name) {
			profile.name = name;
		}
		if (current) {
			profile.current = current;
		}
		if (true1RM) {
			profile.true1RM = true1RM;
		}
		if (estimated1RM) {
			profile.estimated1RM = estimated1RM;
		}
		if (training1RM) {
			profile.training1RM = training1RM;
		}
		profile.updatedAt = Date.now();

		const updatedProfile = await profile.save();

		if (res.status === 500) {
			console.log(error);
		}

		res.json(updatedProfile);
	} else {
		res.status(404);
		throw new Error('Profile not found');
	}
});

// @desc Delete user profile
// @route DELETE /api/profiles
// @access Private
const deleteUserProfile = asyncHandler(async (req, res) => {
	const profile = await Profile.findById(req.user._id);

	if (profile) {
		console.log('delete user profile');
	} else {
		res.status(404);
		throw new Error('Profile not found');
	}
});

export {
	createUserProfile,
	getUserProfile,
	getProfileById,
	updateUserProfile,
	deleteUserProfile,
};
