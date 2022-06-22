import { useEffect, useRef, useState } from 'react'

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
      const targetElement = ref.current
      targetElement.addEventListener('mouseenter', enter)
      targetElement.addEventListener('mouseleave', leave)

      return () => {
         targetElement.removeEventListener('mouseenter', enter)
         targetElement.removeEventListener('mouseleave', leave)
      }
   }, [])

   return [ hovered, ref ]
}

export default useHover