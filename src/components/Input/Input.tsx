import React from 'react';
import { InputStyled } from './Input.styles';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return <InputStyled value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;
