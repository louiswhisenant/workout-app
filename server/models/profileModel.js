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
			},
			microcycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Microcycle',
			},
			mesocycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Mesocycle',
			},
			macrocycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Macrocyle',
			},
		},
		true1RM: {
			squat: {
				type: Number,
				_id: false,
			},
			bench: {
				type: Number,
				_id: false,
			},
			deadlift: {
				type: Number,
				_id: false,
			},
		},
		estimated1RM: {
			squat: {
				type: Number,
				_id: false,
			},
			bench: {
				type: Number,
				_id: false,
			},
			deadlift: {
				type: Number,
				_id: false,
			},
		},
		training1RM: {
			squat: {
				type: Number,
				_id: false,
			},
			bench: {
				type: Number,
				_id: false,
			},
			deadlift: {
				type: Number,
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
