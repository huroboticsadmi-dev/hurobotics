import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import type { Product } from '../types';

interface ProductsPageProps {
  onProductSelect: (product: Product) => void;
}

const productCategories: Array<'청소로봇' | '물류로봇' | '서빙로봇' | '특수목적로봇'> = ['청소로봇', '물류로봇', '서빙로봇', '특수목적로봇'];

const ProductsPage: React.FC<ProductsPageProps> = ({ onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState<'청소로봇' | '물류로봇' | '서빙로봇' | '특수목적로봇'>('청소로봇');

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-paperlogi text-slate-800">제품소개</h1>
          <p className="mt-4 text-xl text-slate-600">휴로보틱스의 혁신적인 로봇 제품군을 만나보세요.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 p-2 bg-white rounded-full shadow-md">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ease-in-out ${
                  activeCategory === cat ? 'bg-blue-800 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${product.title}`}
            >
              <div className="relative h-64 bg-gray-50 flex items-center justify-center">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.title} className="w-full h-full object-contain p-4" />
                ) : (
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-slate-800">준비중입니다!</h3>
                    <p className="text-slate-500 text-sm mt-2">준비중입니다.</p>
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 truncate">{product.title}</h3>
                {product.name && product.name !== product.title && <p className="text-slate-600 mt-1">{product.name}</p>}
                <ul className="mt-4 space-y-2 text-slate-500 text-sm h-20">
                  {product.descriptionPoints.map((point, i) => (
                    <li key={i} className="flex items-center justify-center text-left">
                      <svg className="w-4 h-4 text-lime-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
                <button 
                    className="mt-6 w-full bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300"
                >
                    자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">선택된 카테고리에 제품이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
