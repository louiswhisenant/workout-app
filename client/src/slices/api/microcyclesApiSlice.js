import { MICROCYCLES_URL } from '../../constants';
import { apiSlice } from '../apiSlice';

const microcyclesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMicrocycles: builder.query({
			query: () => ({
				url: MICROCYCLES_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getMicrocycleById: builder.query({
			query: (id) => ({
				url: `${MICROCYCLES_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		getMicrocycleByMacrocycle: builder.query({
			query: (id) => ({
				url: `${MICROCYCLES_URL}/macrocycle/${id}`,
			}),
			transformResponse: (res) =>
				res.sort((a, b) => a.index.macrocycle - b.index.macrocycle),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const {
	useGetMicrocyclesQuery,
	useLazyGetMicrocycleByIdQuery,
	useLazyGetMicrocycleByMacrocycleQuery,
} = microcyclesApiSlice;
