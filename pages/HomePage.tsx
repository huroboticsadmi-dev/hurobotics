import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS_AREAS, PRODUCTS, SOLUTIONS } from '../constants';
import type { Product, Page, Solution } from '../types';

interface HomePageProps {
  onProductSelect: (product: Product) => void;
  onNavigate: (page: Page) => void;
}

const heroSlides = [
  {
    id: 1,
    title: 'The Best Partner',
    subtitle: 'for Smart Factory Automation',
  },
  {
    id: 2,
    title: 'Innovative Robotics',
    subtitle: 'Driving Productivity to the Maximum',
  },
  {
    id: 3,
    title: 'Future of Logistics',
    subtitle: 'Revolutionizing Business with Precision and Speed',
  },
];

const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden text-white">
            <video
                className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
                src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-in-a-factory-49764-large.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-4 z-20">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <h1 className="text-5xl md:text-7xl mb-4 font-paperlogi">{slide.title}</h1>
                        <p className="text-xl md:text-2xl font-light">{slide.subtitle}</p>
                    </div>
                ))}
            </div>
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

const ShowcaseProductsSection: React.FC<{onProductSelect: (product: Product) => void}> = ({onProductSelect}) => {
    const productCategories: Array<'청소로봇' | '물류로봇' | '서빙로봇' | '특수목적로봇'> = ['청소로봇', '물류로봇', '서빙로봇', '특수목적로봇'];
    const [activeCategory, setActiveCategory] = useState<'청소로봇' | '물류로봇' | '서빙로봇' | '특수목적로봇'>('청소로봇');
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [pillStyle, setPillStyle] = useState({});
    
    const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);
    
    const handleCategorySelect = (category: typeof activeCategory) => {
        setActiveCategory(category);
        setCurrentIndex(0);
    };
    
    useEffect(() => {
        const calculatePillPosition = () => {
            const activeIndex = productCategories.indexOf(activeCategory);
            const activeButton = buttonRefs.current[activeIndex];
            if (activeButton && containerRef.current) {
                setPillStyle({
                    left: `${activeButton.offsetLeft}px`,
                    width: `${activeButton.offsetWidth}px`,
                });
            }
        };

        // Calculate position on category change and window resize
        calculatePillPosition();
        window.addEventListener('resize', calculatePillPosition);
        
        return () => {
            window.removeEventListener('resize', calculatePillPosition);
        };
    }, [activeCategory]);


    const handleNext = () => {
        if (filteredProducts.length <= 1) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
    };

    const handlePrev = () => {
        if (filteredProducts.length <= 1) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
    };

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute -top-1/2 left-0 w-full h-full -z-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-transparent border-2 border-gray-100 rounded-[50%]"></div>
            </div>
            <div className="absolute -bottom-1/2 left-0 w-full h-full -z-1">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-transparent border-2 border-gray-100 rounded-[50%]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl font-bold font-paperlogi text-slate-800 tracking-wider">PRODUCTS</h2>
                <p className="mt-4 text-lg text-slate-600">생산성과 효율성을 높이는 혁신적 로봇 기술</p>
                <div className="mt-8 flex justify-center">
                    <div ref={containerRef} className="relative flex items-center p-1 bg-gray-100 rounded-full shadow-inner">
                        <div 
                            className="absolute top-1 bottom-1 bg-lime-400 rounded-full transition-all duration-300 ease-in-out"
                            style={pillStyle}
                        />
                        {productCategories.map((cat, index) => (
                            <button
                                key={cat}
                                ref={el => buttonRefs.current[index] = el}
                                onClick={() => handleCategorySelect(cat)}
                                className={`relative px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 z-10 whitespace-nowrap ${
                                    activeCategory === cat ? 'text-slate-900' : 'text-slate-600 hover:text-slate-800'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="relative h-[600px] mt-12 flex items-center justify-center">
                <div className="absolute top-1/2 -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[55%] h-[500px] bg-gray-100 rounded-[50%]"></div>

                <div className="w-full h-full relative">
                    {filteredProducts.map((product, index) => {
                        const offset = index - currentIndex;
                        let transform = 'scale(0.5)';
                        let opacity = 'opacity-0';
                        let zIndex = 'z-0';
                        let pointerEvents: 'auto' | 'none' = 'none';

                        if (offset === 0) { // Current
                            transform = 'translateX(0%) scale(1)';
                            opacity = 'opacity-100';
                            zIndex = 'z-20';
                            pointerEvents = 'auto';
                        } else if (offset === -1 || (currentIndex === 0 && index === filteredProducts.length - 1)) { // Prev
                            transform = 'translateX(-60%) scale(0.7)';
                            opacity = 'opacity-70';
                            zIndex = 'z-10';
                        } else if (offset === 1 || (currentIndex === filteredProducts.length - 1 && index === 0)) { // Next
                            transform = 'translateX(60%) scale(0.7)';
                            opacity = 'opacity-70';
                            zIndex = 'z-10';
                        } else if (offset < -1) {
                            transform = 'translateX(-120%) scale(0.5)';
                        } else if (offset > 1) {
                            transform = 'translateX(120%) scale(0.5)';
                        }
                        
                         if(filteredProducts.length > 2) {
                            if (currentIndex === 0 && index === filteredProducts.length - 1) {
                                transform = 'translateX(-60%) scale(0.7)';
                            }
                            if (currentIndex === filteredProducts.length - 1 && index === 0) {
                                transform = 'translateX(60%) scale(0.7)';
                            }
                        }


                        const isPrevOrNext = Math.abs(offset) === 1 || (filteredProducts.length > 2 && (currentIndex === 0 && index === filteredProducts.length - 1)) || (filteredProducts.length > 2 && (currentIndex === filteredProducts.length - 1 && index === 0));

                        return (
                            <div 
                                key={product.id} 
                                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${opacity} ${zIndex}`}
                                style={{ transform, pointerEvents }}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                                    <img 
                                        src={product.imageUrl} 
                                        alt={product.name} 
                                        className={`mx-auto transition-all duration-500 ${offset === 0 ? 'h-80 cursor-pointer' : 'h-56'}`}
                                        onClick={() => offset === 0 && onProductSelect(product)}
                                    />
                                    {offset === 0 ? (
                                        <>
                                            <h3 className="text-3xl font-bold mt-4">{product.title}</h3>
                                            {product.name !== product.title && <p className="text-slate-700 text-lg font-semibold">{product.name}</p>}
                                            <ul className="mt-2 text-slate-600">
                                                {product.descriptionPoints.map((point, i) => <li key={i}>{point}</li>)}
                                            </ul>
                                        </>
                                    ) : (
                                        isPrevOrNext && <>
                                            <p className="text-slate-700 text-md font-semibold mt-2">{product.name}</p>
                                            <p className="text-slate-500 text-sm">{product.title}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* Navigation */}
                 <button onClick={handlePrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition disabled:opacity-50" disabled={filteredProducts.length <= 1}>
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={handleNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition disabled:opacity-50" disabled={filteredProducts.length <= 1}>
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>

            </div>
        </section>
    );
};

const SolutionSection: React.FC = () => {
    const [selectedFieldIndex, setSelectedFieldIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSelect = (index: number) => {
        if (index === selectedFieldIndex || isAnimating) return;
        
        setIsAnimating(true);
        setSelectedFieldIndex(index);

        setTimeout(() => {
            setIsAnimating(false);
        }, 500); // Corresponds to transition duration
    };

    const selectedField = SOLUTIONS[selectedFieldIndex];

    return (
        <section id="solutions" className="relative bg-slate-100 py-20 min-h-[100vh] flex flex-col justify-between overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                {SOLUTIONS.map((solution, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out ${
                            selectedFieldIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url(${solution.imageUrl})` }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-100/80 to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col flex-grow">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-5xl tracking-wider font-bold font-paperlogi text-slate-800">SOLUTION</h2>
                    <p className="mt-4 text-lg text-slate-600">다양한 산업 분야를 위한 최적의 솔루션</p>
                </div>
                
                {/* Content Area */}
                <div className="flex-grow flex items-center justify-center">
                    <div className={`text-center max-w-3xl mx-auto transition-all duration-500 ease-in-out ${!isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{selectedField.name}</h3>
                        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg">
                            <ul className="text-left space-y-3 text-slate-700">
                                {selectedField.description.map((desc, index) => (
                                   <li key={index} className="flex items-start text-base md:text-lg">
                                     <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                     <span>{desc}</span>
                                   </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Navigation */}
            <div className="w-full relative z-10 mt-auto px-4 pb-8">
                <div className="flex justify-center items-end gap-4 md:gap-6 overflow-x-auto pb-4 no-scrollbar">
                    {SOLUTIONS.map((field, index) => {
                        const isSelected = selectedFieldIndex === index;
                        return (
                            <button
                                key={field.name}
                                onClick={() => handleSelect(index)}
                                className="flex flex-col items-center gap-2 flex-shrink-0 transform transition-all duration-300 ease-in-out hover:scale-105"
                                aria-label={`Select ${field.name} solution`}
                            >
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 bg-white shadow-lg transition-all duration-300 flex items-center justify-center transform ${isSelected ? 'border-blue-700 scale-110' : 'border-white'}`}>
                                    <div className="w-full h-full rounded-full overflow-hidden p-1 bg-white">
                                        <img src={field.imageUrl} alt={field.name} className="w-full h-full object-cover rounded-full"/>
                                    </div>
                                </div>
                                <span className={`text-center text-sm md:text-base font-semibold transition-colors duration-300 ${isSelected ? 'text-blue-800 font-bold' : 'text-slate-600'}`}>
                                    {field.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


const ContactSection: React.FC<{onNavigate: (page: Page) => void}> = ({onNavigate}) => {
    return (
        <section className="relative py-24 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop')"}}>
            <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold font-paperlogi">CONTACT</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">궁금한 점이 있으신가요? 언제든지 문의해주세요.<br/>휴로보틱스는 항상 고객의 목소리에 귀 기울이고 있습니다.</p>
                <button 
                    onClick={() => onNavigate('inquiry')}
                    className="mt-8 px-10 py-3 bg-white text-blue-900 font-bold rounded-full text-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105"
                >
                    문의하기
                </button>
            </div>
        </section>
    );
};

const HomePage: React.FC<HomePageProps> = ({ onProductSelect, onNavigate }) => {
  return (
    <div>
      <HeroSection />
      <ShowcaseProductsSection onProductSelect={onProductSelect} />
      <SolutionSection />
      <ContactSection onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;