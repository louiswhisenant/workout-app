import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	profile: localStorage.getItem('macrocycle')
		? JSON.parse(localStorage.getItem('macrocycle'))
		: null,
	macrocycle: localStorage.getItem('macrocycle')
		? JSON.parse(localStorage.getItem('macrocycle'))
		: null,
	mesocycles: localStorage.getItem('mesocycles')
		? JSON.parse(localStorage.getItem('mesocycles'))
		: null,
	microcycles: localStorage.getItem('microcycles')
		? JSON.parse(localStorage.getItem('microcycles'))
		: null,
	workouts: localStorage.getItem('workouts')
		? JSON.parse(localStorage.getItem('workouts'))
		: null,
	exercises: localStorage.getItem('exercises')
		? JSON.parse(localStorage.getItem('exercises'))
		: null,
};

export const authSlice = createSlice({
	name: 'program',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile = action.payload;
			localStorage.setItem('profile', JSON.stringify(action.payload));
		},
		setMacrocycle: (state, action) => {
			state.macrocycle = action.payload;
			localStorage.setItem('macrocycle', JSON.stringify(action.payload));
		},
		clearProgramState: (state, action) => {
			state.program = null;
			localStorage.removeItem('program', 'macrocycle');
		},
	},
});

export const { setProfile, setMacrocycle, clearProgramState } =
	authSlice.actions;

export default authSlice.reducer;
