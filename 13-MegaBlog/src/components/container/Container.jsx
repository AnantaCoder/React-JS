import React from 'react'
// only styling
export default function Container({children}) {
  return (
    <div>
      <div className="w-full max-w-7 mx-auto px-4">{children}</div>
    </div>
  )
}
