import React, { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const COLORS = [
  "#4a4a4a", "#404040", "#363636", "#2c2c2c", "#222222", "#1e1e1e", "#1a1a1a",
  "#161616", "#121212", "#0e0e0e", "#0a0a0a", "#080808", "#060606", "#040404",
  "#020202", "#000000", "#1c1c1c", "#1a1a1a", "#181818", "#141414", "#121212",
  "#101010", "#0d0d0d"
];

// Extend HTMLDivElement to include custom properties
interface CustomDivElement extends HTMLDivElement {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const circlesRef = useRef<CustomDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circles = circlesRef.current;

    // Initialize circle properties
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = COLORS[index % COLORS.length];
    });

    let animationFrameId: number;

    const animateCircles = () => {
      const { x, y } = coords.current;

      circles.forEach((circle, index) => {
        const dx = circle.x - x;
        const dy = circle.y - y;

        circle.x -= dx * 0.15; // Reduced damping for smoother animation
        circle.y -= dy * 0.15;

        circle.style.transform = `translate(${circle.x - 12}px, ${circle.y - 12}px) scale(${
          (circles.length - index) / circles.length
        })`;
      });

      animationFrameId = requestAnimationFrame(animateCircles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animateCircles);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className={styles.circle}
          ref={(el) => {
            if (el) circlesRef.current[index] = el as CustomDivElement;
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
