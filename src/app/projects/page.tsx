"use client";

import React, { useState } from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from "next/image";
import { Link, Github, CodeXml, Cpu } from 'lucide-react';

const webProjects = [
  {
    image: "/img/projects/carbo.webp",
    title: "CARBO - website",
    description: "showcase website for restaurant",
    website: "https://carbo-website-v2.vercel.app/",
    repo: "https://github.com/pabloor29/carbo-website-v2",
    stack: "TypeScript / Tailwind.css",
  },
  {
    image: "/img/projects/hb.webp",
    title: "HB - website",
    description: "showcase website for artist",
    website: "https://hb-website-pearl.vercel.app/",
    repo: "https://github.com/pabloor29/hb-website",
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

const embeddedProjects = [
  {
    title: "Escape No Game",
    description: "Signal processing project",
    details: "Signal encoding/decoding system with PID controller, developed as part of a school escape-game challenge.",
    stack: "Python / PID / Encoding-Decoding",
    status: null,
  },
  {
    title: "ACQUARIUM",
    description: "Connected aquarium",
    details: "Automated aquarium monitoring system with sensors and actuators. Full project lifecycle: design, management, documentation and presentation.",
    stack: "Arduino / Sensors / Actuators",
    status: null,
  },
  {
    title: "Track Serrure",
    description: "Locked door detection system",
    details: "Embedded app development for detecting whether a door is locked. Includes mobile app, 3D printed enclosure design and embeddability constraints.",
    stack: "Embedded C / React Native / 3D Print",
    status: "IN PROGRESS",
  },
];

type Tab = "web" | "embedded";

function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("web");

  return (
    <>
    <Navbar />
    <div className="bg-dots min-h-screen w-screen flex flex-col py-28">

      {/* ── Tab selector ── */}
      <div className="w-full flex justify-center mb-16">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("web")}
            className={`font-geo text-2xl px-6 py-2 rounded-2xl border border-black transition-colors duration-200 ${
              activeTab === "web"
                ? "bg-greenLight shadow-lg shadow-greenLight/40"
                : "bg-whiteSmoked hover:bg-greenLight/20"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab("embedded")}
            className={`font-geo text-2xl px-6 py-2 rounded-2xl border border-black transition-colors duration-200 ${
              activeTab === "embedded"
                ? "bg-greenLight shadow-lg shadow-greenLight/40"
                : "bg-whiteSmoked hover:bg-greenLight/20"
            }`}
          >
            Electronics &amp; Embedded
          </button>
        </div>
      </div>

      {/* ── Web Development ── */}
      {activeTab === "web" && (
        <div className="flex flex-col gap-24">
          {webProjects.map((p, i) => (
            <div key={i} className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-center gap-8">
              <div className="w-full sm:w-3/4 lg:w-1/2 relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  layout="intrinsic"
                  width={800}
                  height={0}
                />
              </div>
              <div className="w-3/4 lg:w-1/4 flex flex-col gap-2 items-start justify-start">
                <div className="pb-10">
                  <h1 className="font-geo text-3xl">{p.title}</h1>
                  <h3 className="font-geo text-xl">{p.description}</h3>
                </div>
                <div className="flex gap-2">
                  <Link />
                  <a href={p.website} className="font-geo text-2xl hover:underline">Website</a>
                </div>
                <div className="flex gap-2">
                  <Github />
                  <a href={p.repo} className="font-geo text-2xl hover:underline">Repo GitHub</a>
                </div>
                <div className="flex gap-2">
                  <CodeXml />
                  <p className="font-geo text-2xl">{p.stack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Electronics & Embedded Systems ── */}
      {activeTab === "embedded" && (
        <div className="w-full flex justify-center">
          <div className="w-4/5 flex flex-col md:flex-row flex-wrap gap-8">
            {embeddedProjects.map((p, i) => (
              <div
                key={i}
                className="flex-1 min-w-[260px] bg-whiteSmoked border border-black rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
              >
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
                    <span
                      key={k}
                      className="font-geo text-sm bg-white border border-black px-3 py-0.5 rounded-2xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
    <Footer />
    </>
  );
}

export default Projects;
