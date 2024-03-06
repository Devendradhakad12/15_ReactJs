"use client"
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { GoMoveToTop } from "react-icons/go";

const ButtonScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button className={clsx('fixed bottom-10 right-10 btn z-50 bg-blue-900 rounded-full hover:bg-yellow-900 xl:text-[30px] md:text-[25px] sm:text-[20px] text-[18px] text-white', isVisible ? "flex" : "hidden")} onClick={handleScrollTop}>
            <GoMoveToTop />
        </button>
    )
}

export default ButtonScrollTop
