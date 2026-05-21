import React from "react";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {

    const navItems = [
        { name: "Home", path: '/' },
        { name: "About Us", path: '/about' },
        { name: "Services & Pricing", path: '/service-and-pricing' },
        { name: "Contact Us", path: '/contact' },
    ];

    return (
        <footer className="bg-[#121212] text-[#F5F5F5] py-10 px-6 ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 font-rajdhani text-lg">

                {/* Contact Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-[#C6A75E]">Contact Us</h2>
                    <p>Hobart, Tasmania</p>
                    <p>Phone: 0400811122</p>
                    <p>Email: sharpandmobile@gmail.com</p>
                    <p>Bookings Available</p>
                  
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-[#C6A75E]">Follow Us</h2>
                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://www.facebook.com/himalayascraftnepal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transform transition duration-300 hover:text-blue-500"
                        >
                            <SlSocialFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/himalayascraftnepal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transform transition duration-300 hover:text-pink-500"
                        >
                            <SlSocialInstagram />
                        </a>
                        <a
                            href="https://www.tiktok.com/@himalayascraftnepal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transform transition duration-300 hover:text-gray-400"
                        >
                            <PiTiktokLogoLight />
                        </a>
                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-3 text-[#C6A75E]">Other Links</h1>
                    <ul className="flex flex-col text-[#F5F5F5]  text-lg font-rajdhani">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="text-center text-sm text-[#F5F5F5] mt-8">
                © {new Date().getFullYear()} Khanal Barber Services. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
