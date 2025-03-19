import { NavLink } from 'react-router-dom';
import { ImHome3 } from "react-icons/im";
import { LuHistory } from "react-icons/lu";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { VscSignOut } from "react-icons/vsc";
import useWordHook from '../Hook/useWordHook';

const SideBar = () => {
    const { user, GoogleSignin, logOut } = useWordHook()


    const provider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        GoogleSignin(provider)
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    };
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err.message))
    }

    return (
        <div className='flex flex-col justify-evenly items-center bg-[#11269023] w-[60px] border border-gray-500 p-1 rounded-full '>
            <NavLink to={'/'}><ImHome3 className='text-2xl' /></NavLink>
            <NavLink to={'/history'}><LuHistory className='text-2xl' /></NavLink>
            <NavLink to={'/playlist'}><MdOutlineBookmarkAdd className='text-2xl' /></NavLink>
            <NavLink onClick={() => document.getElementById('my_modal_3').showModal()}><CgProfile className='text-2xl' /></NavLink>

            {/* modal part */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box p-0">
                    <form method="dialog" className=''>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50">✕</button>
                    </form>
                    <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-white text-center w-full">
                        {
                            user ? <h1 className="text-2xl font-bold mb-6">Want to Sign out?</h1>
                                : <h1 className="text-2xl font-bold mb-6">Welcome Back!</h1>
                        }
                        {
                            user ? <p className="text-gray-300 mb-6">Sign out using sign out button</p> : <p className="text-gray-300 mb-6">Sign in using your Google account</p>
                        }

                        {
                            user ?
                                <button
                                    onClick={handleSignOut}
                                    className="flex items-center justify-center gap-3 bg-white text-black py-3 px-5 rounded-full shadow-md hover:bg-gray-200 transition-all w-full"
                                >
                                    <VscSignOut className="text-xl" /> Sign out
                                </button> :
                                <button
                                    onClick={handleGoogleLogin}
                                    className="flex items-center justify-center gap-3 bg-white text-black py-3 px-5 rounded-full shadow-md hover:bg-gray-200 transition-all w-full"
                                >
                                    <FcGoogle className="text-xl" /> Sign in with Google
                                </button>
                        }
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default SideBar;