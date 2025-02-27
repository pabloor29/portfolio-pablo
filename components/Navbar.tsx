"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog"


const links = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Projetcs",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Variants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "linear",
      duration: 1,
      delay: 0.5,
    },
  },
};

function Navbar() {
  return (
    <nav className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "30%" }}
        variants={Variants}
        className="fixed w-full h-16 backdrop-blur justify-between items-center text-black z-50 hidden lg:flex"
      >
        <div className="absolute h-full w-screen bg-greenLight/80 blur-xl -z-10"></div>
        <div className="flex justify-start w-1/5 ml-8">
          <a href="#" className="h-full">
            <h1 className="font-londrinaSketch text-3xl font-bold text-black">PABLO ORTEGA</h1>
          </a>
        </div>
        <div className="mr-8">
          <li className="flex justify-center space-x-12 font-geo text-black">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="leading-none text-3xl block transition-transform duration-200 hover:-translate-y-2"
              >
                {link.label}
              </a>
            ))}
          </li>
        </div>
      </motion.div>

      <div className="lg:hidden fixed top-6 z-50 flex justify-between w-full overflow-hidden">
        <Sheet key="left">
          <SheetTrigger className="overflow-hidden flex justify-center items-center w-10 h-10 rounded-full bg-whiteSmoked ml-6">
            <Menu color="#80ed99"/>
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader className="flex flex-row justify-between">
              <SheetDescription className="flex flex-col w-3/4">
                {links.map((items) => (
                  <a
                    key={items.label}
                    href={items.href}
                    className="overflow-hidden h-20 w-3/5 flex items-center duration-300 px-5 py-3 cursor-pointer"
                  >
                    <h3 className="text-3xl tracking-wide font-geo text-black">
                      {items.label}
                    </h3>
                  </a>
                ))}
              </SheetDescription>
              <SheetPrimitive.Close className="flex">
                <X color="#80ed99" className="h-10 w-10 mr-4"/>
                <span className="sr-only">Close</span>
              </SheetPrimitive.Close>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
