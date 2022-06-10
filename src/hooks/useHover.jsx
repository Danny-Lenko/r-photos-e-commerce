import {useState, useEffect, useRef} from "react"

function useHover() {
   const [hovered, setHovered] = useState(false)
   const ref = useRef(null)

   function enter() {
      setHovered(true)
   }

   function leave() {
      setHovered(false)
   }

   useEffect(() => {
      const currentEl = ref.current
      currentEl.addEventListener("mouseenter", enter)
      currentEl.addEventListener("mouseleave", leave)

      return () => {
         currentEl.removeEventListener("mouseenter", enter)
         currentEl.removeEventListener("mouseleave", leave)
      }
   }, [])

   return [hovered, ref]
}

export default useHover