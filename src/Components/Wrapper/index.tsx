import React, { ReactNode } from 'react';
import Styles from './Wrapper.module.css';

function Wrapper({ children }: { children: ReactNode }) {
  return <div className={Styles.wrapper}>{children}</div>;
}

export default Wrapper;
