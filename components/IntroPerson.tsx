"use client";

import Image from 'next/image';
import React from 'react'

function IntroPerson() {
  return (
    <>
    <div className="w-screen flex justify-center py-12">
        <div className="w-4/5 flex justify-between gap-12">
            <div className="w-1/3">
                <Image src="/../public/img/person/pablo.png" alt='Pablo' width={300} height={600}/>
            </div>
            <div className="w-1/3 flex flex-col gap-20">
                <div className="">
                    <h1 className="font-geo text-4xl pb-3">Who am I ?</h1>
                    <p className="font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti corrupti quam deserunt laudantium, itaque animi in voluptate, nesciunt dolorem facilis. Saepe veritatis alias maxime nisi beatae repudiandae, magni ex at, autem laudantium id aliquam sint, voluptatem sed aperiam eius repellat. Omnis rerum nesciunt sunt nulla consectetur alias esse delectus, vitae dolorem cum repellat nemo quisquam dolorum sapiente dignissimos tempora?</p>
                </div>
                <div className="">
                    <h1 className="font-geo text-4xl pb-3">Experiences</h1>
                    <p className="font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti corrupti quam deserunt laudantium, itaque animi in voluptate, nesciunt dolorem facilis. Saepe veritatis alias maxime nisi beatae repudiandae, magni ex at, autem laudantium id aliquam sint, voluptatem sed aperiam eius repellat. Omnis rerum nesciunt sunt nulla consectetur alias esse delectus, vitae dolorem cum repellat nemo quisquam dolorum sapiente dignissimos tempora?</p>
                </div>
            </div>
            <div className="w-1/3 flex flex-col gap-20">
                <div className="">
                    <h1 className="font-geo text-4xl pb-3">Diplomas</h1>
                    <p className="font-roboto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laudantium impedit quae soluta delectus perferendis beatae et harum eaque nisi veniam corporis officia velit, deleniti quibusdam, quod nam distinctio! Expedita?</p>
                </div>
                <div className="">
                    <h1 className="font-geo text-4xl pb-3">Skills</h1>
                    <p className="font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam, minima rerum voluptates ut eligendi ipsa dolores mollitia laboriosam assumenda consectetur impedit hic eveniet facilis voluptatum omnis officia amet inventore!</p>
                </div>
                <div className="">
                    <h1 className="font-geo text-4xl pb-3">Hobbies</h1>
                    <p className="font-roboto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint asperiores quisquam officia ipsum, reiciendis aspernatur consequatur ad dolore dolor aperiam suscipit deserunt aliquam magni tempora dolorum voluptas impedit iure? Hic.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default IntroPerson