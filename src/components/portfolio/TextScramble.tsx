import { useEffect, useState, useRef, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  triggerOnScroll?: boolean;
}

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_@#$%-+=*[]{}";

export const TextScramble = ({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  triggerOnScroll = true,
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef<HTMLSpanElement>(null);
  const isStarted = useRef(false);
  const hasTriggered = useRef(false);
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    
    const length = text.length;
    let frame = 0;
    const totalFrames = Math.floor(duration * 60);

    const tick = () => {
      let result = "";
      const progress = frame / totalFrames;

      for (let i = 0; i < length; i++) {
        if (text[i] === " ") {
          result += " ";
          continue;
        }

        const charProgress = i / length;
        if (progress >= charProgress + 0.1) {
          result += text[i];
        } else if (progress > charProgress - 0.15) {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          result += " ";
        }
      }

      setDisplayText(result);

      if (frame < totalFrames) {
        frame += 1.5;
        animationRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayText(text);
      }
    };

    animationRef.current = requestAnimationFrame(tick);
  }, [text, duration]);

  useEffect(() => {
    setDisplayText(" ".repeat(text.length));
    const currentRef = containerRef.current;

    if (!triggerOnScroll) {
      timeoutRef.current = setTimeout(() => {
        isStarted.current = true;
        startAnimation();
      }, delay * 1000);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            timeoutRef.current = setTimeout(() => {
              isStarted.current = true;
              startAnimation();
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [text, delay, duration, triggerOnScroll, startAnimation]);

  const handleMouseEnter = () => {
    startAnimation();
  };

  return (
    <span ref={containerRef} className={className} onMouseEnter={handleMouseEnter}>
      {displayText}
    </span>
  );
};
export default TextScramble;
