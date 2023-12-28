import mongoose from 'mongoose';

const profileSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
			unique: true,
		},
		name: {
			type: String,
			required: false,
		},
		current: {
			workout: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Workout',
				required: true,
				default: null,
			},
			microcycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Microcycle',
				required: true,
				default: null,
			},
			mesocycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Mesocycle',
				required: true,
				default: null,
			},
			macrocycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Macrocyle',
				required: true,
				default: null,
			},
		},
		true1RM: {
			squat: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
			bench: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
			deadlift: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
		},
		estimated1RM: {
			squat: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
			bench: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
			deadlift: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
		},
		training1RM: {
			squat: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
			bench: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
			deadlift: {
				type: Number,
				required: true,
				default: null,
				_id: false,
			},
		},
	},
	{
		timestamps: true,
	}
);

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
