import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	profile: localStorage.getItem('profile')
		? JSON.parse(localStorage.getItem('profile'))
		: null,
	macrocycle: null,
	mesocycles: null,
	microcycles: null,
	workouts: null,
	exercises: null,
};

export const appDataSlice = createSlice({
	name: 'appData',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile = action.payload;
			localStorage.setItem('profile', JSON.stringify(action.payload));
		},
		setMacrocycle: (state, action) => {
			state.macrocycle = action.payload;
		},
		setMesocycles: (state, action) => {
			state.mesocycles = action.payload;
		},
		setMicrocycles: (state, action) => {
			state.microcycles = action.payload;
		},
		setWorkouts: (state, action) => {
			state.workouts = action.payload;
		},
		clearAppData: (state, action) => {
			state.profile = null;
			state.macrocycle = null;
			state.mesocycles = null;
			state.microcycles = null;
			state.workouts = null;
			state.exercises = null;
			localStorage.removeItem('profile');
		},
	},
});

export const {
	setProfile,
	setMacrocycle,
	setMesocycles,
	setMicrocycles,
	setWorkouts,
	clearAppData,
} = appDataSlice.actions;

export default appDataSlice.reducer;
