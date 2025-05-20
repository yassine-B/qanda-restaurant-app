import React from 'react';
import Styles from './Header.module.css';

function Logo({ styles }: { styles?: string }) {
  return (
    <h1 className={`${styles || ''} ${Styles.logo}`}>
      <span className={Styles.logo_first_letter}>Q</span>anda
    </h1>
  );
}

export default Logo;
