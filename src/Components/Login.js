import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValidEmailPass } from "../utils/Validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_IMG } from "../utils/Constants";

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);
    const [errmsg, setErrmsg] = useState(null);
    const [User, setUser] = useState();

    const dispatch = useDispatch();

    
    
    // console.log("navi", navigate)

    // console.log("auth",auth)

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);


    const handleForm = () => {
        setSignInForm(!isSignInForm)
    }

    const doingValidation = () => {

        const emailVal = email.current?.value || "";
        const passVal = password.current?.value || "";
        const nameVal = fullName.current?.value || ""; // will be empty string in Sign In

        const errMsg = isValidEmailPass(emailVal, passVal);
        setErrmsg(errMsg)
        if (errMsg) return;

        if (!isSignInForm) {
            //sing up logic

            createUserWithEmailAndPassword(auth, emailVal, passVal)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    setUser(user)

                    updateProfile(user, {
                        displayName: nameVal, photoURL: "https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"
                    }).then(() => {
                        const {email, photoURL, displayName} = auth.currentUser;
                        dispatch(addUser({email:email, photoURL: photoURL, displayName: displayName}))
                        
                    }).catch((error) => {
                        // An error occurred
                        setErrmsg(error.message)
                    });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    
                });
        }
        else {
            //sign in logic
            signInWithEmailAndPassword(auth, emailVal, passVal)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: nameVal, photoURL: "https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"
                    }).then(() => {
                        const {email, photoURL, displayName} = auth.currentUser;
                        dispatch(addUser({email:email, photoURL: photoURL, displayName: displayName}))
                        
                    }).catch((error) => {
                        // An error occurred
                        setErrmsg(error.message)
                    });

                    setUser(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrmsg(errorCode + "-" + errorMessage)
                });
        }
        setErrmsg(errMsg)
    }


    // console.log(isSignInForm)
    return (
        <div className="w-full relative">
            <div className="w-[100%] h-[100%] ">
                <img className="w-[100%] h-[100vh] object-cover" src={BG_IMG} alt="img" />

                <div className="w-[100%]">
                    <Header data={User} />
                </div>
                <div className="w-[100%] h-[100%] flex justify-center">
                    <form className="w-[410px] h-auto absolute top-[150px] flex flex-col bg-[rgba(0,0,0,0.9)] p-[40px] rounded-[3px] z-10" onSubmit={(e) => e.preventDefault()}>
                        <p className="text-[30px] font-bold text-white">{isSignInForm ? "Sign In" : "Sign Up"}</p>
                        {!isSignInForm && <input ref={fullName} type="text" placeholder="Full name" className="mt-[20px] py-[12px] px-[10px] w-[320px] bg-[rgba(24,23,23,0.8)] rounded-[3px]" />}
                        <input ref={email} type="text" placeholder="Email or mobile number" className="email mt-[20px] py-[12px] px-[10px] w-[320px] bg-[rgba(24,23,23,0.8)] rounded-[3px]" />
                        <input ref={password} type="password" placeholder="Password" className="my-[20px] py-[12px] px-[10px] w-[320px] bg-[rgba(24,23,23,0.8)] rounded-[3px]" />
                        <p className="text-red-600 overflow-x-hidden">{errmsg}</p>
                        <button className="my-[20px] py-[12px] px-[10px] w-[320px] bg-red-700 text-[18px] text-white font-bold rounded-[3px]" onClick={doingValidation}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                        <p className="text-gray-300">{isSignInForm ? "New To Netflix?" : "Already User?"}<a className="text-white font-bold hover:underline underline-offset-1 cursor-pointer" onClick={handleForm}>{isSignInForm ? "Sign up now." : "Sign In Now."}</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;