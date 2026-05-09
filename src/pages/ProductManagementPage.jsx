import { useState } from 'react';

const ProductManagementPage = () => {
  const [activeTab, setActiveTab] = useState('produits');

  // Product state
  const [products, setProducts] = useState([
    { id: 1, name: 'Robe Élégante', price: '89.99', sku: 'RE-001', category: 'femme', quantity: 10, description: 'Une belle robe.', emoji: '👗' },
    { id: 2, name: 'Chapeau Chic', price: '45.00', sku: 'CC-002', category: 'accessoires', quantity: 5, description: 'Chapeau élégant.', emoji: '👒' },
  ]);

  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Team state
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Mohamed', role: 'Administrateur', email: 'mohamed@boutique-ms.com', emoji: '👨🏽‍💻' },
    { id: 2, name: 'Sarah', role: 'Gestionnaire', email: 'sarah@boutique-ms.com', emoji: '👩🏼‍💼' },
  ]);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('Gestionnaire');
  const [newMemberEmail, setNewMemberEmail] = useState('');

  // Form fields for products
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productSku, setProductSku] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productEmoji, setProductEmoji] = useState('📦');

  const resetProductForm = () => {
    setProductName('');
    setProductPrice('');
    setProductSku('');
    setProductCategory('');
    setProductQuantity('');
    setProductDescription('');
    setProductEmoji('📦');
    setEditingProduct(null);
  };

  const handleAddProductClick = () => {
    resetProductForm();
    setShowProductForm(true);
  };

  const handleEditProductClick = (product) => {
    setEditingProduct(product);
    setProductName(product.name);
    setProductPrice(product.price);
    setProductSku(product.sku);
    setProductCategory(product.category);
    setProductQuantity(product.quantity.toString());
    setProductDescription(product.description);
    setProductEmoji(product.emoji);
    setShowProductForm(true);
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    const qty = parseInt(productQuantity) || 0;
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? {
        ...p,
        name: productName,
        price: productPrice,
        sku: productSku,
        category: productCategory,
        quantity: qty,
        description: productDescription,
        emoji: productEmoji
      } : p));
      alert(`Produit modifié : ${productName}`);
    } else {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: productPrice,
        sku: productSku,
        category: productCategory,
        quantity: qty,
        description: productDescription,
        emoji: productEmoji
      };
      setProducts([...products, newProduct]);
      alert(`Produit ajouté : ${productName}`);
    }
    setShowProductForm(false);
    resetProductForm();
  };

  const handleAddTeamMember = (e) => {
    e.preventDefault();
    const newMember = {
      id: Date.now(),
      name: newMemberName,
      role: newMemberRole,
      email: newMemberEmail,
      emoji: newMemberRole === 'Administrateur' ? '👨🏽‍💻' : '👩🏼‍💼'
    };
    setTeamMembers([...teamMembers, newMember]);
    setNewMemberName('');
    setNewMemberEmail('');
    setNewMemberRole('Gestionnaire');
    setShowTeamForm(false);
    alert(`Membre ajouté : ${newMemberName}`);
  };

  const tabs = [
    { id: 'produits', label: 'Produits' },
    { id: 'equipe', label: 'Équipe' },
    { id: 'paniers-abandonnes', label: 'Paniers Abandonnés' },
    { id: 'paniers', label: 'Paniers' },
  ];

  return (
    <div className="flex flex-col flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Tableau de Bord de Gestion
          </h2>
          <p className="mt-2 text-gray-600">
            Gérez votre boutique, votre équipe et suivez vos ventes.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowProductForm(false);
                setShowTeamForm(false);
              }}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-xl border border-secondary overflow-hidden">
          {activeTab === 'produits' && (
            <div className="p-8 md:p-12">
               <div className="flex justify-between items-center mb-8">
                 <h3 className="text-2xl font-bold">Gestion des Produits</h3>
                 {!showProductForm && (
                   <button
                    onClick={handleAddProductClick}
                    className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-primary transition-colors"
                   >
                     + Ajouter un produit
                   </button>
                 )}
               </div>

               {showProductForm ? (
                 <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xl font-bold">{editingProduct ? 'Modifier le produit' : 'Nouveau Produit'}</h4>
                      <button onClick={() => setShowProductForm(false)} className="text-gray-500 hover:text-black">Annuler</button>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmitProduct}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom du Produit</label>
                            <input
                              type="text" required value={productName}
                              onChange={(e) => setProductName(e.target.value)}
                              className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                              placeholder="Ex: Robe de soirée"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Prix (€)</label>
                              <input
                                type="number" step="0.01" required value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                placeholder="89.99"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                              <input
                                type="text" required value={productSku}
                                onChange={(e) => setProductSku(e.target.value)}
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                placeholder="MS-001"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                              <select
                                required value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                              >
                                <option value="">Choisir...</option>
                                <option value="femme">Femme</option>
                                <option value="homme">Homme</option>
                                <option value="enfants">Enfants</option>
                                <option value="accessoires">Accessoires</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Quantité</label>
                              <input
                                type="number" required value={productQuantity}
                                onChange={(e) => setProductQuantity(e.target.value)}
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                placeholder="10"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Emoji du Produit</label>
                            <select
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
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            rows="11" value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Décrivez votre produit ici..."
                          />
                        </div>
                      </div>
                      <button type="submit" className="w-full bg-primary text-white py-4 rounded-full font-bold hover:bg-black transition-colors">
                        {editingProduct ? 'Enregistrer les modifications' : 'Ajouter le produit'}
                      </button>
                    </form>
                 </div>
               ) : (
                 <div className="grid grid-cols-1 gap-4">
                   {products.map(product => (
                     <div key={product.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                       <div className="flex items-center gap-4">
                         <div className="text-4xl bg-secondary w-16 h-16 flex items-center justify-center rounded-xl">{product.emoji}</div>
                         <div>
                           <h4 className="font-bold text-lg">{product.name}</h4>
                           <p className="text-gray-500 text-sm">{product.sku} • {product.category} • {product.price}€</p>
                         </div>
                       </div>
                       <div className="flex gap-2">
                         <button
                          onClick={() => handleEditProductClick(product)}
                          className="px-4 py-2 text-sm font-bold border border-gray-300 rounded-lg hover:bg-black hover:text-white transition-all"
                         >
                           Modifier
                         </button>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
            </div>
          )}

          {activeTab === 'equipe' && (
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="text-2xl font-bold">Gestion de l'Équipe</h3>
                 {!showTeamForm && (
                   <button
                    onClick={() => setShowTeamForm(true)}
                    className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-primary transition-colors"
                   >
                     + Ajouter un membre
                   </button>
                 )}
               </div>

               {showTeamForm ? (
                 <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary max-w-2xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xl font-bold">Nouveau Membre</h4>
                      <button onClick={() => setShowTeamForm(false)} className="text-gray-500 hover:text-black">Annuler</button>
                    </div>
                    <form className="space-y-4" onSubmit={handleAddTeamMember}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                        <input
                          type="text" required value={newMemberName}
                          onChange={(e) => setNewMemberName(e.target.value)}
                          className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          placeholder="Ex: Jean Dupont"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email" required value={newMemberEmail}
                          onChange={(e) => setNewMemberEmail(e.target.value)}
                          className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          placeholder="jean@boutique-ms.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Rôle</label>
                        <select
                          value={newMemberRole}
                          onChange={(e) => setNewMemberRole(e.target.value)}
                          className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                          <option value="Gestionnaire">Gestionnaire</option>
                          <option value="Administrateur">Administrateur</option>
                          <option value="Vendeur">Vendeur</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full bg-primary text-white py-4 rounded-full font-bold hover:bg-black transition-colors">
                        Ajouter à l'équipe
                      </button>
                    </form>
                 </div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {teamMembers.map(member => (
                     <div key={member.id} className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl">
                       <div className="text-4xl bg-secondary w-16 h-16 flex items-center justify-center rounded-full">{member.emoji}</div>
                       <div>
                         <h4 className="font-bold text-lg">{member.name}</h4>
                         <p className="text-primary font-medium text-sm">{member.role}</p>
                         <p className="text-gray-500 text-xs">{member.email}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
            </div>
          )}

          {activeTab === 'paniers-abandonnes' && (
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Paniers Abandonnés</h3>
              <div className="space-y-4">
                {[1, 2].map(i => (
                  <div key={i} className="p-4 border border-gray-100 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="font-bold">Client Anonyme #{1230 + i}</p>
                      <p className="text-gray-500 text-sm">2 articles • 135.00€</p>
                    </div>
                    <button className="text-primary font-bold hover:underline">Détails</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'paniers' && (
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Gestion des Paniers</h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-4 border border-gray-100 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="font-bold">Panier Actif #{4560 + i}</p>
                      <p className="text-gray-500 text-sm">Il y a {i * 10} minutes</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Actif</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPage;
