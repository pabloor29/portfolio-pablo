"use client";

import Image from 'next/image';
import React from 'react'
import { PersonStanding, Building2, GraduationCap, Wrench, TentTree } from 'lucide-react';

function IntroPerson() {
  return (
    <>
    <div className="w-screen flex flex-col items-center justify-center py-12 gap-10">
        <div className="w-4/5 h-[600px] relative">
            <Image key="img" src="/img/person/pablo-001.webp" alt='Pablo' fill className="object-cover"/>
        </div>
        <div className="w-4/5 flex md:flex-row flex-col justify-between gap-12">
            <div className="w-full flex flex-col gap-12">
                <div className="">
                    <div className="flex items-center pb-3 gap-3">
                        <PersonStanding />
                        <h1 className="font-geo text-4xl">Who am I ?</h1>
                    </div>
                    <p className="relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-greenLight before:shadow-lg before:blur font-roboto">
                        My name is Pablo Ortega.
                        <br />
                        I&apos;m currently in my final year of engineering school at CESI Toulouse, specialising in S3E (electrical and electronic embedded systems), focused on communicating electronic systems.
                        <br />
                        <br />
                        I&apos;m apprentice engineer at SCHAEFFLER Toulouse and self-employed as a web developer &amp; maths tutor. Looking for a permanent position as an embedded software engineer starting November 2026.
                    </p>
                </div>
                <div className="">
                    <div className="flex items-center pb-3 gap-3">
                        <Building2 />
                        <h1 className="font-geo text-4xl">Experience</h1>
                    </div>
                    <div className="relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-greenLight before:shadow-lg before:blur font-roboto">
                        <div className="w-full pb-5">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="font-bold font-roboto">Apprentice Embedded Systems Engineer — SCHAEFFLER</h2>
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-greenLight text-black">IN PROGRESS</span>
                            </div>
                            <p className="ml-8 font-roboto text-sm mt-1">
                                Sept. 2023 – Sept. 2026 · Toulouse
                                <br />
                                Prototype implementation, decision algorithm &amp; embedded app development, technology analysis.
                                <br />
                                3-month period in Germany (summer 2025) — FMCW 77GHz radar technology transfer.
                                <br />
                                <span className="italic">Final-year project (PFE) as project lead: evaluating FMCW 77GHz radar for hands-free trunk access + A-sample development.</span>
                            </p>
                        </div>
                        <div className="w-full pb-5">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="font-bold font-roboto">Self-employed — Auto-Entrepreneur</h2>
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-greenLight text-black">IN PROGRESS</span>
                            </div>
                            <p className="ml-8 font-roboto text-sm mt-1">
                                <span className="font-semibold">Web Developer</span> — Website creation (restaurant, sports coach…). TypeScript / HTML / CSS / Database / UI.
                                <br />
                                <span className="font-semibold">Maths Tutor</span> — Private lessons for middle school students (Brevet preparation).
                            </p>
                        </div>
                        <div className="w-full pb-5">
                            <h2 className="font-bold font-roboto">Maintenance Engineering Intern — BAYER, Trèbes</h2>
                            <p className="ml-8 font-roboto text-sm mt-1">
                                April 3 – July 28, 2023 (17 weeks)
                                <br />
                                Understanding and troubleshooting an automated printing plant. Awarded a &quot;Certificate of Appreciation&quot; for restoring a production line.
                                <br />
                                Grafcet / PLC / SIEMENS TIA Portal / Electrical diagrams
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-12">
                <div className="">
                    <div className="flex items-center pb-3 gap-3">
                        <GraduationCap />
                        <h1 className="font-geo text-4xl">Education</h1>
                    </div>
                    <div className="relative pb-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-greenLight before:shadow-lg before:blur font-roboto">
                        <div className="w-full pb-5">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="font-bold font-roboto">CESI Toulouse — Engineering Degree</h2>
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-greenLight text-black">IN PROGRESS</span>
                            </div>
                            <p className="ml-8 font-roboto text-sm mt-1">
                                Expected graduation: September 2026
                                <br />
                                Integrated preparatory cycle · S3E specialisation (Electrical &amp; Electronic Embedded Systems)
                            </p>
                        </div>
                        <div className="w-full pb-5">
                            <h2 className="font-bold font-roboto">Lycée Jules Fil, Carcassonne</h2>
                            <p className="ml-8 font-roboto text-sm mt-1">
                                Scientific Baccalauréat
                                <br />
                                Mathematics, Physics-Chemistry, Life &amp; Earth Sciences
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
                                <li>SIEMENS TIA Portal</li>
                                <li>React / React Native</li>
                                <li>LTspice / Tinkercad</li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul>
                                <li>Problem analysis</li>
                                <li>Teamwork</li>
                                <li>Good communication</li>
                                <li>English (B2)</li>
                                <li>Spanish (B2)</li>
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
                        Sports: Trail, Rugby, Golf
                        <br />
                        Travelling
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default IntroPerson