"use client"

import { useEffect, useRef, useState } from "react"
import { Minus, Square, X } from "lucide-react"

export function Window({ id, title, icon, children, isActive, onClose, onFocus }) {
  const [position, setPosition] = useState({ x: 50 + Math.random() * 100, y: 50 + Math.random() * 100 })
  const [size, setSize] = useState({ width: 500, height: 400 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const handleMouseDown = (e) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsDragging(true)
      onFocus()
    }
  }

  return (
    <div
      ref={windowRef}
      className={`absolute rounded border-2 ${
        isActive ? "z-30 border-[#dfdfdf]" : "z-20 border-[#c0c0c0]"
      } bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff]`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
      onClick={onFocus}
    >
      <div
        className={`flex h-6 items-center justify-between px-2 ${
          isActive ? "bg-[#000080] text-white" : "bg-[#808080] text-[#c0c0c0]"
        }`}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-1">
          <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
          <span className="text-xs font-bold">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-4 w-4 items-center justify-center rounded border border-[#dfdfdf] bg-[#c0c0c0] text-black shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff]">
            <Minus size={10} />
          </button>
          <button className="flex h-4 w-4 items-center justify-center rounded border border-[#dfdfdf] bg-[#c0c0c0] text-black shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff]">
            <Square size={10} />
          </button>
          <button
            className="flex h-4 w-4 items-center justify-center rounded border border-[#dfdfdf] bg-[#c0c0c0] text-black shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff]"
            onClick={onClose}
          >
            <X size={10} />
          </button>
        </div>
      </div>
      <div className="flex h-[calc(100%-1.5rem)] flex-col overflow-auto bg-white p-1">{children}</div>
    </div>
  )
}
