import mongoose from 'mongoose';

const workoutSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		exercises: [
			{
				name: {
					type: String,
					required: true,
				},
				sets: [
					{
						weight: {
							type: Number,
							required: true,
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
							required: true,
						},
					},
				],
				exercise: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Exercise',
				},
			},
		],
		start: {
			type: Date,
		},
		end: {
			type: Date,
		},
		completed: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
