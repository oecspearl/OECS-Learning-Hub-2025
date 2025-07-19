import React from "react"

interface HeaderNameProps {
  children: React.ReactNode
}

export default function HeaderName({ children }: HeaderNameProps) {
  return (
    <div className="text-2xl font-bold text-primary mb-4">
      {children}
    </div>
  )
} 