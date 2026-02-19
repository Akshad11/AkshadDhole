"use client";

import React, { useEffect, useState, useMemo } from "react";

interface StarFieldProps {
    count?: number;
    colors?: string[];
}

export default function StarField({
    count = 100,
    colors = ["#ffffff", "#a78bfa", "#34d399", "#38bdf8", "#f472b6"],
}: StarFieldProps) {

    const colorList = useMemo(() => colors, []); // stable colors
    const [stars, setStars] = useState<
        { top: number; left: number; size: number; color: string }[]
    >([]);

    useEffect(() => {
        const generated = Array.from({ length: count }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 3 + 1,
            color: colorList[Math.floor(Math.random() * colorList.length)],
        }));

        setStars(generated);
    }, []); // run only once

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="absolute rounded-full animate-star-glow"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        backgroundColor: star.color,
                        boxShadow: `0 0 8px ${star.color}`,
                    }}
                ></div>
            ))}
        </div>
    );
}
