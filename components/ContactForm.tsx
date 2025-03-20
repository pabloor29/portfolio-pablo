"use client";
import React, { useState } from 'react'
import { BadgeCheck } from 'lucide-react';

function ContactForm() {

    const [formData, setFormData] = useState({
        fullName: "",
        subjectMessage: "",
        message: "",
    });

    const [succeeded, setSucceeded] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    
        const {
          fullName,
          subjectMessage,
          message,
        } = formData;
    
        const mailTo = "pab.ortg@gmail.com";
        const subject = `${subjectMessage} - ${fullName}`;
        const body = `${message}`;
    
        window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
    
        setSucceeded(true);
    };

    return (
        <>
        {succeeded ? (
            <div className="flex flex-col lg:flex-row w-full h-screen justify-center px-4 items-center lg:space-x-3 text-greenBottle bg-whiteSmokedBG">
            <BadgeCheck />
            <p className="text-xl italic text-center">
                Email sent !
            </p>
            </div>
        ) : (
            <form 
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-14 justify-center items-center min-h-screen w-screen pt-20">
                    <div className="flex flex-col md:w-1/2 w-4/5">
                        <label 
                            htmlFor="fullName"
                            className="text-left font-geo text-3xl"
                        >
                            Name
                        </label>
                        <input 
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="font-geo text-xl mt-1 block w-full hover:py-2 border-b-2 focus:outline-none focus:ring-0 border-greenLight"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:w-1/2 w-4/5">
                        <label 
                            htmlFor="subjectMessage"
                            className="text-left font-geo text-3xl"
                        >
                            Subject
                        </label>
                        <input 
                            type="text"
                            id="subjectMessage"
                            name="subjectMessage"
                            value={formData.subjectMessage}
                            onChange={handleChange}
                            className="font-geo text-xl mt-1 block w-full hover:py-2 border-b-2 focus:outline-none focus:ring-0 border-greenLight"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:w-1/2 w-4/5">
                    <label 
                            htmlFor="message"
                            className="text-left font-geo text-3xl"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={1}
                            value={formData.message}
                            onChange={handleChange}
                            className="font-geo text-xl mt-1 block w-full hover:py-2 border-b-2 focus:outline-none focus:ring-0 border-greenLight"
                            required
                        />
                    </div>
                    <div className="pb-20">
                        <button
                            type="submit"
                            className="bg-greenLight hover:bg-transparent border hover:border-greenLight border-transparent
                            font-medium w-fit duration-200 px-4 py-3 font-geo text-2xl text-black cursor-grab"
                        >
                            Send email
                        </button>
                    </div>
                </div>
            </form>
        )}
        </>
    );
}

export default ContactForm