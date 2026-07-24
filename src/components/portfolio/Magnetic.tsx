import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // Distance in px to trigger magnetic effect
  actionScale?: number; // How far the element moves toward the mouse (0 to 1)
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  range = 60,
  actionScale = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid snapping and elastic return
  const springConfig = { stiffness: 120, damping: 15, mass: 0.8 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      setIsHovered(true);
      // Pull the element towards the cursor
      x.set(distanceX * actionScale);
      y.set(distanceY * actionScale);
    } else {
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="inline-block"
    >
      {React.cloneElement(children, {
        className: `${children.props.className || ""} transition-colors duration-200 ${
          isHovered ? "magnetic-active" : ""
        }`,
      })}
    </motion.div>
  );
};
export default Magnetic;
