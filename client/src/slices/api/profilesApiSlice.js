import { PROFILES_URL } from '../../constants';
import { apiSlice } from '../apiSlice';

const exercisesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createUserProfile: builder.mutation({
			query: (data) => ({
				url: PROFILES_URL,
				method: 'POST',
				body: data,
			}),
			keepUnusedDataFor: 5,
		}),
		getUserProfile: builder.query({
			query: () => ({
				url: PROFILES_URL,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useCreateUserProfileMutation, useGetUserProfileQuery } =
	exercisesApiSlice;
