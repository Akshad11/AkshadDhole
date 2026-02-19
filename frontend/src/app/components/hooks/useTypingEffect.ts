import { useEffect, useState } from "react";

export function useTypingEffect(words: string[], speed = 100, pause = 1200) {
    const [index, setIndex] = useState(0);         // which word
    const [subIndex, setSubIndex] = useState(0);   // current letter
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!words || words.length === 0) return;

        const currentWord = words[index];

        // Typing speed (delete is faster)
        const typingSpeed = deleting ? speed / 2 : speed;

        const timeout = setTimeout(() => {
            if (!deleting) {
                // Typing forward
                if (subIndex < currentWord.length) {
                    setSubIndex((prev) => prev + 1);
                } else {
                    // Word complete → wait → start deleting
                    setTimeout(() => setDeleting(true), pause);
                }
            } else {
                // Deleting backwards
                if (subIndex > 0) {
                    setSubIndex((prev) => prev - 1);
                } else {
                    setDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index, words, speed, pause]);

    return words[index].substring(0, subIndex);
}
