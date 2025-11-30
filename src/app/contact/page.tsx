"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus("loading");

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus("error");
        }
    }

    return (
        <div>
            <Navbar currentPage="contact" />
            <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden p-10 flex justify-between gap-10">

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                    <svg className="w-full h-full">
                        <defs>
                            <pattern id="contactGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M 80 0 L 0 0 0 80" stroke="#6b21a8" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#contactGrid)" />
                    </svg>
                </div>

                {/* Floating shapes */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-violet-700/20 blur-3xl rounded-full animate-floatSlow"></div>

                {/* LEFT SIDE — FORM */}
                <div className="relative max-w-xl w-full z-10">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text animated-gradient mb-10">
                        Contact Me
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-gray-800/60 p-8 rounded-xl border border-violet-700/40 backdrop-blur-md shadow-xl"
                    >
                        {/* Name */}
                        <div>
                            <label className="block mb-1 text-gray-300">Name</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                className="w-full p-3 bg-gray-900/60 border border-violet-700/40 rounded-lg 
                    focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-gray-300">Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                className="w-full p-3 bg-gray-900/60 border border-violet-700/40 rounded-lg 
                    focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-1 text-gray-300">Message</label>
                            <textarea
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                                rows={6}
                                className="w-full p-3 bg-gray-900/60 border border-violet-700/40 rounded-lg 
                    focus:outline-none focus:border-violet-500 transition resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full flex justify-center items-center gap-2 bg-violet-700 hover:bg-violet-600 
                py-3 rounded-lg text-lg font-semibold transition shadow-lg 
                hover:shadow-violet-600/40 disabled:opacity-50"
                        >
                            Send Message
                            <Send className="w-5 h-5" />
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 text-center">Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-center">Something went wrong. Try again.</p>
                        )}
                    </form>
                </div>

                {/* RIGHT SIDE — CONTACT INFO + RESUME */}
                <div className="w-[350px] h-fit bg-gray-800/60 p-8 rounded-xl border border-violet-700/40 backdrop-blur-md shadow-xl z-10">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

                    <p className="text-gray-300 mb-4">Feel free to email or connect with me directly.</p>

                    <div className="space-y-3 mb-6">
                        <p className="text-gray-300"><strong>Email:</strong> akshaddhole14@gmail.com</p>
                        <p className="text-gray-300"><strong>Location:</strong> India</p>
                    </div>

                    {/* DOWNLOAD RESUME BUTTON */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="block text-center bg-violet-700 hover:bg-violet-600 py-3 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-violet-600/40"
                    >
                        Download Resume
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
