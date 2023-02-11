import React from 'react'

interface IButton {
  name: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButton> = ({ name, onClick }) => {
  return (
    <div className="button-wrapper">
      <button onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button
