import React, { ReactNode } from 'react';
import Styles from './Button.module.css';

interface buttonProps {
  styles?: string;
  bgColor?: 'primary' | 'secondary';
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}
function Button({
  bgColor = 'primary',
  disabled = false,
  type = 'button',
  onClick,
  styles,
  children
}: buttonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={() => {
        onClick && onClick();
      }}
      className={`${styles || ''} ${Styles.button}
     ${Styles[`button_${bgColor}`]} 
     `}>
      {children}
    </button>
  );
}

export default Button;
