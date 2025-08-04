import React, { useEffect } from "react";
import { API_Options } from "./Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./movieSlice";

const useNowPlayMovies = () => {

    const dispatch = useDispatch();
    const getNowPlayMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?',API_Options);
        const json = await data?.json();
        dispatch(addNowPlayingMovies(json?.results))
    }

    useEffect(() =>{
        getNowPlayMovies();
    },[])
    return;
}
export default useNowPlayMovies;