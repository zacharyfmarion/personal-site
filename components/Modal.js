import * as React from 'react';
import { Button } from 'rebass/dist/Button';

// TODO: wire up to projects section
const Modal = ({ onClose, title, image }) => {
  return (
    <React.Portal>
      <div>modal</div>
      <Button onClick={onClose}>Close</Button>
    </React.Portal>
  );
};

export default Modal;
