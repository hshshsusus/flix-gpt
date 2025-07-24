import React from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    
    const navigate = useNavigate();

    const user = useSelector(e => e.user)

    const handleSignOut = () => {

        signOut(auth).then(() => {
            navigate("/")
            
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] w-full h-[10vh] flex justify-between items-center">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className="w-[190px] ml-[150px]" />
            {user && <div className="flex mr-[50px]">
                <img src="https://tse2.mm.bing.net/th/id/OIP.7hKNUdexNcbCVBV7U830ewHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3" alt="icon" className="w-[45px] rounded-[5px] mr-[20px]" />
                <button onClick={handleSignOut} className="text-white bg-red-600 px-[15px] rounded-[5px]">Sign out</button>
            </div>}
        </div>
    )
}
export default Header;