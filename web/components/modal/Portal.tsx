import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FC = ({ children }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#modal')
    setMounted(true)
  }, [])

  return mounted ? createPortal(children, ref.current) : null
}
