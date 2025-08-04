import React from "react";
import { useSelector } from "react-redux";
import { Poster_PATH } from "../utils/Constants";
import MoviesCards from "./MovieCards";
import Loader from "../utils/loader";
import ShimmarUI from "./ShimmarUI";

const GPTSearchBody = () => {

    const {suggestedMovies, loading} = useSelector(store => store?.Gpt);

    if(!loading && !suggestedMovies) return <div className="w-[60%] h-[450px] absolute top-[230px] flex items-center justify-center bg-[rgba(0,0,0,0.8)] rounded-[20px]"><p className="text-white text-[25px] font-bold">No suggestions are available.</p></div>;

    if(loading) return <Loader/>;
    
    if(!suggestedMovies) return <ShimmarUI />;
    console.log("seggest", loading)
    return (
        <div className="w-auto mt-[245px] top-[10px] h-auto z-10 absolute flex justify-center items-center bg-[rgba(0,0,0,0.9)] suggest-box">
            
                <div className="bg-[rgba(0,0,0,0.9)] ml-[25px] px-[25px] py-[10px] h-auto rounded-[15px]">
                    <p className="text-white text-[25px] font-bold">{ suggestedMovies && "Suggested movies"}</p>
                    <div className="m-[15px] flex flex-wrap gap-[25px]">
                        {suggestedMovies?.map((ele) => ele?.results?.map((ele, index) => <MoviesCards key={index} movies={ele} />))}
                    </div>
                </div>
            
        </div>
    ) 
}
export default GPTSearchBody;