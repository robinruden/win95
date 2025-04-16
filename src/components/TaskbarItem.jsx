"use client"

export function TaskbarItem({ title, icon, isActive, onClick }) {
  return (
    <button
      className={`flex h-8 w-40 items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap rounded border px-2 text-left text-xs ${
        isActive
          ? "border-[#0a0a0a] bg-[#c0c0c0] shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a]"
          : "border-[#dfdfdf] bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff]"
      }`}
      onClick={onClick}
    >
      <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
      <span className="truncate">{title}</span>
    </button>
  )
}
