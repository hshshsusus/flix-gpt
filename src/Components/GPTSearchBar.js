import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import openai from "../utils/openAi";
import { API_Options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addSuggestedMovies, takeInputValue } from "../utils/GptSlice";
import Loader from "../utils/loader";
// import UseSuggestedMovies from "../utils/useSuggestedMovies";

const GPTSearchBar = () => {

    const [loading, setSearch] = useState('');

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearch(e?.target?.value)
        // console.log(e.target.value)
    }

    const fetchSuggestedMovies = async (movie) => {

        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_Options);
        const json = await data.json();
        return json;
    }

    const apiResults = async () => {
        dispatch(takeInputValue(loading))
        if (!loading) return null;
        const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${loading}. only give me names of 5 movies, comma seperated. Like the example result given ahead. Example Result: Mirchi, Hanuman, Kanthara, Gabbersingh, Chhava`;

        const completion = await openai.chat.completions.create({
            model: 'google/gemini-2.0-flash-exp:free',
            messages: [
                {
                    role: 'user',
                    content: gptQuery,
                },
            ],
        });

        const suggestedMoviesDetails = completion?.choices?.[0]?.message?.content.split(",");
        const info = suggestedMoviesDetails?.map((movie) => fetchSuggestedMovies(movie));
        const promise = await Promise.all(info);
        // console.log("info", promise)
        dispatch(addSuggestedMovies(promise));
        dispatch(takeInputValue(''));
        setSearch('');
    }
    // useEffect(() => {
    //     dispatch(takeInputValue(loading))
    // }, [loading])


    return (
        <div className="absolute z-10 mt-[100px]">
            <form className="flex w-[600px] bg-black p-[20px] rounded-[5px] gap-[1px]" onSubmit={e => e.preventDefault()}>
                <input value={loading} onChange={handleSearch} type="text" placeholder="Take some movie suggestions. What do you want...!" className=" search w-[430px] py-[10px] px-[20px] rounded-l-[25px]" />
                <div className="flex justify-center items-center text-white px-[10px] bg-red-700 rounded-r-[25px] h-[52px] hover:bg-red-600 cursor-pointer">
                    <LuSearch className="text-[20px] font-bold" />
                    <button className="text-[20px] font-bold px-[5px]" onClick={apiResults}>Search</button>
                </div>
            </form>
        </div>
    )
}
export default GPTSearchBar;