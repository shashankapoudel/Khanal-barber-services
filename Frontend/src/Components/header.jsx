

// import React from 'react'
// import { BsTelephoneOutbound } from "react-icons/bs";

// const Header = () => {

//     const navItems = [
//         { name: "Home", path: '/' },
//         { name: "About Us", path: '/about' },
//         { name: "Services & Pricing", path: '/service-and-pricing' },
//         { name: "Contact Us", path: '/contact' },

//     ]

//     return (
//         <div className='p-6 flex items-center justify-around border-b border-gray-500'>

//             <div>
//                 <ul className='flex gap-8 text-[#FFFFFF] font-semibold text-lg font-serif'>
//                     {navItems.map((item) => (
//                         <li key={item.name}>
//                             <a href={item.path}>{item.name}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="flex text-white font-semibold text-medium font-serif items-center justify-center gap-4">

//                 <div className='mt-1'>
//                     <BsTelephoneOutbound className="text-3xl" />
//                 </div>

//                 <div>
//                     <p>Need a Barber? Call Us</p>
//                     <p>9818435269</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Header;

import React from 'react'
import { BsTelephoneOutbound } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/'; // Detect homepage

    const navItems = [
        { name: "Home", path: '/' },
        { name: "About Us", path: '/about' },
        { name: "Services & Pricing", path: '/service-and-pricing' },
        { name: "Contact Us", path: '/contact' },
    ];

    return (
        <header
            className={`${isHome
                ? 'absolute top-0 left-0 bg-black/30 backdrop-blur-sm'
                : 'relative bg-[#111111]'
                } w-full z-10 p-6 flex items-center justify-around border-b border-gray-600`}
        >

            <ul className="flex gap-8 text-white font-semibold text-lg font-rajdhani">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>


            <div className="flex text-white font-semibold text-medium font-orbitron items-center justify-center gap-4">
                {/* <div className="mt-1">
                    <BsTelephoneOutbound className="text-3xl" />
                </div> */}
                <div>
                    <p>Need a Barber? Call Us</p>
                    <p>9818435269</p>
                </div>
            </div>

            <div className='relative bg-[#AE7E50] px-5 py-3 clip-diagonal hover:scale-105'>
                <button className='cursor-pointer text-[#ffffff] ' >Book now</button>
            </div>

        </header>
    );
};

export default Header;
