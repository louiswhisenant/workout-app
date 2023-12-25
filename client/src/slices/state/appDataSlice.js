import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	profile: localStorage.getItem('profile')
		? JSON.parse(localStorage.getItem('profile'))
		: null,
	macrocycle: null,
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
		clearAppData: (state, action) => {
			state.profile = null;
			state.macrocycle = null;
			localStorage.removeItem('profile');
		},
	},
});

export const { setProfile, setMacrocycle, clearAppData } = appDataSlice.actions;

export default appDataSlice.reducer;
