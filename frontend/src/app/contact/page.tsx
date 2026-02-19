"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type FormState = {
    name: string;
    email: string;
    message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Request failed");

            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div>
            <Navbar currentPage="contact" />

            <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden px-6 py-20 flex flex-col lg:flex-row gap-10 justify-center">

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

                {/* Floating Shape */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-violet-700/20 blur-3xl rounded-full animate-floatSlow"></div>

                {/* LEFT — FORM */}
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
                            <label htmlFor="name" className="block mb-1 text-gray-300">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 bg-gray-900/60 border border-violet-700/40 rounded-lg focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block mb-1 text-gray-300">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 bg-gray-900/60 border border-violet-700/40 rounded-lg focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block mb-1 text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 bg-gray-900/60 border border-violet-700/40 rounded-lg focus:outline-none focus:border-violet-500 transition resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full flex justify-center items-center gap-2 bg-violet-700 hover:bg-violet-600 py-3 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-violet-600/40 disabled:opacity-50"
                        >
                            {status === "loading" ? (
                                <>
                                    Sending...
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 text-center">
                                Message sent successfully!
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-red-400 text-center">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>

                {/* RIGHT — CONTACT INFO */}
                <aside className="w-full lg:w-[350px] h-fit bg-gray-800/60 p-8 rounded-xl border border-violet-700/40 backdrop-blur-md shadow-xl z-10">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

                    <p className="text-gray-300 mb-4">
                        Feel free to email or connect with me directly.
                    </p>

                    <div className="space-y-3 mb-6">
                        <p className="text-gray-300">
                            <strong>Email:</strong> akshaddhole14@gmail.com
                        </p>
                        <p className="text-gray-300">
                            <strong>Location:</strong> India
                        </p>
                    </div>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="block text-center bg-violet-700 hover:bg-violet-600 py-3 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-violet-600/40"
                    >
                        Download Resume
                    </a>
                </aside>
            </section>

            <Footer />
        </div>
    );
}
