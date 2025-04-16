"use client"

export function StartButton({ isOpen, onClick }) {
  return (
    <button
      className={`flex h-8 items-center gap-1 rounded border border-[#dfdfdf] px-2 font-bold ${
        isOpen
          ? "border-[#0a0a0a] bg-[#c0c0c0] shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a]"
          : "bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff]"
      }`}
      onClick={onClick}
    >
      <span className="text-sm font-bold">Start</span>
    </button>
  )
}
