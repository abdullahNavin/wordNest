import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImHome3 } from "react-icons/im";
import { LuHistory } from "react-icons/lu";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
    return (
        <div className='flex flex-col justify-evenly items-center bg-[#11269023] w-[60px] border border-gray-500 p-1 rounded-full '>
            <NavLink to={'/'}><ImHome3 className='text-2xl'/></NavLink>
            <NavLink to={'/history'}><LuHistory className='text-2xl'/></NavLink>
            <NavLink to={'/playlist'}><MdOutlineBookmarkAdd className='text-2xl'/></NavLink>
            <NavLink to={'/profile'}><CgProfile className='text-2xl'/></NavLink>
        </div>
    );
};

export default SideBar;