import { Instagram, Linkedin } from 'lucide-react';
import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <>
    <div className="w-screen flex justify-center">
        <div className="absolute w-screen md:h-[150px] h-[300px] bg-greenLight/80 blur-xl -z-10"></div>
        <div className="w-3/4 py-8 flex md:flex-row flex-col md:gap-0 gap-11 justify-center items-center">
            <div className="w-1/3 h-full flex items-center justify-center">
                <a className="font-londrinaSketch font-bold text-4xl text-center" href="">PABLO ORTEGA</a>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
                <a className="font-geo text-2xl hover:py-2 hover:font-bold" href="">Home</a>
                <a className="font-geo text-2xl hover:py-2 hover:font-bold" href="/projects">Projects</a>
                <a className="font-geo text-2xl hover:py-2 hover:font-bold" href="/contact">Contact</a>
            </div>
            <div className="w-1/3 flex justify-center gap-14">
                <Link
                    href="https://www.instagram.com/pablo.ortg/"
                    className=""
                >
                    <Instagram/>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/pablo-ortega-963723253/"
                    className=""
                >
                    <Linkedin/>
                </Link>
            </div>
        </div>
    </div>
    </>
  );
}

export default Footer