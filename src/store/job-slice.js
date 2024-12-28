import { createSlice } from '@reduxjs/toolkit';
import localJobs from '../jobs.json';

const initialState = {
    list: localJobs?.jobs || []
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {

        setJobs: (state, action) => {
            // Check if action.payload is an array before using the spread operator
            if (Array.isArray(action.payload)) {
                state.list = [...state.list, ...action.payload];
            } else {
                console.error('Expected payload to be an array:', action.payload);
            }
        },
    }
});

export const { setJobs } = jobSlice.actions;
export default jobSlice.reducer;
