"use client"

import { useState } from "react"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function AlphabetAnimation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Generate a random color
  const getRandomColor = () => {
    const colors = [
      "text-red-500",
      "text-blue-500",
      "text-green-500",
      "text-yellow-500",
      "text-purple-500",
      "text-pink-500",
      "text-indigo-500",
      "text-teal-500",
    ]
    return typeof window !== 'undefined' ? colors[Math.floor(Math.random() * colors.length)] : colors[0];
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 p-4">
      {letters.split("").map((letter, index) => {
        const isHovered = hoveredIndex === index
        const color = getRandomColor()

        return (
          <div
            key={index}
            className={`text-3xl font-bold cursor-pointer transition-all duration-200 ${color}`}
            style={{
              transform: isHovered ? "scale(1.5) rotate(5deg)" : "scale(1) rotate(0deg)",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {letter}
          </div>
        )
      })}
    </div>
  )
}
