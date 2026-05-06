import React from 'react';

const SidebarRight = () => {
  const catalogs = [
    { title: 'Femme', subs: ['Robes', 'Hauts', 'Pantalons', 'Accessoires'] },
    { title: 'Homme', subs: ['Costumes', 'Chemises', 'Montres'] },
    { title: 'Enfants', subs: ['Bébés', 'Filles', 'Garçons'] },
  ];

  return (
    <aside className="w-full">
      <div className="bg-secondary p-6 rounded-xl border border-primary/20 lg:sticky lg:top-4 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-6 border-b border-primary/30 pb-2">Catalogues</h2>
        <ul className="space-y-6">
          {catalogs.map((cat, i) => (
            <li key={i}>
              <h3 className="font-bold text-black mb-2 uppercase text-sm tracking-wider">{cat.title}</h3>
              <ul className="pl-4 space-y-1 border-l border-primary/20">
                {cat.subs.map((sub, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors block py-1">
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarRight;
