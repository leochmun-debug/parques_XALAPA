"use client";

import React, { useState, useEffect, useRef } from 'react';

export const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const scramble = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 2; // Speed control
    }, 30);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          scramble();
          hasAnimatedRef.current = true; // Only animate once per mount/scroll to prevent annoying looping
        } else if (!entries[0].isIntersecting) {
          // Reset so it animates again when they scroll back to it
          hasAnimatedRef.current = false;
          reset();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      observer.disconnect();
    };
  }, [text]);

  return (
    <span 
      ref={elementRef}
      onMouseEnter={() => {
        // Still allow manual hover trigger for desktop users
        hasAnimatedRef.current = true;
        scramble();
      }}
      onMouseLeave={reset}
      className="cursor-pointer inline-block w-full"
    >
      {displayText}
    </span>
  );
};
