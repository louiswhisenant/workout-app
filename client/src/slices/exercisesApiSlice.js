import { EXERCISES_URL } from '../constants';
import { apiSlice } from './apiSlice';

const exercisesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({
				url: EXERCISES_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getProductDetails: builder.query({
			query: (exerciseId) => ({
				url: `${EXERCISES_URL}/${exerciseId}`,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } =
	exercisesApiSlice;
