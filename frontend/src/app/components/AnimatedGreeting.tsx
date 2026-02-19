"use client";

import { useEffect, useMemo, useState } from "react";

const AnimatedGreeting = () => {
    const greetings = useMemo(
        () => [
            "Hello!",
            "¡Hola!",
            "Bonjour!",
            "Hallo!",
            "Ciao!",
            "こんにちは!",
        ],
        []
    );

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [greetings.length]);

    return (
        <div className="h-full flex items-center justify-center min-w-[120px]">
            <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>

            <div
                key={index} // forces animation restart on every update
                className="text-3xl sm:text-4xl font-extrabold text-white"
                style={{
                    animation: "fadeInOut 2.5s ease-in-out",
                }}
            >
                {greetings[index]}
            </div>
        </div>
    );
};

export default AnimatedGreeting;
