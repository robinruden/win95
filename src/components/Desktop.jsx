"use client"

import "../styles/Desktop.css"

function Desktop({ onIconClick }) {
  const desktopIcons = [
    { id: "mycomputer", name: "My Computer", icon: "/my-computer.png" },
    { id: "notepad", name: "Notepad", icon: "/notepad.png" },
    { id: "recycle", name: "Recycle Bin", icon: "/recycle-bin.png" },
  ]

  return (
    <div className="desktop">
      {desktopIcons.map((icon) => (
        <div key={icon.id} className="desktop-icon" onDoubleClick={() => onIconClick(icon.id)}>
          <img src={icon.icon || "/placeholder.svg"} alt={icon.name} className="icon-image" />
          <div className="icon-text">{icon.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Desktop
