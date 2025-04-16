"use client"

import { useEffect, useState } from "react"

export function Clock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? "PM" : "AM"
      const formattedHours = hours % 12 || 12
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
      setTime(`${formattedHours}:${formattedMinutes} ${ampm}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-8 items-center justify-center rounded border border-[#0a0a0a] bg-[#c0c0c0] px-2 text-xs shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a]">
      {time}
    </div>
  )
}
