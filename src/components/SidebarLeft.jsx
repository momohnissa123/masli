import React from 'react';

const SidebarLeft = () => {
  return (
    <aside className="w-full space-y-6">
      <div className="bg-secondary p-6 rounded-xl border border-primary/20 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-4 border-b border-primary/30 pb-2">Publicité</h2>
        <div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-primary/10 overflow-hidden group cursor-pointer">
          <p className="text-gray-400 group-hover:scale-110 transition-transform">Espace Pub</p>
        </div>
      </div>
      <div className="bg-primary text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-2 italic">PROMOS!</h2>
          <p className="text-3xl font-black mb-4">-50%</p>
          <p className="text-sm opacity-90 mb-4">Sur toute la collection d'été</p>
          <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-secondary transition-colors">
            Profiter
          </button>
        </div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </div>
    </aside>
  );
};

export default SidebarLeft;
