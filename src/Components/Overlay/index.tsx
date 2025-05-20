import React, { ReactNode } from 'react';
import Styles from './Overlay.module.css';

interface overlayProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

function Overlay({ open, onClose, children }: overlayProps) {
  return (
    <div className={open ? Styles.overlay : Styles.hide_overlay} onClick={onClose}>
      {children && children}
    </div>
  );
}

export default Overlay;
