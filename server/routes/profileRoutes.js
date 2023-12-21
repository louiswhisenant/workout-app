import express from 'express';
import {
	createUserProfile,
	getUserProfile,
	getProfileById,
	updateUserProfile,
	deleteUserProfile,
} from '../controllers/profileController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
	.route('/')
	.post(protect, createUserProfile)
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)
	.delete(protect, deleteUserProfile);
router.route('/:id').post(protect, getProfileById);

export default router;
