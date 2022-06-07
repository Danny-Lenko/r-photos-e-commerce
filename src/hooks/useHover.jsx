import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const targetEl = ref.current 
    targetEl.addEventListener("mouseenter", enter);
    targetEl.addEventListener("mouseleave", leave);

    return () => {
      targetEl.removeEventListener("mouseenter", enter);
      targetEl.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
