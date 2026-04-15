"use client";

import React, { useState } from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from "next/image";
import { Link, Github, CodeXml, Cpu, Globe, GraduationCap, Briefcase } from 'lucide-react'; // eslint-disable-line @typescript-eslint/no-deprecated

const webProjects = [
  {
    image: "/img/projects/latelier-de-lecharpe.webp",
    title: "L'atelier de l'Écharpe - website",
    description: "showcase website for restaurant",
    website: "https://www.latelierdelecharpe.fr/",
    repo: "https://github.com/pabloor29/latelier-de-lecharpe",
    stack: "TypeScript / Tailwind.css",
  },
  {
    image: "/img/projects/absolute-motion.webp",
    title: "Absolute motion - website",
    description: "showcase website for sports coach",
    website: "https://www.absolutemotion.fr/",
    repo: "https://github.com/pabloor29/absolute-motion",
    stack: "TypeScript / Tailwind.css",
  },
  {
    image: "/img/projects/carbo.webp",
    title: "CARBO - website",
    description: "showcase website for restaurant",
    website: "https://carbo-website-v2.vercel.app/",
    repo: "https://github.com/pabloor29/carbo-website-v2",
    stack: "TypeScript / Tailwind.css",
  },
  {
    image: "/img/projects/floridablanca.webp",
    title: "FLORIDABLANCA - website",
    description: "showcase website for restaurant",
    website: "https://www.floridablanca.fr/",
    repo: "https://github.com/pabloor29/floridablanca-website",
    stack: "TypeScript / Tailwind.css",
  },
];

const schoolProjects = [
  {
    title: "Track Serrure",
    description: "Locked door detection system",
    details: "Embedded app development for detecting whether a door is locked. Includes mobile app, 3D printed enclosure design and embeddability constraints.",
    stack: "Embedded C / React Native / 3D Print",
    status: "IN PROGRESS",
  },
  {
    title: "ACQUARIUM",
    description: "Connected aquarium",
    details: "Automated aquarium monitoring system with sensors and actuators. Full project lifecycle: design, management, documentation and presentation.",
    stack: "Arduino / Sensors / Actuators",
    status: null,
  },
];

const proProjects = [
  {
    title: "FMCW 77GHz radar analyze",
    description: "Evaluation of a FMCW 77GHz radar for automotive applications",
    details: "As project manager, I led the evaluation of a FMCW 77GHz radar for automotive applications. This involved design, prototyping and testing of a demonstrator, as well as documentation and presentation of the results.",
    stack: "C / HMI / MATLAB / Python / FMCW Radar / Project Management / Documentation / Presentation",
    status: "IN PROGRESS",
  },
  {
    title: "Flush car door handle demonstrator",
    description: "Demonstrator for flush door handle UWB sensor",
    details: "Demonstrator for a flush door handle UWB sensor. Involved in design, prototyping and testing of the demonstrator, as well as documentation and presentation.",
    stack: "Arduino / HMI / MATLAB",
    status: null,
  },
  {
    title: "Flush car door handle demonstrator",
    description: "Demonstrator for flush door handle UWB sensor",
    details: "Lorem500 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem500 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: "Arduino / HMI / MATLAB",
    status: null,
  },
];

type Tab = "web" | "school" | "pro";

const tabs: { id: Tab; label: string; description: string; icon: React.ReactNode }[] = [
  { id: "web",    label: "Web Development",      description: "Websites and web apps built as a freelance developer — for restaurants, coaches and more.", icon: <Globe size={20} /> },
  { id: "school", label: "School Projects",      description: "Embedded systems and electronics projects carried out during my engineering studies at CESI Toulouse.", icon: <GraduationCap size={20} /> },
  { id: "pro",    label: "Professional Projects", description: "Projects developed during my apprenticeship at SCHAEFFLER — from sensor prototyping to my final-year engineering project.", icon: <Briefcase size={20} /> },
];

function EmbeddedCard({ p }: { p: typeof schoolProjects[0] }) {
  return (
    <div className="bg-whiteSmoked border border-black rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-greenLight opacity-30 blur-3xl rounded-full pointer-events-none" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-geo text-2xl">{p.title}</h2>
          <p className="font-roboto text-sm text-gray-500">{p.description}</p>
        </div>
        {p.status && (
          <div className="flex items-center gap-2 bg-white border border-black px-3 py-1 rounded-full shrink-0">
            <div className="w-2.5 h-2.5 bg-greenLight shadow shadow-greenLight/60 rounded-full" />
            <span className="font-geo text-sm">{p.status}</span>
          </div>
        )}
      </div>
      <div className="flex items-start gap-2">
        <Cpu size={16} className="mt-0.5 shrink-0" />
        <p className="font-roboto text-sm">{p.details}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {p.stack.split(" / ").map((tag, k) => (
          <span key={k} className="font-geo text-sm bg-white border border-black px-3 py-0.5 rounded-2xl">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("web");

  return (
    <>
    <Navbar />
    <div className="bg-dots min-h-screen w-screen flex flex-col pt-24">

      {/* ── Bottom tab bar ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2 bg-white/80 backdrop-blur border border-black rounded-2xl px-4 py-2 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center px-4 py-2 rounded-xl border border-black transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-greenLight shadow shadow-greenLight/40"
                : "bg-white hover:bg-greenLight/20"
            }`}
          >
            {tab.icon}
          </button>
        ))}
      </div>

      {/* ── Main content ── */}
      <main className="flex flex-col py-12 px-8 gap-24 pb-32">
        {/* Category header */}
        {(() => { const t = tabs.find(t => t.id === activeTab)!; return (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              {t.icon}
              <h1 className="font-geo text-4xl">{t.label}</h1>
            </div>
            <p className="font-roboto text-gray-500 max-w-2xl">{t.description}</p>
            <div className="h-1 w-full bg-greenLight blur mt-1 shadow-lg" />
          </div>
        ); })()}

        {/* Web Development */}
        {activeTab === "web" && webProjects.map((p, i) => (
          <div key={i} className="w-full flex flex-col items-center md:flex-row gap-8">
            <div className="w-full lg:w-1/2 md:w-2/3 relative">
              <Image
                src={p.image}
                alt={p.title}
                layout="intrinsic"
                width={800}
                height={0}
              />
            </div>
            <div className="w-3/4 lg:w-auto flex flex-col gap-2 items-start justify-start">
              <div className="pb-6">
                <h1 className="font-geo lg:text-3xl md:text-2xl text-xl">{p.title}</h1>
                <h3 className="font-geo md:text-xl text-md">{p.description}</h3>
              </div>
              <div className="flex gap-2 items-center">
                <Link size={20} />
                <a href={p.website} className="font-geo text-2xl hover:underline">Website</a>
              </div>
              <div className="flex gap-2 items-center">
                <Github size={20} />
                <a href={p.repo} className="font-geo text-2xl hover:underline">Repo GitHub</a>
              </div>
              <div className="flex gap-2 items-center">
                <CodeXml size={20} />
                <p className="font-geo text-2xl">{p.stack}</p>
              </div>
            </div>
          </div>
        ))}

        {/* School Projects */}
        {activeTab === "school" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {schoolProjects.map((p, i) => <EmbeddedCard key={i} p={p} />)}
          </div>
        )}

        {/* Professional Projects */}
        {activeTab === "pro" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {proProjects.map((p, i) => <EmbeddedCard key={i} p={p} />)}
          </div>
        )}

      </main>
    </div>
    <Footer />
    </>
  );
}

export default Projects;
