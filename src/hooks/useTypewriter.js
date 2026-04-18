import { useEffect, useState } from "react";

export function useTypewriter(texts, speed = 60, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const atEnd = !deleting && charIndex === current.length;
    const atStart = deleting && charIndex === 0;

    const delay = atEnd ? pause : deleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
        return;
      }
      if (atStart) {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
        return;
      }
      const next = deleting ? charIndex - 1 : charIndex + 1;
      setDisplay(current.slice(0, next));
      setCharIndex(next);
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts, speed, pause]);

  return display;
}
