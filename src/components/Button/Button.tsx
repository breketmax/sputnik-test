import React from 'react';

interface IButton {
  name?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

const Button: React.FC<IButton> = ({ name, onClick, children, }) => {
  return (
    <div className="button-wrapper">
      <button onClick={onClick}>{name !== undefined ? name : children}</button>
    </div>
  );
};

export default Button;
