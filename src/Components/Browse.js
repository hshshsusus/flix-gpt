import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayMovies from "../utils/useNowPlayMovies";
import SeconderyContainer from "./SeconderyContainer";
import usePopularMovies from "../utils/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    useNowPlayMovies();
    usePopularMovies();

    const selector = useSelector(store => store.Gpt.GptSearchValue);

    return (
        <div className="w-auto h-full">
            <Header />
            {selector ? (<GPTSearch /> )
            
            :
            ( <><MainContainer />
                <div className="w-auto bg-[#181818]">
                    <SeconderyContainer />
                </div></>
            )}
        </div>
    )
}
export default Browse;