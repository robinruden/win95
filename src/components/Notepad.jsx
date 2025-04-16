"use client"

import "../styles/Notepad.css"
import { useState } from "react"

function Notepad() {
  const [text, setText] = useState("")

  return (
    <div className="notepad">
      <div className="notepad-menu">
        <div className="menu-item">File</div>
        <div className="menu-item">Edit</div>
        <div className="menu-item">Search</div>
        <div className="menu-item">Help</div>
      </div>
      <textarea
        className="notepad-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type some text here..."
      />
    </div>
  )
}

export default Notepad
