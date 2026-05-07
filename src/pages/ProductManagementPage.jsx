import { useState } from 'react';

const ProductManagementPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productEmoji, setProductEmoji] = useState('📦');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Produit ajouté : ${productName}`);
    // Reset form
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductEmoji('📦');
  };

  return (
    <div className="flex flex-grow items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-secondary">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Gestion des Produits
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ajouter un nouveau produit à la boutique MS
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom du Produit
                </label>
                <input
                  id="productName"
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Ex: Robe de soirée"
                />
              </div>
              <div>
                <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Prix (€)
                </label>
                <input
                  id="productPrice"
                  type="number"
                  step="0.01"
                  required
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="89.99"
                />
              </div>
              <div>
                <label htmlFor="productEmoji" className="block text-sm font-medium text-gray-700 mb-1">
                  Emoji du Produit
                </label>
                <select
                  id="productEmoji"
                  value={productEmoji}
                  onChange={(e) => setProductEmoji(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option value="👗">👗 Robe</option>
                  <option value="👒">👒 Chapeau</option>
                  <option value="👜">👜 Sac</option>
                  <option value="👠">👠 Chaussures</option>
                  <option value="💍">💍 Bijou</option>
                  <option value="🧥">🧥 Veste</option>
                  <option value="📦">📦 Autre</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="productDescription"
                rows="8"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Décrivez votre produit ici..."
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Ajouter le produit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductManagementPage;
