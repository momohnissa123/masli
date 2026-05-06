import SidebarLeft from '../components/SidebarLeft';
import ProductGrid from '../components/ProductGrid';
import SidebarRight from '../components/SidebarRight';

const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-grow pt-8 px-4 pb-12">
      {/* Left Sidebar: Ads & Promos */}
      <SidebarLeft />

      {/* Center: Products */}
      <ProductGrid />

      {/* Right Sidebar: Catalogs */}
      <SidebarRight />
    </div>
  );
};

export default HomePage;
