import React from 'react';
import { ModalOverlay } from './ModalOverlay';

export default {
  title: 'atomic/ModalOverlay',
  component: ModalOverlay,
};

export const Basic = () => (
  <ModalOverlay onClick={() => {}}>
    <div style={{ background: '#fff', padding: 20 }}>Modal Content</div>
  </ModalOverlay>
); 