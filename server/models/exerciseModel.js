import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
		// video: {
		// 	type: String,
		// 	required: false,
		// },
		categories: [
			{
				type: String,
				enum: [
					'Back',
					'Upper',
					'Lower',
					'Chest',
					'Push',
					'Pull',
					'Quads',
					'Glutes',
					'Grip',
					'Hamstrings',
					'Deltoids',
					'Shoulders',
					'Posterior Chain',
					'Main',
					'Accessory',
					'Compound',
					'Isolation',
				],
				required: true,
			},
		],
		// description: {
		// 	type: String,
		// 	required: false,
		// },
	},
	{
		timestamps: true,
	}
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
