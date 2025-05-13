"use client"

import "./Contact.css"
import { useState } from "react"

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = e => {
    if (e.target.closest(".title-bar")) {
      setDragging(true);
      setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    }
  };

  const onMouseMove = e => {
    if (dragging) {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const onMouseUp = () => setDragging(false);

  return (
        <div className="contact">
              <div className="row">
                <div className="icon-cell bevel flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold">John Doe</h2>
                  <p className="text-sm text-[#000080]">Web Developer</p>
                </div>
              </div>

              {[
                ["✉️", "john.doe@example.com"],
                ["📞", "(123) 456-7890"],
                ["🌐", "github.com/johndoe"],
                ["🔗", "linkedin.com/in/johndoe"],
              ].map(([icon, text]) => (
                <div key={text} className="row">
                  <div className="icon-cell bevel flex items-center justify-center">
                    <span className="text-xs">{icon}</span>
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}

              <div className="mt-6 pt-4 border-t border-[#808080]">
                <button className="px-4 py-1 bevel">Send Message</button>
              </div>
        

            {/* Status Bar */}
            <div className="status-bar bevel">
              <div className="count">4 items</div>
              <div>{new Date().toLocaleDateString()}</div>
            </div>
        
        
    
    </div>
  );
}
