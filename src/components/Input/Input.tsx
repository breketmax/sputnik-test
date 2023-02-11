import React from 'react';

interface IInput {
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  title?: string
  value: string
}

const Input: React.FC<IInput> = ({ onChange, placeholder, title, value, }) => {
  return (
    <div className="input-wrapper">
      {title !== null && <span className="input-title">{title}</span>}
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
