import mongoose from 'mongoose';

const workoutSchema = mongoose.Schema(
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
		index: {
			microcycle: {
				type: Number,
			},
			mesocycle: {
				type: Number,
			},
			macrocycle: {
				type: Number,
			},
		},
		startTime: {
			type: Date,
		},
		endTime: {
			type: Date,
		},
		isStarted: {
			type: Boolean,
			required: true,
			default: false,
		},
		isCompleted: {
			type: Boolean,
			required: true,
			default: false,
		},
		// There should only be one workout index set to "isCurrent: true" PER user.
		isCurrent: {
			type: Boolean,
			// required: true,
			default: false,
			// validate: {
			// 	validator: async () => {
			// 		if (this.isCurrent === true) {
			// 			const doc = await this.constructor.findOne({
			// 				user: this.user,
			// 				isCurrent: true,
			// 			});
			// 			return Boolean(!doc);
			// 		}
			// 	},
			// 	message: (props) => 'Current workout already exists.',
			// },
		},
	},
	{
		timestamps: true,
	}
);

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
