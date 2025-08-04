import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        GptSearchValue: false,
        suggestedMovies: null,
        loading: '',
    },
    reducers: {
        changeGptSearchValue: (state, action) => {
            state.GptSearchValue = !state.GptSearchValue;
        },
        addSuggestedMovies: (state, action) => {
            state.suggestedMovies = action.payload;
        },
        takeInputValue: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const { changeGptSearchValue, addSuggestedMovies, takeInputValue } = GptSlice.actions;

export default GptSlice.reducer;