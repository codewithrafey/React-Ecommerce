import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { BsCart3 } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const location = useLocation();
  const { totalCartItems } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false)
  
  // Path ka naam nikal ke active menu set kar rahe hain
  const currentPath = location.pathname;

  return (
    <div className='navbar sticky top-0 z-50 flex justify-between w-full items-center py-2 px-10 bg-white md:px-28'>
      <Link to={'/'}>
        <div className="navbar-logo flex items-center gap-2 cursor-pointer">
          <img src={logo} width={70} alt="" />
          <p className='text-xl font-bold uppercase [letter-spacing:5px]'>Zebi</p>
        </div>
      </Link>

      <ul className={`nav-menu flex gap-6 cursor-pointer  sm:text-sm ${!menuOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-white max-sm:z-50 max-sm:text-black max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
        <IoCloseSharp onClick={() => {setMenuOpen(false)}} className='w-5 absolute top-4 text-2xl right-4 sm:hidden' />
        <li className=''>
          <Link onClick={() => {setMenuOpen(false)}} to={'/'}>SHOP</Link>
          {currentPath === '/' && <hr className='border-0 h-[3px] w-full sm:bg-red-500 rounded' />}
        </li>
        <li>
          <Link onClick={() => {setMenuOpen(false)}} to={'/men'}>MEN</Link>
          {currentPath === '/men' && <hr className='border-0 h-[3px] w-full sm:bg-red-500 rounded' />}
        </li>
        <li>
          <Link onClick={() => {setMenuOpen(false)}} to={'/women'}>WOMEN</Link>
          {currentPath === '/women' && <hr className='border-0 h-[3px] w-full sm:bg-red-500 rounded' />}
        </li>
        <li>
          <Link onClick={() => {setMenuOpen(false)}} to={'/kids'}>KIDS</Link>
          {currentPath === '/kids' && <hr className='border-0 h-[3px] w-full sm:bg-red-500 rounded' />}
        </li>
      </ul>

      <div className="nav-logon-cart flex items-center gap-5">
        <Link to={'/login'}>
          <button className='border text-gray-500 border-gray-400 rounded-4xl py-3 px-8 active:bg-gray-50 cursor-pointer hidden sm:block'>LOGIN</button>
        </Link>
        <Link to={'/cart'}>
          <div className="relative">
            <BsCart3 className='text-2xl'/>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalCartItems()}
            </div>
          </div>
        </Link>
        <RxHamburgerMenu onClick={() => {setMenuOpen(true)}} className="w-8 sm:hidden" />
      </div>
    </div>
  );
}

export default Navbar;
