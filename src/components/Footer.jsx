import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src="/logo.jpeg" alt="Logo" className="h-12 w-auto mb-6 brightness-0 invert" />
          <p className="text-gray-400 leading-relaxed">
            Votre destination luxe pour la mode et les accessoires. Qualité et style réunis.
          </p>
        </div>
        <div>
          <h3 className="text-primary text-lg font-bold mb-6">Contactez-nous</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center">
              <span className="mr-3">📍</span> 123 Avenue de la Mode, Paris
            </li>
            <li className="flex items-center">
              <span className="mr-3">📞</span> +33 1 23 45 67 89
            </li>
            <li className="flex items-center">
              <span className="mr-3">✉️</span> contact@msboutique.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-primary text-lg font-bold mb-6">Informations</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Livraison</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Conditions générales</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MS Boutique. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
