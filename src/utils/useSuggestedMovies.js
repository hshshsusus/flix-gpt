import react, { useEffect } from "react";
import { API_Options } from "./Constants";

const UseSuggestedMovies = (movies) => {
    
    const fetchSuggestedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=Pokiri&include_adult=false&language=en-US&page=1",API_Options);
        const json = await data.json();
        // console.log("suggested", json)
    }

    useEffect(() => {
        fetchSuggestedMovies();
    },[])
    
    return

}
export default UseSuggestedMovies;