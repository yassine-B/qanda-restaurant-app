import React, { ReactNode } from 'react';
import Styles from './Title.module.css';

interface titleProps {
  color?: 'white' | 'black' | 'orangered' | 'primary';
  size?: 'small' | 'medium' | 'large';
  alignTitle?: 'center' | 'start' | 'end';
  styles?: string;
  children: ReactNode;
}
function Title({
  color = 'primary',
  size = 'medium',
  alignTitle = 'start',
  styles,
  children
}: titleProps) {
  return (
    <>
      <h1
        className={`${Styles.title} alignment_${alignTitle} ${color}_color ${
          Styles[`title_${size}`]
        } ${styles || ''}
`}>
        {children}
      </h1>
    </>
  );
}

export default Title;
