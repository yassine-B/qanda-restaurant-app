import React, { ReactNode } from 'react';
import Styles from './Text.module.css';

interface textProps {
  color?: 'white' | 'black' | 'error' | 'primary';
  size?: 'small' | 'medium' | 'large';
  alignText?: 'center' | 'start' | 'end';
  styles?: string;
  children: ReactNode;
}

function Text({
  color = 'primary',
  size = 'small',
  alignText = 'start',
  styles,
  children
}: textProps) {
  return (
    <>
      <p
        className={`${Styles.text} 
alignment_${alignText}
${color}_color
${Styles[`text_${size}`]}
${styles || ''}
`}>
        {children}
      </p>
    </>
  );
}

export default Text;
