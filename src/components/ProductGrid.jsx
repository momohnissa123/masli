const products = [
  { id: 1, name: 'Robe Élégante', price: '89.99€', img: '👗' },
  { id: 2, name: 'Chapeau Chic', price: '45.00€', img: '👒' },
  { id: 3, name: 'Sac à Main Luxe', price: '120.00€', img: '👜' },
  { id: 4, name: 'Chaussures MS', price: '75.50€', img: '👠' },
  { id: 5, name: 'Accessoire Or', price: '30.00€', img: '💍' },
  { id: 6, name: 'Veste Stylée', price: '150.00€', img: '🧥' },
];

const ProductGrid = () => {
  return (
    <main className="flex-grow px-8">
      <h2 className="text-3xl font-serif font-bold text-black mb-8 border-l-4 border-primary pl-4">Nos Produits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl p-4 shadow-md border border-secondary hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-square bg-secondary rounded-xl mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
              {product.img}
            </div>
            <h3 className="text-lg font-bold text-black mb-1">{product.name}</h3>
            <p className="text-primary font-bold text-xl mb-4">{product.price}</p>
            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-primary transition-colors font-semibold">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductGrid;
