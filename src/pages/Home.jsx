import React from 'react';
import { FcHome } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-6 relative w-full">
                <h1 className='text-3xl text-center font-bold text-blue-950 underline'>Home</h1>
                <FcHome size={200} />
                <Link to={'/login'}>
                    <button className='absolute bottom-0 right-0 bg-gray-200 hover:bg-purple-800 rounded-full p-2 font-bold'>Logout</button>
                </Link>
            </div >
        </>
    )
}

export default Home