import React from "react";
import MoviesCards from "./MovieCards";

const MoviesList = ({ title, movies }) => {
    if(!movies) return;
    return (
        <div className="w-full pl-[100px]">
            <p className="text-white text-[25px] font-semibold pl-[-30px]">{title}</p>
            <div className="w-[100%] overflow-x-auto mt-[20px]">
                <div className="flex gap-[20px] w-max ml-[40px]">
                    {movies?.map((movie) => <MoviesCards key={movie.id} movies={movie} />)}
                </div>
            </div>
        </div>
    )
}
export default MoviesList;