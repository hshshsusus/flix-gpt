import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchBody from "./GPTSearchBody";
import {BG_IMG} from "../utils/Constants"

const GPTSearch = () => {
    return (
        <div className="mt-[110px] flex flex-col justify-center items-center w-full h-full]">
            <img src={BG_IMG} alt="bg-img" className="fixed w-full h-full mt-[510px]"/>
            <GPTSearchBar />
            <GPTSearchBody />
        </div>
    )
}
export default GPTSearch;