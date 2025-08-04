import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";

const MovieVideo = () => {
    useMovieTrailer();
    const selector = useSelector(video => video.movies.movieTrailer);
    if (!selector) return;
    // console.log("trai", selector.key)

    return (
        <div className="w-full">
            <iframe 
                className="w-[100%] h-[750px]"
                src={`https://www.youtube.com/embed/22w7z_lT6YM?si=${selector?.key}&autoplay=1&mute=1&amp;loop=1&enablejsapi=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                >
            </iframe>
        </div>
    )
}

export default MovieVideo;