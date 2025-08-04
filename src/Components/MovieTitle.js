import React, { useState } from "react";
import { SlControlPlay } from "react-icons/sl";
import { useSelector } from "react-redux";
import { BsInfoCircle } from "react-icons/bs";

const MovieTitle = () => {

    const [more, setMore] = useState(false);
    

    const selector = useSelector(video => video.movies.nowPlayingMovies);
    if (!selector?.[0]) return;
    const { original_title, overview, title, release_date } = selector?.[0];

    return (
        <div className="flex flex-col gap-[5px] absolute top-[170px] left-[165px] w-[300px] z-10">
            <p className="text-[35px] font-bold title">{original_title}</p>
            {more && <>
                <p className="text-gray-300 h-[100px] overflow-hidden">{overview}</p>
                <p className="text-red-600 font-bold text-[22px]">{title}</p>
                <p className="text-green-600 text-[18px]">{release_date}</p>
            </>}
            <div className="flex gap-[15px] mt-[10px]">
                <div className="flex items-center gap-[5px] bg-gray-300 w-fit text-black font-semibold py-[10px] px-[18px] rounded-[8px]"><SlControlPlay className="" /><button>Play</button></div>
                <div className="flex items-center gap-[5px] bg-gray-300 w-fit text-black font-semibold py-[10px] px-[18px] rounded-[8px]">
                    <BsInfoCircle />
                    <button onClick={() => setMore(!more)}>{more ? "Show less" : "More Info"}</button>
                </div>
            </div>
        </div>
    )
}

export default MovieTitle;