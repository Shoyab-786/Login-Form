import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { RiMapPinUserFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from 'react-hot-toast';

const Fields = ({ activeBtn, heading }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [robot, setRobot] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const validateUserName = (e) => {
        const user = e.target.value.toLowerCase();
        const isValid = /^[a-z0-9]+$/.test(user);
        isValid || user === '' ? setUserName(user) : toast.error('only alphabets & numbers');

    }
    const handleEmail = (e) => {
        let mail = e.target.value.toLowerCase();
        if (mail.includes(' ')) {
            toast.error('No space in email')
        }
        if (mail.includes('@' && '.')) {
            setEmail(mail);
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate()
    const notify = (e) => {
        e.preventDefault();
        const errors = [];
        if (!name) errors.push('name');
        if (!userName) errors.push('username');
        if (!email) errors.push('email');
        if (password.length < 8) errors.push('password');
        if (!robot) errors.push('not human');

        if (errors.length === 0) {
            toast.success('Account Created.');
            navigate('/login');
        } else {
            toast.error(`Invalid: ${errors.join(', ')}`);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const errors = [];
        if (!email) errors.push('email');
        if (password.length < 8) errors.push('password');
        if (errors.length === 0) {
            toast.success('Login successfully.');
            navigate('/home');
        } else {
            toast.error(`Invalid: ${errors.join(', ')}`);
        }
    }

    return (
        <>
            <form className="w-full ">
                <h1 className='text-3xl text-center font-bold text-blue-950 underline'>{heading}</h1>
                <div className="fields my-10 w-full flex flex-col gap-5">
                    {activeBtn && (<div className="flex items-center gap-5 bg-gray-200 p-3 w-full rounded-md">
                        <IoPerson size={30} />
                        <input type="text" onChange={handleName} placeholder='Name*' className='outline-none w-full p-2 bg-gray-200' value={name} maxLength={30} />

                    </div>)}
                    {activeBtn && (
                        <div className="flex items-center gap-5 bg-gray-200 p-3 w-full rounded-md">
                            <RiMapPinUserFill size={30} />
                            <input type="text" minLength={3} value={userName} onChange={validateUserName} placeholder='Username*' className='outline-none w-full p-2  bg-gray-200' />
                        </div>)}
                    <div className="flex items-center gap-5 bg-gray-200 p-3 w-full rounded-md">
                        <MdEmail size={30} />
                        <input type="text" onChange={handleEmail} placeholder='Email id*' className='outline-none w-full p-2  bg-gray-200' />
                    </div>
                    <div className="flex items-center gap-5 bg-gray-200 p-3 w-full rounded-md">
                        <FaLock size={25} />
                        <input type={`${showPassword ? 'text' : 'password'}`} onChange={handlePassword} placeholder='Password*' className='outline-none w-full p-2  bg-gray-200' />
                        {
                            password.length !== 0
                            && (!showPassword
                                ? (<IoMdEye size={25} className=' cursor-pointer' onClick={() => { setShowPassword(!showPassword) }} />)
                                : (<IoMdEyeOff size={25} className=' cursor-pointer' onClick={() => { setShowPassword(!showPassword) }} />))
                        }
                    </div>
                    {!activeBtn &&
                        (<div className="para font-bold">Lost password?
                            <Link to={'/signup'}><span className='text-blue-950 ml-2 cursor-pointer'>click here!</span></Link>
                        </div>)}
                    {activeBtn && (
                        <div className="flex items-center gap-5 bg-gray-200 p-3 w-full rounded-md">
                            <input type="checkbox" onChange={() => { setRobot(!robot) }} name="human" id="" /> <label htmlFor="human">I'm not a robot</label>
                        </div>
                    )}
                </div>
                <div className="btns flex justify-around w-full">
                    {activeBtn ? (
                        <button onClick={notify} className={`${!activeBtn ? 'bg-gray-200' : 'bg-purple-800 text-white'} rounded-full p-2 font-bold`}>SignUp </button>
                    ) : <Link to={'/signup'}>
                        <button className={`${!activeBtn ? 'bg-gray-200' : 'bg-purple-800 text-white'} rounded-full p-2 font-bold`}>Create account </button>
                    </Link>}
                    {!activeBtn ?
                        (<button onClick={handleLogin} className={`${activeBtn ? 'bg-gray-200' : 'bg-purple-800 text-white'} rounded-full p-2 font-bold`}>Login </button>)
                        : <Link to={'/login'}><button className={`${activeBtn ? 'bg-gray-200' : 'bg-purple-800 text-white'} rounded-full p-2 font-bold`}>Login </button></Link>}
                </div>
            </form>
        </>
    )
}

export default Fields