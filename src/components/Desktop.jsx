"use client"

import "../styles/Desktop.css"
import Draggable from 'react-draggable'
import { useRef } from 'react'

function Desktop({ onIconClick }) {
  const desktopIcons = [
    /* { id: "mycomputer", name: "My Computer", icon: "/img/computer_explorer.ico" }, */
    { id: "notepad", name: "Notepad", icon: "/img/notepad.ico" },
    /* { id: "recycle", name: "Recycle Bin", icon: "/img/recycle_bin_empty.ico" }, */
   /*  { id: "portfolio", name: "Portfolio", icon :"/img/briefcase-4.png"}, */
    { id: "SpinningCD", name: "Spinning CD.exe", icon :"/img/cd_drive.ico"},
  ]

  return (
  /*   <div className="desktop">
      {desktopIcons.map((icon) => (
        <div key={icon.id} className="desktop-icon" onDoubleClick={() => onIconClick(icon.id)}>
          <img src={icon.icon || "/placeholder.svg"} alt={icon.name} className="icon-image" />
          <div className="icon-text">{icon.name}</div>
        </div>
      ))}
 </div> */
 <div className="desktop">
       {desktopIcons.map((icon, i) => {
        const nodeRef = useRef(null)

        return (
         <Draggable
           key={icon.id}
           nodeRef={nodeRef}
           bounds="parent"
           defaultPosition={{ x: 20, y: 20 * (i + 1) }}
           handle=".icon-image"
         >
           <div
           ref={nodeRef}
             className="desktop-icon"
             onClick={() => onIconClick(icon.id)}
             onTouchEnd={(e) => {
               // If they tapped on the image itself, it's starting a drag, so ignore.
               if (e.target.classList.contains("icon-image")) return
               onIconClick(icon.id)
             }}
             >
             <img
               src={icon.icon || "/placeholder.svg"}
               alt={icon.name}
               className="icon-image"
             />
             <div className="icon-text">{icon.name}</div>
           </div>
         </Draggable>
        )
      })}
     </div>
  )
}

export default Desktop
