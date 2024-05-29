import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import { Toaster } from "react-hot-toast";
import Home from "../pages/Home";
const FormCompo = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="container bg-white w-1/3 flex justify-center rounded-md min-h-28 p-9">

                    <div className=" fixed top-0 h-4">
                        <Toaster />
                    </div>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}
export default FormCompo;