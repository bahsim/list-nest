import * as React from 'react';

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
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(42,46,53,0.16)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onClick={onClick}
    aria-modal="true"
    role="dialog"
  >
    {children}
  </div>
); 