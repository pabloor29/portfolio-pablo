"use client";

import React from "react";
import { Briefcase } from "lucide-react";

const positions = [
  {
    company: "SCHAEFFLER",
    location: "Toulouse",
    role: "Apprentice Embedded Systems Engineer, Project manager",
    period: "Sept. 2023 – Sept. 2026",
    details: [
      "Prototype implementation & embedded app development",
      "Decision algorithm development",
      "FMCW 77GHz radar technology (incl. 3 months in Germany)",
      "PFE — hands-free trunk access system (A-sample)",
    ],
    tags: ["C / C++", "MATLAB", "Arduino"],
  },
  {
    company: "Auto-Entrepreneur",
    location: "Toulouse",
    role: "Web Developer",
    period: "In progress since 2025",
    details: [
      "Website creation for restaurants, coaches…",
      "TypeScript / HTML / CSS / Database / UI",
    ],
    tags: ["TypeScript", "React", "Next.js"],
  },
];

function CurrentPositions() {
  return (
    <div className="w-screen flex justify-center py-12">
      <div className="w-4/5 flex md:flex-row flex-col gap-8">
        {positions.map((pos, i) => (
          <div
            key={i}
            className="flex-1 bg-whiteSmoked border border-black rounded-2xl p-6 flex flex-col gap-4 relative"
          >
            {/* Glow accent */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-greenLight opacity-40 blur-3xl rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-geo text-2xl">{pos.company}</h2>
                <p className="font-roboto text-sm text-gray-500">{pos.location}</p>
              </div>
              <div className="flex items-center gap-2 bg-white border border-black px-3 py-1 rounded-full shrink-0">
                <div className="w-2.5 h-2.5 bg-greenLight shadow shadow-greenLight/60 rounded-full" />
                <span className="font-geo text-sm">IN PROGRESS</span>
              </div>
            </div>

            {/* Role & period */}
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="font-roboto font-semibold text-sm">{pos.role}</span>
            </div>
            <p className="font-roboto text-xs text-gray-500 -mt-3">{pos.period}</p>

            {/* Details */}
            <ul className="font-roboto text-sm flex flex-col gap-1">
              {pos.details.map((d, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-greenLight mt-1">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {pos.tags.map((tag, k) => (
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
  );
}

export default CurrentPositions;
