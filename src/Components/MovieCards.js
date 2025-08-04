import React from "react";
import { Poster_PATH } from "../utils/Constants";

const MoviesCards = ({movies}) => {
    if(!movies?.poster_path) return null;
    return(
        <div className="">
            <img alt="card" src={Poster_PATH + movies?.poster_path} className="w-[150px] rounded-[8px]"/>
        </div>
    )
}
export default MoviesCards;