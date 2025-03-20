import React from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from "next/image";
import { Link , Github , CodeXml} from 'lucide-react';

function ReactProjects() {
  return (
    <>
    <Navbar />
    <div className="bg-dots min-h-screen w-screen flex flex-col gap-24 justify-center py-28">
      <div className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-center gap-8"> {/*CARBO*/}
        <div className="w-full sm:w-3/4 lg:w-1/2 relative">
          <Image
            src="/img/projects/carbo.webp"
            alt="carbo"
            layout="intrinsic"
            width={800}
            height={0}
          />
        </div>
        <div className="w-3/4 lg:w-1/4 flex flex-col gap-2 items-start justify-start">
          <div className="pb-10">
            <h1 className="font-geo text-3xl">CARBO - website</h1>
            <h3 className="font-geo text-xl">showcase website for restaurant</h3>
          </div>
          <div className="flex gap-2">
            <Link />
            <a href="https://carbo-website-v2.vercel.app/" className="font-geo text-2xl hover:underline">Website</a>
          </div>
          <div className="flex gap-2">
            <Github />
            <a href="https://github.com/pabloor29/carbo-website-v2" className="font-geo text-2xl hover:underline">Repo GitHub</a>
          </div>
          <div className="flex gap-2">
            <CodeXml />
            <p className="font-geo text-2xl">TypeScript / Tailwind.css</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-center gap-8"> {/*HB website*/}
        <div className="w-full sm:w-3/4 lg:w-1/2 relative">
          <Image
            src="/img/projects/hb.webp"
            alt="carbo"
            layout="intrinsic"
            width={800}
            height={0}
          />
        </div>
        <div className="w-3/4 lg:w-1/4 flex flex-col gap-2 items-start justify-start">
          <div className="pb-10">
            <h1 className="font-geo text-3xl">HB - website</h1>
            <h3 className="font-geo text-xl">showcase website for artist</h3>
          </div>
          <div className="flex gap-2">
            <Link />
            <a href="https://hb-website-pearl.vercel.app/" className="font-geo text-2xl hover:underline">Website</a>
          </div>
          <div className="flex gap-2">
            <Github />
            <a href="https://github.com/pabloor29/hb-website" className="font-geo text-2xl hover:underline">Repo GitHub</a>
          </div>
          <div className="flex gap-2">
            <CodeXml />
            <p className="font-geo text-2xl">TypeScript / Tailwind.css</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-center gap-8"> {/*FLORIDABLANCA website*/}
        <div className="w-full sm:w-3/4 lg:w-1/2 relative">
          <Image
            src="/img/projects/floridablanca.webp"
            alt="carbo"
            layout="intrinsic"
            width={800}
            height={0}
          />
        </div>
        <div className="w-3/4 lg:w-1/4 flex flex-col gap-2 items-start justify-start">
          <div className="pb-10">
            <h1 className="font-geo text-3xl">FLORIDABLANCA - website</h1>
            <h3 className="font-geo text-xl">showcase website for restaurant</h3>
          </div>
          <div className="flex gap-2">
            <Link />
            <a href="https://www.floridablanca.fr/" className="font-geo text-2xl hover:underline">Website</a>
          </div>
          <div className="flex gap-2">
            <Github />
            <a href="https://github.com/pabloor29/floridablanca-website" className="font-geo text-2xl hover:underline">Repo GitHub</a>
          </div>
          <div className="flex gap-2">
            <CodeXml />
            <p className="font-geo text-2xl">TypeScript / Tailwind.css</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ReactProjects