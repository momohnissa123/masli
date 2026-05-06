import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-primary p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-16 w-auto mr-4" />
        <h1 className="text-2xl font-bold text-black hidden sm:block">MS Boutique</h1>
      </div>
      <div className="flex-grow max-w-xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher des produits..."
            className="w-full border-2 border-primary rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="absolute right-3 top-2.5 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-black hover:text-primary transition-colors font-medium">Panier</button>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-black transition-colors font-medium">Connexion</button>
      </div>
    </header>
  );
};

export default Header;
