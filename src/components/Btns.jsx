import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Btns = ({ btnActive }) => {
    const notify = () => {
        toast.success('Account Created.', { duration: 200, });
    };
    return (
        <>
            <div className="btns flex justify-around w-full">
                <Toaster />
                {btnActive && (
                    // <Link to={'/login'}>
                    <button onClick={notify} className={`${!btnActive ? 'bg-gray-200' : 'bg-purple-800'} rounded-full p-2 font-bold`}>SignUp </button>
                    // </Link>
                )}
                {!btnActive && (
                    <Link to={'/signup'}>
                        <button className={`${!btnActive ? 'bg-gray-200' : 'bg-purple-800'} rounded-full p-2 font-bold`}>Create account </button>
                    </Link>
                )}
                <Link to={'/login'}><button onClick={notify} className={`${btnActive ? 'bg-gray-200' : 'bg-purple-800'} rounded-full p-2 font-bold`}>Login </button></Link>
            </div>
        </>
    )
}

export default Btns 