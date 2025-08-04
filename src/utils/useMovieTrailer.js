import { useEffect } from "react";
import { API_Options } from "./Constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "./movieSlice";

const useMovieTrailer = () => {
    // console.log("id",id)

    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/1087192/videos",API_Options);
        const json = await data?.json();
        const filteredData = json?.results?.filter((video) => video?.type === "Trailer");
        const mainVideo = filteredData[0] ? filteredData[0] : json?.results[0];
        // console.log("main", mainVideo)
        dispatch(addMovieTrailer(mainVideo));
    }

    useEffect(()=>{
        getMovieTrailer();
    },[])

}
export default useMovieTrailer;