// Sidebar.js
import React from 'react';





const Sidebar = ({ isOpen }) => {
  const handleHomeClick = () => {
    window.location.reload(); // Recarrega a página
  };

  const handleAboutClick = () => {
    window.location.href = '/about'; // Redireciona para a página "About"
  };

  return (
    <div className={`bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 fixed h-screen overflow-y-auto w-1/5 ${isOpen ? 'block' : 'hidden'} top-28`}>
      <div className="p-4 flex flex-col h-full">


        <div className="mt-4">
          <h2 className="text-3xl font-semibold mb-4">Menu</h2>
          <ul className="mb-4">
            <li>
            <button onClick={handleHomeClick} className="text-blue-600 hover:underline text-2xl">Home</button> {/* Use um botão */}
            </li>
            <li>
              <button onClick={handleAboutClick} className="text-blue-600 hover:underline text-2xl">About</button>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline text-2xl">Services</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline text-2xl">Contact</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
