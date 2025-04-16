"use client"

import { useState } from "react"

import { DesktopIcon } from "./DesktopIcon"

export function Desktop({ wallpaper, icons, onIconClick }) {
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [iconPositions, setIconPositions] = useState(() => {
    // Initialize positions from the icons prop
    const positions = {}
    icons.forEach((icon) => {
      positions[icon.id] = icon.position || { x: 20, y: 20 }
    })
    return positions
  })
  const [draggingIcon, setDraggingIcon] = useState(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleIconClick = (id, title, icon) => {
    setSelectedIcon(id)
    onIconClick(id, title, icon)
  }

  const handleIconDragStart = (e, id) => {
    e.stopPropagation()
    // Calculate the offset from the mouse position to the icon's top-left corner
    const iconElement = e.currentTarget
    const rect = iconElement.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setDraggingIcon(id)
    setSelectedIcon(id)
  }

  const handleMouseMove = (e) => {
    if (!draggingIcon) return

    // Update the position based on mouse movement
    setIconPositions((prev) => ({
      ...prev,
      [draggingIcon]: {
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      },
    }))
  }

  const handleMouseUp = () => {
    if (draggingIcon) {
      // Snap to grid (optional)
      setIconPositions((prev) => {
        const position = prev[draggingIcon]
        return {
          ...prev,
          [draggingIcon]: {
            x: Math.round(position.x / 20) * 20,
            y: Math.round(position.y / 20) * 20,
          },
        }
      })
      setDraggingIcon(null)
    }
  }

  return (
    <div
      className="absolute inset-0 bottom-10 overflow-hidden"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => setSelectedIcon(null)}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {icons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          id={icon.id}
          title={icon.title}
          icon={icon.icon}
          position={iconPositions[icon.id]}
          isSelected={selectedIcon === icon.id}
          isDragging={draggingIcon === icon.id}
          onClick={(e) => {
            e.stopPropagation()
            handleIconClick(icon.id, icon.title, icon.icon)
          }}
          onDragStart={(e) => handleIconDragStart(e, icon.id)}
        />
      ))}
    </div>
  )
}
