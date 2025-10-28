import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import DemoPage from './pages/DemoPage';
import InquiryPage from './pages/InquiryPage';
import SupportPage from './pages/SupportPage';
import type { Product, Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page !== 'product') {
      setSelectedProduct(null);
    }
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleBackToProducts = () => {
    setCurrentPage('products');
    setSelectedProduct(null);
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onProductSelect={handleProductSelect} onNavigate={handleNavigate} />;
      case 'product':
        if (selectedProduct) {
          return <ProductDetailPage product={selectedProduct} onBack={() => handleNavigate('products')} />;
        }
        // Fallback to home if product page is accessed without a product
        return <HomePage onProductSelect={handleProductSelect} onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onProductSelect={handleProductSelect} />;
      case 'solutions':
        return <SolutionsPage />;
      case 'demo':
        return <DemoPage />;
      case 'inquiry':
        return <InquiryPage />;
      case 'support':
        return <SupportPage />;
      default:
        return <HomePage onProductSelect={handleProductSelect} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;