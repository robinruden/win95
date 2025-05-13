"use client"

import "./Contact.css"
import { useState } from "react"

export default function Contact() {
  /* const [open, setOpen] = useState(false); */
  /* const [pos, setPos] = useState({ x: 50, y: 50 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 }); */

/*   const onMouseDown = e => {
    if (e.target.closest(".title-bar")) {
      setDragging(true);
      setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    }
  }; */

 /*  const onMouseMove = e => {
    if (dragging) {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const onMouseUp = () => setDragging(false); */

  return (
        <div className="contact">
            <div className="contact-header">
                <div className="contact-photo"> 
                    <img src="./img/robin.png" alt="" />
                </div>   
               
                <div className="contact-title-bar">
                    <h2 >Robin Rudén</h2>
                    <p>Web Developer</p>
                
                </div>
            </div>

            <div className="contact-content">  
               <p>✉️ robinruden@gmail.com</p> 
                <p>📞 0730502508</p>
               <p> 🌐 github.com/robinruden</p>
                <p>🔗 www.linkedin.com/in/robin-rudén-60959762</p>
            </div>

              <div className="mt-6 pt-4 border-t border-[#808080]">
                <button className="px-4 py-1 bevel">Send Message</button>
              </div>
    
        
        
    
    </div>
  );
}
