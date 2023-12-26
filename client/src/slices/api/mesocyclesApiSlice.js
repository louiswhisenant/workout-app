import { MESOCYCLES_URL } from '../../constants';
import { apiSlice } from '../apiSlice';

const mesocyclesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMesocycles: builder.query({
			query: () => ({
				url: MESOCYCLES_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getMesocycleById: builder.query({
			query: (id) => ({
				url: `${MESOCYCLES_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		getMesocycleByMacrocycle: builder.query({
			query: (id) => ({
				url: `${MESOCYCLES_URL}/macrocycle/${id}`,
			}),
			transformResponse: (res) =>
				res.sort((a, b) => a.index.macrocycle - b.index.macrocycle),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const {
	useGetMesocyclesQuery,
	useLazyGetMesocycleByIdQuery,
	useLazyGetMesocycleByMacrocycleQuery,
} = mesocyclesApiSlice;
