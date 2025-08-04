import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice";
import moviesReducer from "./movieSlice";
import GptReducer from "./GptSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies:moviesReducer,
        Gpt:GptReducer,
    }
});

export default appStore;
