import React from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import ProductGrid from './components/ProductGrid';
import SidebarRight from './components/SidebarRight';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-secondary flex flex-col font-sans selection:bg-primary selection:text-white">
      <Header />

      <div className="container mx-auto flex flex-col lg:flex-row flex-grow pt-8 px-4 pb-12 gap-8">
        {/* Left Sidebar: Ads & Promos */}
        <div className="w-full lg:w-64">
          <SidebarLeft />
        </div>

        {/* Center: Products */}
        <div className="flex-grow">
          <ProductGrid />
        </div>

        {/* Right Sidebar: Catalogs */}
        <div className="w-full lg:w-64">
          <SidebarRight />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
