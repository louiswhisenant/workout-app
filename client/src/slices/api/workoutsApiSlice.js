import { WORKOUTS_URL } from '../../constants';
import { apiSlice } from '../apiSlice';

const workoutsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getWorkouts: builder.query({
			query: () => ({
				url: WORKOUTS_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getWorkoutById: builder.query({
			query: (id) => ({
				url: `${WORKOUTS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		getWorkoutByMacrocycle: builder.query({
			query: (id) => ({
				url: `${WORKOUTS_URL}/macrocycle/${id}`,
			}),
			transformResponse: (res) =>
				res.sort((a, b) => a.index.macrocycle - b.index.macrocycle),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const {
	useGetWorkoutsQuery,
	useLazyGetWorkoutByIdQuery,
	useLazyGetWorkoutByMacrocycleQuery,
} = workoutsApiSlice;
