import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    darkMode: false,
}

const preferenceSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggleDarkMode } = preferenceSlice.actions;  
export default preferenceSlice.reducer;