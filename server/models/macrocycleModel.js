import mongoose from 'mongoose';

const macrocycleSchema = mongoose.Schema(
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
			mesocycles: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Exercise',
				},
			],
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
		isCurrent: {
			type: Boolean,
			required: true,
			default: false,
			validate: {
				validator: async () => {
					if (this.isCurrent === true) {
						const doc = await this.constructor.findOne({
							user: this.user,
							isCurrent: true,
						});
						return Boolean(!doc);
					}
				},
				message: (props) => 'Current macrocycle already exists.',
			},
		},
	},
	{
		timestamps: true,
	}
);

const Macrocycle = mongoose.model('Macrocycle', macrocycleSchema);

export default Macrocycle;
