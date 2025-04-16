"use client"

import { Clock } from "./Clock"
import { StartButton } from "./StartButton"
import { TaskbarItem } from "./TaskbarItem"

export function Taskbar({ isStartMenuOpen, toggleStartMenu, openWindows, activeWindow, setActiveWindow }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 flex h-10 items-center border-t-2 border-[#dfdfdf] bg-[#c0c0c0] px-1 shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff]">
      <StartButton isOpen={isStartMenuOpen} onClick={toggleStartMenu} />

      <div className="mx-1 flex-1 space-x-1">
        {openWindows.map((window) => (
          <TaskbarItem
            key={window.id}
            title={window.title}
            icon={window.icon}
            isActive={activeWindow === window.id}
            onClick={() => setActiveWindow(window.id)}
          />
        ))}
      </div>

      <Clock />
    </div>
  )
}
