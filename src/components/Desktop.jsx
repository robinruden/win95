"use client"

import "../styles/Desktop.css"
import Draggable from 'react-draggable'
import { useRef } from 'react'

function Desktop({ onIconClick }) {
  const desktopIcons = [
    /* { id: "mycomputer", name: "My Computer", icon: "/img/computer_explorer.ico" }, */
    { id: "notepad", name: "About me", icon: "/img/notepad.ico", defaultPosition: {x: 300, y: 400} },
    /* { id: "recycle", name: "Recycle Bin", icon: "/img/recycle_bin_empty.ico" }, */
   /*  { id: "portfolio", name: "Portfolio", icon :"/img/briefcase-4.png"}, */
    { id: "SpinningCD", name: "Spinning CD.exe", icon :"/img/cd_drive.ico", defaultPosition: {x: 10, y: 60}},
  ]

  return (
 <div className="desktop">
       {desktopIcons.map((icon, i) => {
        const nodeRef = useRef(null)
        

        return (
         <Draggable
           key={icon.id}
           nodeRef={nodeRef}
           bounds="parent"
           defaultPosition={icon.defaultPosition}
           handle=".icon-image"
         >
           <div
           ref={nodeRef}
             className="desktop-icon"
             onClick={() => onIconClick(icon.id)}
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
