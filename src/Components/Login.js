import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);

    const handleForm = () => {
        setSignInForm(!isSignInForm)
    }
console.log(isSignInForm)
    return (
        <div className="w-full relative">
            <div className="w-[100%] h-[100%] ">
                <img className="w-[100%] h-[100vh] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/9a924b36-8e85-4f2a-baac-ce2872ee8163/web/IN-en-20250714-TRIFECTA-perspective_dfbf09de-9182-41e1-a9c6-cd7b1a6d84d6_small.jpg" alt="img" />

                <div className="w-[100%]">
                    <Header />
                </div>
                <div className="w-[100%] h-[100%] flex justify-center">
                    <form className="w-auto h-auto absolute top-[150px] flex flex-col bg-[rgba(0,0,0,0.7)] p-[45px] rounded-[3px]">
                        <p className="text-[30px] font-bold text-white">{isSignInForm ? "Sign In" : "Sign Up"}</p>
                        {!isSignInForm && <input type="text" placeholder="Full name" className="mt-[20px] py-[12px] px-[10px] w-[320px] bg-[rgba(24,23,23,0.8)] rounded-[3px]"/>}
                        <input type="text" placeholder="Email or mobile number" className="mt-[20px] py-[12px] px-[10px] w-[320px] bg-[rgba(24,23,23,0.8)] rounded-[3px]"/>
                        <input type="password" placeholder="Password" className="my-[20px] py-[12px] px-[10px] w-[320px] bg-[rgba(24,23,23,0.8)] rounded-[3px]"/>
                        <button className="my-[20px] py-[12px] px-[10px] w-[320px] bg-red-700 text-[18px] text-white font-bold rounded-[3px]">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                        <p className="text-gray-300">{isSignInForm ? "New To Netflix?" : "Already User?"}<a className="text-white font-bold hover:underline underline-offset-1 cursor-pointer" onClick={handleForm}>{isSignInForm ? "Sign up now." : "Sign In Now."}</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;