import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { changeGptSearchValue } from "../utils/GptSlice";

const Header = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector =useSelector(store => store.Gpt.GptSearchValue);

    //solving bug 
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            // console.log("auth", auth)
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid:uid, emailId:email, displayName:displayName, photoURL:photoURL}))
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    const isReqiredLocation = location.pathname === "/browse";

    const user = useSelector(e => e.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {}).catch((error) => {
            // An error happened.
        });
    }

    const handleGptSearch = () => {
        dispatch(changeGptSearchValue());
    }

    // if(!user) return;

    return (
        <div className={`top-0 left-0 bg-[rgba(0,0,0,0.2)] w-full h-[110vh] flex justify-between items-center absolute z-10`}>
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className="absolute top-[10px] left-[100px] w-[190px]" />
            {user && <div className="flex gap-[20px] absolute right-[25px] w-[200px] h-[80px] top-[20px]">
                <button className="text-white ml-[-100px] bg-green-700 flex justify-center items-center h-[48px] mt-[12px] py-[10px] px-[5px] rounded-[4px] w-[150px] hover:bg-green-600" 
                onClick={handleGptSearch}
                >{ selector ? "Go to Home" : "GPTSearch"}</button>
                <div >
                    <img src={user.photoURL} alt="icon" className="w-[50px] h-[50px] rounded-[5px] mt-[7px]" />
                    {user.displayName ? <p className="text-white ml-[-10px]">{user.displayName}</p> : ""}
                </div>
                <button onClick={handleSignOut} className="text-white hover:bg-red-500 bg-red-600 px-[15px] rounded-[5px] w-[100px] h-[45px] mt-[13px]">Sign out</button>
            </div>}
        </div>
    )
}
export default Header;