import React, { useState } from 'react';
import Modal from './Modal';

function Portal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <p onClick={() => setIsOpen(true)}>Login</p>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Portal;
