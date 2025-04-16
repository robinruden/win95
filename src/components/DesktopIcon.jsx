"use client"

export function DesktopIcon({ id, title, icon, position, isSelected, isDragging, onClick, onDragStart }) {
  return (
    <div
      className={`absolute flex w-20 flex-col items-center justify-center gap-1 p-2 text-center cursor-move ${
        isDragging ? "opacity-70" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: isDragging ? 10 : 1,
      }}
      onClick={onClick}
      onMouseDown={onDragStart}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded ${isSelected ? "bg-[#000080]/20" : ""}`}>
        {icon}
      </div>
      <div
        className={`max-w-full overflow-hidden text-ellipsis whitespace-nowrap px-1 text-xs font-medium ${
          isSelected ? "bg-[#000080] text-white" : "text-white"
        }`}
      >
        {title}
      </div>
    </div>
  )
}
