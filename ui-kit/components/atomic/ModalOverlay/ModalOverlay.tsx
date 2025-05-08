import * as React from 'react';
import styles from './ModalOverlay.module.scss';

/**
 * ModalOverlay provides a dimmed background for modals.
 * @param children - Modal content.
 * @param onClick - Handler for background click (optional).
 */
export interface ModalOverlayProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ children, onClick }) => (
  <div
    className={styles.overlay}
    onClick={onClick}
    aria-modal="true"
    role="dialog"
  >
    {children}
  </div>
); 