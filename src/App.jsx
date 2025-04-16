"use client"

import { useState } from "react"
import { Computer, FileText, FolderOpen, HelpCircle, Mail, Settings } from "lucide-react"

import { Desktop } from "./components/Desktop"
import { StartMenu } from "./components/StartMenu"
import { Taskbar } from "./components/Taskbar"
import { Window } from "./components/Window"
import cloudsWallpaper from "./assets/clouds-wallpaper.png"

function App() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false)
  const [openWindows, setOpenWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen)
  }

  const openWindow = (id, title, icon) => {
    if (!openWindows.some((window) => window.id === id)) {
      setOpenWindows([...openWindows, { id, title, icon }])
    }
    setActiveWindow(id)
    setIsStartMenuOpen(false)
  }

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter((window) => window.id !== id))
    if (activeWindow === id) {
      setActiveWindow(openWindows.length > 1 ? openWindows[0].id : null)
    }
  }

  const setWindowActive = (id) => {
    setActiveWindow(id)
  }

  const desktopIcons = [
    { id: "my-computer", title: "My Computer", icon: <Computer size={32} />, position: { x: 20, y: 20 } },
    { id: "my-documents", title: "My Documents", icon: <FileText size={32} />, position: { x: 20, y: 120 } },
    { id: "network", title: "Network", icon: <Computer size={32} />, position: { x: 20, y: 220 } },
    { id: "recycle-bin", title: "Recycle Bin", icon: <FolderOpen size={32} />, position: { x: 20, y: 320 } },
    {
      id: "internet-explorer",
      title: "Internet Explorer",
      icon: <HelpCircle size={32} />,
      position: { x: 20, y: 420 },
    },
  ]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#008080] text-black">
      <Desktop wallpaper={cloudsWallpaper} icons={desktopIcons} onIconClick={openWindow} />

      {openWindows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          icon={window.icon}
          isActive={activeWindow === window.id}
          onClose={() => closeWindow(window.id)}
          onFocus={() => setWindowActive(window.id)}
        >
          <div className="p-4">
            <h2 className="mb-2 text-lg font-bold">Welcome to {window.title}</h2>
            <p>This is a Windows 95 style application window.</p>
          </div>
        </Window>
      ))}

      <Taskbar
        isStartMenuOpen={isStartMenuOpen}
        toggleStartMenu={toggleStartMenu}
        openWindows={openWindows}
        activeWindow={activeWindow}
        setActiveWindow={setWindowActive}
      />

      {isStartMenuOpen && (
        <StartMenu
          onItemClick={(id, title, icon) => openWindow(id, title, icon)}
          onClose={() => setIsStartMenuOpen(false)}
          menuItems={[
            { id: "programs", title: "Programs", icon: <FolderOpen size={16} /> },
            { id: "documents", title: "Documents", icon: <FileText size={16} /> },
            { id: "settings", title: "Settings", icon: <Settings size={16} /> },
            { id: "mail", title: "Mail", icon: <Mail size={16} /> },
            { id: "help", title: "Help", icon: <HelpCircle size={16} /> },
          ]}
        />
      )}
    </div>
  )
}

export default App
