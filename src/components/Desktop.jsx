"use client"

import "../styles/Desktop.css"

function Desktop({ onIconClick }) {
  const desktopIcons = [
    { id: "mycomputer", name: "My Computer", icon: "/img/computer_explorer.ico" },
    { id: "notepad", name: "Notepad", icon: "/img/notepad.ico" },
    { id: "recycle", name: "Recycle Bin", icon: "/img/recycle_bin_empty.ico" },
    { id: "portfolio", name: "Portfolio", icon :"/img/briefcase-4.png"},
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
