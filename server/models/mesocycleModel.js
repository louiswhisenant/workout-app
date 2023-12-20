import mongoose from 'mongoose';

const mesocycleSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		relatives: {
			exercises: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Exercise',
				},
			],
			workouts: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Exercise',
				},
			],
			microcycles: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Exercise',
				},
			],
			macrocycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Macrocycle',
			},
		},
		index: {
			macrocycle: {
				type: Number,
				_id: false,
			},
		},
		startTime: {
			type: Date,
		},
		endTime: {
			type: Date,
		},
		isCompleted: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Mesocycle = mongoose.model('Mesocycle', mesocycleSchema);

export default Mesocycle;
