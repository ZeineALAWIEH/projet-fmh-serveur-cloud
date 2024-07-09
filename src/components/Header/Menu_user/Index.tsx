// Menu_user.tsx

import React, { useState } from 'react';
import Modal from 'react-modal';

const Menu_user: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Image bouton pour ouvrir la boîte de dialogue avec classe Tailwind CSS */}
      <img
        src="/pngegg.png"
        alt="Menu"
        onClick={openModal}
        className="w-12 h-12 cursor-pointer"
      />

      {/* Boîte de dialogue avec classes Tailwind CSS */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Menu Modal"
        className="absolute left -1/20 top-0 mt-2 ml-2 p-4 bg-white rounded border border-gray-300 shadow-md"
        overlayClassName="flex items-start justify-end"
      >
        {/* Contenu du menu avec classes Tailwind CSS */}
        <div className="flex flex-col">
          <button className="m-2 p-2 bg-red-500 text-white rounded">Dashboard</button>
          <button className="m-2 p-2 bg-red-500 text-white rounded">Favorite</button>
          <button className="m-2 p-2 bg-red-500 text-white rounded">Add Hero</button>
          <button className="m-2 p-2 bg-red-500 text-white rounded" onClick={closeModal}>Fermer</button>
        </div>
      </Modal>
    </div>
  );
};

export default Menu_user;
