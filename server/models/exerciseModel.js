import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		relatives: {
			workout: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
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
				ref: 'Macrocycle',
			},
		},
		name: {
			type: String,
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
				],
				required: true,
			},
		],
		sets: {
			planned: [
				{
					order: {
						type: Number,
						required: true,
					},
					weight: {
						type: Number,
						required: false,
					},
					repetitions: {
						type: Number,
						required: false,
					},
					distance: {
						type: Number,
						required: false,
					},
					duration: {
						type: Number,
						required: false,
					},
					difficulty: {
						type: String,
						enum: ['10', '7', '5'],
						// enum: ['🥵', '🙂', '😴'],
					},
					_id: false,
				},
			],
			actual: [
				{
					order: {
						type: Number,
						required: true,
					},
					weight: {
						type: Number,
						required: false,
					},
					repetitions: {
						type: Number,
						required: false,
					},
					distance: {
						type: Number,
						required: false,
					},
					duration: {
						type: Number,
						required: false,
					},
					difficulty: {
						type: String,
						enum: ['10', '7', '5'],
						// enum: ['🥵', '🙂', '😴'],
					},
					_id: false,
				},
			],
		},
		notes: {
			type: String,
			// required: true,
			default: '',
		},
		status: {
			type: String,
			required: true,
			enum: ['planned', 'current', 'complete', 'skipped'],
			default: 'planned',
		},
		date: {
			type: Date,
			required: true,
			default: Date.now(),
		},
	},
	{
		timestamps: true,
	}
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
