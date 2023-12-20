import mongoose from 'mongoose';

const exerciseTemplateSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
			unique: true,
		},
		// videoUrl: {
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
					'Calves',
					'Lats',
					'Traps',
				],
				required: true,
			},
		],
		measurement: [
			{
				type: String,
				required: true,
				enum: ['repetitions', 'distance', 'duration'],
			},
		],
		description: {
			type: String,
			default: '',
		},
	},
	{
		timestamps: true,
	}
);

const ExerciseTemplate = mongoose.model(
	'ExerciseTemplate',
	exerciseTemplateSchema
);

export default ExerciseTemplate;
