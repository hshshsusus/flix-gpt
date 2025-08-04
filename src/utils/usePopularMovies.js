import React, { useEffect } from "react";
import { API_Options } from "./Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "./movieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMoviesList = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_Options);
        const json = await data?.json();
        dispatch(addPopularMovies(json?.results))
    };

    useEffect(() => {
        getPopularMoviesList();
    },[])
}
export default usePopularMovies;