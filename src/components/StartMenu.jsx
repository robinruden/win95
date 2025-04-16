"use client"

export function StartMenu({ menuItems, onItemClick, onClose }) {
  const handleItemClick = (e, item) => {
    e.stopPropagation()
    onItemClick(item.id, item.title, item.icon)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-40" onClick={handleBackdropClick}>
      <div className="absolute bottom-10 left-0 z-50 w-64 rounded border-2 border-[#dfdfdf] bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff]">
        <div className="flex h-8 items-center bg-[#000080] px-2 text-white">
          <span className="text-sm font-bold">Windows 95</span>
        </div>

        <div className="border-t border-[#0a0a0a]">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="flex w-full items-center gap-3 px-4 py-2 text-left hover:bg-[#000080] hover:text-white"
              onClick={(e) => handleItemClick(e, item)}
            >
              <span className="flex h-6 w-6 items-center justify-center">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-2 border-t border-[#0a0a0a]">
          <button
            className="flex w-full items-center gap-3 px-4 py-2 text-left hover:bg-[#000080] hover:text-white"
            onClick={onClose}
          >
            <span className="font-bold">Shut Down...</span>
          </button>
        </div>
      </div>
    </div>
  )
}
