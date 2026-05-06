import React from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import ProductGrid from './components/ProductGrid';
import SidebarRight from './components/SidebarRight';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fcf3ea] flex flex-col font-sans selection:bg-primary selection:text-white">
      <Header />

      <div className="container mx-auto flex flex-grow pt-8 px-4 pb-12">
        {/* Left Sidebar: Ads & Promos */}
        <SidebarLeft />

        {/* Center: Products */}
        <ProductGrid />

        {/* Right Sidebar: Catalogs */}
        <SidebarRight />
      </div>

      <Footer />
    </div>
  );
}

export default App;
