import React from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services & Pricing", path: "/service-and-pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 p-1">
      <div className="w-2/3 mx-auto bg-black/50 backdrop-blur-sm p-3 flex items-center justify-around rounded-full">
        <ul className="flex gap-8 text-[#F5F5F5] font-medium text-lg font-rajdhani">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link className="hover:text-[#C6A45C]" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex text-[#F5F5F5] font-medium text-sm font-orbitron items-center justify-center gap-4">
          <div>
            <p>Need a Barber? Call Us</p>
            <p>0400811122</p>
          </div>
        </div>

        <div className="relative hover:border-none rounded-md  hover:bg-[#C6A45C] px-3 py-2 clip-diagonal hover:scale-105 ">
          <button
            onClick={() => navigate("/service-and-pricing")}
            className="cursor-pointer text-[#F5F5F5] hover:text-black font-orbitron text-sm font-bold "
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
