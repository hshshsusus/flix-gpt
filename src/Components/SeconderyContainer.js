import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SeconderyContainer = () => {

    const nowPlay = useSelector(movie => movie?.movies.nowPlayingMovies);

    const popular = useSelector(movie => movie?.movies.nowPopularMovies)
    // console.log("movie", sel)

    return (
        <div className="w-auto bg-[#181818] flex flex-col gap-[15px] pb-[20px]" >
            <div className="mt-[-200px]">
                <MoviesList title={"Now Playing"} movies={nowPlay} />
            </div>
            <MoviesList title={"Popular"} movies={popular} />
            <MoviesList title={"Latest"} movies={nowPlay} />
            <MoviesList title={"Action"} movies={nowPlay} />
            <MoviesList title={"Hurror"} movies={nowPlay} />
        </div>
    )
}
export default SeconderyContainer;