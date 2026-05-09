import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductManagementPage from './pages/ProductManagementPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fcf3ea] flex flex-col font-sans selection:bg-primary selection:text-white">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/gestion" element={<ProductManagementPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
