import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='w-full h-fit py-10 md:py-4 px-8 bg-transparent flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between'>
            <div>
                © {currentYear} . Made with <span role="img" aria-label="Heart">💜</span> by Hajar Midany
            </div>
            <div className='w-1/3 flex items-center justify-center md:justify-end gap-6'>
                <a href="https://www.linkedin.com/in/hajar-midany/" className="">
                    <FaLinkedin className='w-5 h-5' />
                </a>
                <a href="https://github.com/HajarMIDANY" className="">
                    <IoLogoGithub className='w-5 h-5' />
                </a>
            </div>
        </div>
    );
};

export default Footer;
