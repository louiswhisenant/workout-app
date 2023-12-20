import mongoose from 'mongoose';

const microcycleSchema = mongoose.Schema(
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
			mesocycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Mesocycle',
			},
			macrocycle: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Macrocycle',
			},
		},
		index: {
			mesocycle: {
				type: Number,
				_id: false,
			},
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

const Microcycle = mongoose.model('Microcycle', microcycleSchema);

export default Microcycle;
