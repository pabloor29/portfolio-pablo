"use client";

import Image from 'next/image';
import React from 'react'
import { PersonStanding, Building2, GraduationCap, Wrench, TentTree } from 'lucide-react';

function IntroPerson() {
  return (
    <>
    <div className="w-screen flex flex-col items-center justify-center py-12">
        <div className="w-4/5 flex md:flex-row flex-col justify-between gap-12">
            <div className="md:w-1/3 w-full h-[600px] relative">
                <Image key="img" src="/img/person/pablo.png" alt='Pablo' fill className="object-cover"/>
            </div>
            <div className="md:w-1/3 w-full flex flex-col gap-12">
                <div className="">
                    <div className="flex items-center pb-3 gap-3">
                        <PersonStanding />
                        <h1 className="font-geo text-4xl">Who am I ?</h1>
                    </div>
                    <p className="relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-greenLight before:shadow-lg before:blur font-roboto">
                        My name is Pablo Ortega.
                        <br />
                        I&apos;m currently in my fourth year of engineering school at CESI Toulouse, studying S3E (electricals and electronics embedded systems).
                        <br />
                        <br />
                        I&apos;m also aprentice at SCHAEFFLER, in the Advanced Development department. In this team I&apos;m used as software engineer.
                    </p>
                </div>
                <div className="">
                    <div className="flex items-center pb-3 gap-3">
                        <Building2 />
                        <h1 className="font-geo text-4xl">Experiencies</h1>
                    </div>
                    <div className="relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-greenLight before:shadow-lg before:blur font-roboto">
                        <div className="w-full pb-5">
                            <h2 className="font-bold font-roboto">Work-study program at SCHAEFFLER</h2>
                            <p className="ml-8 font-roboto text-sm">
                                Softwrae engineer
                                <br />
                                From September 18, 2023, for 3 years.
                                <br />
                                C / MATLAB / Arduino
                                <br />
                                Post-process signals / Analyze new technologies
                            </p>
                        </div>
                        <div className="w-full pb-5">
                            <h2 className="font-bold font-roboto">Internship at BAYER</h2>
                            <p className="ml-8 font-roboto text-sm">
                                Maintenance engineer
                                <br />
                                April 3, 2023 - July 28, 2023 (17 weeks)
                                <br />
                                Understand how an automated printing plant works and correct problems.
                                <br />
                                Grafcet / PLC / Mimic diagrams
                                <br />
                                Electrical diagram analysis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/3 w-full flex flex-col gap-12">
                <div className="">
                    <div className="flex items-center pb-3 gap-3">
                        <GraduationCap />
                        <h1 className="font-geo text-4xl">Diplomas</h1>
                    </div>
                    <div className="relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-greenLight before:shadow-lg before:blur font-roboto">
                        <div className="w-full pb-5">
                            <h2 className="font-bold font-roboto">CESI Toulouse</h2>
                            <p className="ml-8 font-roboto text-sm">
                                2 years of integrated preparatory cycle for engineering school.
                                <br />
                                S3E Specialization (electricals and electronics embedded systems).
                            </p>
                        </div>
                        <div className="w-full pb-5">
                            <h2 className="font-bold font-roboto">Jules Fil high school, Carcassonne</h2>
                            <p className="ml-8 font-roboto text-sm">
                                Scientific high school diploma.
                                <br />
                                Option mathematics, physics-chemistry, Life and Earth Sciences
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center pb-3 gap-3">
                        <Wrench />
                        <h1 className="font-geo text-4xl">Skills</h1>
                    </div>
                    <div className="relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-greenLight before:shadow-lg before:blur font-roboto flex justify-between">
                        <div className="w-1/2">
                            <ul>
                                <li>C / C++ / Arduino</li>
                                <li>MATLAB / Python</li>
                                <li>Web development</li>
                                <li>LTspice / Tinkercad</li>
                                <li>Office suite</li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul>
                                <li>Problem analysis</li>
                                <li>Teamwork</li>
                                <li>Good communication</li>
                                <li>LEnglish (B2 level)</li>
                                <li>Spanish (B2 level)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center pb-3 gap-3">
                        <TentTree />
                        <h1 className="font-geo text-4xl">Hobbies</h1>
                    </div>
                    <p className="relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-greenLight before:shadow-lg before:blur font-roboto">
                        Cooking
                        <br />
                        Sports : Golf, Rugby, Running
                        <br />
                        Travelling
                    </p>
                </div>
            </div>
        </div>
        <div className="w-4/5">

        </div>
    </div>
    </>
  );
}

export default IntroPerson