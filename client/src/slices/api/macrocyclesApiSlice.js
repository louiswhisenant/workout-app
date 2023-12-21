import { MACROCYCLES_URL } from '../../constants';
import { apiSlice } from '../apiSlice';

const macrocyclesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMacrocycles: builder.query({
			query: () => ({
				url: MACROCYCLES_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getMacrocycleById: builder.query({
			query: (id) => ({
				url: `${MACROCYCLES_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetMacrocyclesQuery, useGetMacrocycleByIdQuery } =
	macrocyclesApiSlice;
