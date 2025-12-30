import { useState, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { Header } from '../components/Header.jsx'
import { Footer } from '../components/Footer.jsx'

const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
)

const CartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
)

const FilterIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
)

const StarIcon = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-grey/30'}`} viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
)

const categories = [
    { id: 'all', name: 'Todos', icon: '🔥' },
    { id: 'smartphones', name: 'Smartphones', icon: '📱' },
    { id: 'laptops', name: 'Laptops', icon: '💻' },
    { id: 'audio', name: 'Audio', icon: '🎧' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'accessories', name: 'Accesorios', icon: '⌚' },
    { id: 'wearables', name: 'Wearables', icon: '⌚' },
]

const brands = [
    { id: 'apple', name: 'Apple' },
    { id: 'samsung', name: 'Samsung' },
    { id: 'sony', name: 'Sony' },
    { id: 'asus', name: 'ASUS' },
    { id: 'nintendo', name: 'Nintendo' },
]


const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        category: 'smartphones',
        brand: 'apple',
        price: 1199,
        originalPrice: 1299,
        description: 'Chip A17 Pro, Titanio, Cámara 48MP',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
        isNew: true,
        discount: 10,
        rating: 5,
        reviews: 234,
        inStock: true,
        freeShipping: true,
    },
    {
        id: 2,
        name: 'MacBook Air M3',
        category: 'laptops',
        brand: 'apple',
        price: 1299,
        originalPrice: 1299,
        description: '15" Liquid Retina, 18h batería',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        isNew: true,
        discount: 0,
        rating: 5,
        reviews: 189,
        inStock: true,
        freeShipping: true,
    },
    {
        id: 3,
        name: 'AirPods Pro 2',
        category: 'audio',
        brand: 'apple',
        price: 212,
        originalPrice: 249,
        description: 'Cancelación de ruido adaptativa',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
        isNew: false,
        discount: 15,
        rating: 4,
        reviews: 456,
        inStock: true,
        freeShipping: false,
    },
    {
        id: 4,
        name: 'PlayStation 5',
        category: 'gaming',
        brand: 'sony',
        price: 449,
        originalPrice: 499,
        description: 'Edición Digital, SSD Ultra Rápido',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
        isNew: false,
        discount: 10,
        rating: 5,
        reviews: 892,
        inStock: true,
        freeShipping: true,
    },
    {
        id: 5,
        name: 'Samsung Galaxy S24 Ultra',
        category: 'smartphones',
        brand: 'samsung',
        price: 1099,
        originalPrice: 1199,
        description: 'Galaxy AI, S Pen integrado',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
        isNew: true,
        discount: 8,
        rating: 5,
        reviews: 312,
        inStock: true,
        freeShipping: true,
    },
    {
        id: 6,
        name: 'Sony WH-1000XM5',
        category: 'audio',
        brand: 'sony',
        price: 299,
        originalPrice: 349,
        description: 'Mejor cancelación de ruido',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
        isNew: false,
        discount: 14,
        rating: 5,
        reviews: 567,
        inStock: true,
        freeShipping: false,
    },
    {
        id: 7,
        name: 'Apple Watch Ultra 2',
        category: 'wearables',
        brand: 'apple',
        price: 799,
        originalPrice: 799,
        description: 'GPS, 36h batería, Titanio',
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
        isNew: true,
        discount: 0,
        rating: 4,
        reviews: 145,
        inStock: true,
        freeShipping: true,
    },
    {
        id: 8,
        name: 'ASUS ROG Laptop',
        category: 'laptops',
        brand: 'asus',
        price: 1899,
        originalPrice: 2099,
        description: 'RTX 4080, i9 14900H, 32GB RAM',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
        isNew: false,
        discount: 10,
        rating: 5,
        reviews: 234,
        inStock: false,
        freeShipping: true,
    },
    {
        id: 9,
        name: 'Nintendo Switch OLED',
        category: 'gaming',
        brand: 'nintendo',
        price: 349,
        originalPrice: 349,
        description: 'Pantalla OLED 7", Dock mejorado',
        image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop',
        isNew: false,
        discount: 0,
        rating: 4,
        reviews: 678,
        inStock: true,
        freeShipping: false,
    },
    {
        id: 10,
        name: 'Samsung Galaxy Buds2 Pro',
        category: 'audio',
        brand: 'samsung',
        price: 179,
        originalPrice: 229,
        description: 'Audio Hi-Fi, ANC Inteligente',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
        isNew: false,
        discount: 22,
        rating: 4,
        reviews: 345,
        inStock: true,
        freeShipping: false,
    },
    {
        id: 11,
        name: 'iPad Pro M4',
        category: 'laptops',
        brand: 'apple',
        price: 999,
        originalPrice: 999,
        description: 'Pantalla OLED, Chip M4, 12.9"',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        isNew: true,
        discount: 0,
        rating: 5,
        reviews: 123,
        inStock: true,
        freeShipping: true,
    },
    {
        id: 12,
        name: 'Samsung Galaxy Watch 6',
        category: 'wearables',
        brand: 'samsung',
        price: 299,
        originalPrice: 329,
        description: 'Sensor BioActive, Wear OS',
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
        isNew: false,
        discount: 9,
        rating: 4,
        reviews: 256,
        inStock: true,
        freeShipping: true,
    },
]


const sortOptions = [
    { id: 'featured', name: 'Destacados' },
    { id: 'price-asc', name: 'Precio: Menor a Mayor' },
    { id: 'price-desc', name: 'Precio: Mayor a Menor' },
    { id: 'newest', name: 'Más Recientes' },
    { id: 'rating', name: 'Mejor Valorados' },
    { id: 'discount', name: 'Mayor Descuento' },
]

export function ProductsPage() {

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedBrands, setSelectedBrands] = useState([])
    const [priceRange, setPriceRange] = useState({ min: '', max: '' })
    const [minRating, setMinRating] = useState(0)
    const [onlyInStock, setOnlyInStock] = useState(false)
    const [onlyFreeShipping, setOnlyFreeShipping] = useState(false)
    const [onlyOnSale, setOnlyOnSale] = useState(false)
    const [sortBy, setSortBy] = useState('featured')
    const [showMobileFilters, setShowMobileFilters] = useState(false)

    const headerRef = useRef(null)
    const productsGridRef = useRef(null)


    const toggleBrand = (brandId) => {
        setSelectedBrands(prev =>
            prev.includes(brandId)
                ? prev.filter(b => b !== brandId)
                : [...prev, brandId]
        )
    }


    const clearAllFilters = () => {
        setSearchQuery('')
        setSelectedCategory('all')
        setSelectedBrands([])
        setPriceRange({ min: '', max: '' })
        setMinRating(0)
        setOnlyInStock(false)
        setOnlyFreeShipping(false)
        setOnlyOnSale(false)
        setSortBy('featured')
    }


    const activeFiltersCount = [
        selectedCategory !== 'all',
        selectedBrands.length > 0,
        priceRange.min !== '' || priceRange.max !== '',
        minRating > 0,
        onlyInStock,
        onlyFreeShipping,
        onlyOnSale,
    ].filter(Boolean).length


    const filteredProducts = products.filter(product => {

        const matchesSearch = searchQuery === '' ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())


        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory


        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)


        const matchesMinPrice = priceRange.min === '' || product.price >= Number(priceRange.min)
        const matchesMaxPrice = priceRange.max === '' || product.price <= Number(priceRange.max)


        const matchesRating = product.rating >= minRating


        const matchesStock = !onlyInStock || product.inStock


        const matchesFreeShipping = !onlyFreeShipping || product.freeShipping


        const matchesOnSale = !onlyOnSale || product.discount > 0

        return matchesSearch && matchesCategory && matchesBrand &&
            matchesMinPrice && matchesMaxPrice && matchesRating &&
            matchesStock && matchesFreeShipping && matchesOnSale
    })


    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-asc':
                return a.price - b.price
            case 'price-desc':
                return b.price - a.price
            case 'newest':
                return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
            case 'rating':
                return b.rating - a.rating
            case 'discount':
                return b.discount - a.discount
            default:
                return 0
        }
    })

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(headerRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            )

            if (productsGridRef.current) {
                gsap.fromTo(productsGridRef.current.querySelectorAll('.product-card'),
                    { opacity: 0, y: 30, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.05,
                        ease: "power3.out",
                        delay: 0.3,
                    }
                )
            }
        })

        return () => ctx.revert()
    }, [])


    const renderFiltersContent = (isMobile = false) => (
        <div className={`${isMobile ? 'p-6' : ''}`}>
            <div className="space-y-6">
                { }
                <div>
                    <h3 className="text-sm font-bold text-yale-blue mb-3 uppercase tracking-wide">Categorías</h3>
                    <div className="space-y-1">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all duration-200 cursor-pointer ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-jade-green to-bright-sky text-white'
                                    : 'text-grey hover:text-yale-blue hover:bg-ghost-white'
                                    }`}
                            >
                                <span>{category.icon}</span>
                                <span className="text-sm font-medium">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                { }
                <div>
                    <h3 className="text-sm font-bold text-yale-blue mb-3 uppercase tracking-wide">Rango de Precio</h3>
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-grey text-sm">$</span>
                            <input
                                type="number"
                                placeholder="Min"
                                value={priceRange.min}
                                onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                                className="w-full pl-7 pr-2 py-2 bg-ghost-white border border-grey/20 rounded-lg text-sm focus:outline-none focus:border-jade-green transition-colors"
                            />
                        </div>
                        <span className="text-grey">-</span>
                        <div className="relative flex-1">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-grey text-sm">$</span>
                            <input
                                type="number"
                                placeholder="Max"
                                value={priceRange.max}
                                onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                                className="w-full pl-7 pr-2 py-2 bg-ghost-white border border-grey/20 rounded-lg text-sm focus:outline-none focus:border-jade-green transition-colors"
                            />
                        </div>
                    </div>
                </div>

                { }
                <div>
                    <h3 className="text-sm font-bold text-yale-blue mb-3 uppercase tracking-wide">Marcas</h3>
                    <div className="space-y-2">
                        {brands.map((brand) => (
                            <label key={brand.id} className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${selectedBrands.includes(brand.id)
                                    ? 'bg-jade-green border-jade-green'
                                    : 'border-grey/30 group-hover:border-jade-green'
                                    }`}>
                                    {selectedBrands.includes(brand.id) && (
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand.id)}
                                    onChange={() => toggleBrand(brand.id)}
                                    className="hidden"
                                />
                                <span className="text-sm text-grey group-hover:text-yale-blue transition-colors">{brand.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                { }
                <div>
                    <h3 className="text-sm font-bold text-yale-blue mb-3 uppercase tracking-wide">Valoración Mínima</h3>
                    <div className="space-y-1">
                        {[4, 3, 2, 1].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all cursor-pointer ${minRating === rating ? 'bg-ghost-white' : 'hover:bg-ghost-white/50'
                                    }`}
                            >
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <StarIcon key={star} filled={star <= rating} />
                                    ))}
                                </div>
                                <span className="text-sm text-grey">y más</span>
                            </button>
                        ))}
                    </div>
                </div>

                { }
                <div>
                    <h3 className="text-sm font-bold text-yale-blue mb-3 uppercase tracking-wide">Opciones</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-10 h-6 rounded-full relative transition-all ${onlyInStock ? 'bg-jade-green' : 'bg-grey/20'}`}>
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${onlyInStock ? 'left-5' : 'left-1'}`}></div>
                            </div>
                            <input
                                type="checkbox"
                                checked={onlyInStock}
                                onChange={(e) => setOnlyInStock(e.target.checked)}
                                className="hidden"
                            />
                            <span className="text-sm text-grey group-hover:text-yale-blue">En Stock</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-10 h-6 rounded-full relative transition-all ${onlyFreeShipping ? 'bg-jade-green' : 'bg-grey/20'}`}>
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${onlyFreeShipping ? 'left-5' : 'left-1'}`}></div>
                            </div>
                            <input
                                type="checkbox"
                                checked={onlyFreeShipping}
                                onChange={(e) => setOnlyFreeShipping(e.target.checked)}
                                className="hidden"
                            />
                            <span className="text-sm text-grey group-hover:text-yale-blue">Envío Gratis</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-10 h-6 rounded-full relative transition-all ${onlyOnSale ? 'bg-jade-green' : 'bg-grey/20'}`}>
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${onlyOnSale ? 'left-5' : 'left-1'}`}></div>
                            </div>
                            <input
                                type="checkbox"
                                checked={onlyOnSale}
                                onChange={(e) => setOnlyOnSale(e.target.checked)}
                                className="hidden"
                            />
                            <span className="text-sm text-grey group-hover:text-yale-blue">Solo Ofertas</span>
                        </label>
                    </div>
                </div>

                { }
                {activeFiltersCount > 0 && (
                    <button
                        onClick={clearAllFilters}
                        className="w-full py-2 text-sm text-jade-green hover:text-yale-blue font-medium transition-colors cursor-pointer"
                    >
                        Limpiar Filtros ({activeFiltersCount})
                    </button>
                )}
            </div>
        </div>
    )

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-ghost-white to-white pt-24">
                { }
                <div className="fixed top-40 right-0 w-96 h-96 bg-jade-green/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="fixed bottom-20 left-0 w-80 h-80 bg-bright-sky/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    { }
                    <div ref={headerRef} className="mb-8">
                        { }
                        <nav className="flex items-center gap-2 text-sm mb-6 opacity-0">
                            <Link to="/" className="text-grey hover:text-jade-green transition-colors">Inicio</Link>
                            <span className="text-grey">/</span>
                            <span className="text-yale-blue font-medium">Productos</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold text-yale-blue mb-4 opacity-0">
                            Todos los <span className="bg-gradient-to-r from-jade-green to-bright-sky bg-clip-text text-transparent">Productos</span>
                        </h1>

                        { }
                        <div className="opacity-0">
                            <div className="flex flex-col lg:flex-row gap-4">
                                { }
                                <div className="flex-1 relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-jade-green to-bright-sky rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                    <div className="relative flex items-center bg-white rounded-xl shadow-lg border border-grey/10">
                                        <div className="pl-4 text-grey">
                                            <SearchIcon />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Buscar productos, marcas, categorías..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full py-3 px-4 bg-transparent text-yale-blue placeholder-grey/60 focus:outline-none"
                                        />
                                        {searchQuery && (
                                            <button
                                                onClick={() => setSearchQuery('')}
                                                className="pr-4 text-grey hover:text-yale-blue transition-colors cursor-pointer"
                                            >
                                                ✕
                                            </button>
                                        )}
                                    </div>
                                </div>

                                { }
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="appearance-none w-full lg:w-48 px-4 py-3 bg-white border border-grey/10 rounded-xl shadow-lg text-yale-blue focus:outline-none focus:border-jade-green cursor-pointer"
                                    >
                                        {sortOptions.map(option => (
                                            <option key={option.id} value={option.id}>{option.name}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                { }
                                <button
                                    onClick={() => setShowMobileFilters(true)}
                                    className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-yale-blue text-white rounded-xl shadow-lg cursor-pointer"
                                >
                                    <FilterIcon />
                                    Filtros
                                    {activeFiltersCount > 0 && (
                                        <span className="w-5 h-5 bg-jade-green rounded-full text-xs flex items-center justify-center">
                                            {activeFiltersCount}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    { }
                    <div className="flex gap-8">
                        { }
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-28">
                                <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50">
                                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-grey/10">
                                        <FilterIcon />
                                        <h2 className="text-lg font-bold text-yale-blue">Filtros</h2>
                                    </div>
                                    {renderFiltersContent()}
                                </div>
                            </div>
                        </aside>

                        { }
                        <div className="flex-1">
                            { }
                            <p className="text-grey mb-6">
                                Mostrando <span className="font-semibold text-yale-blue">{sortedProducts.length}</span> productos
                            </p>

                            {sortedProducts.length === 0 ? (
                                <div className="text-center py-16 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl">
                                    <div className="text-6xl mb-4">🔍</div>
                                    <h3 className="text-xl font-bold text-yale-blue mb-2">No se encontraron productos</h3>
                                    <p className="text-grey mb-6">Intenta ajustar los filtros o busca algo diferente</p>
                                    <button
                                        onClick={clearAllFilters}
                                        className="px-6 py-3 bg-gradient-to-r from-jade-green to-bright-sky text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                    >
                                        Limpiar Filtros
                                    </button>
                                </div>
                            ) : (
                                <div ref={productsGridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {sortedProducts.map((product) => (
                                        <div key={product.id} className="product-card group relative">
                                            { }
                                            <div className="absolute -inset-0.5 bg-gradient-to-br from-jade-green/20 to-bright-sky/20 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>

                                            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                                { }
                                                <div className="relative h-48 bg-gradient-to-br from-ghost-white to-white overflow-hidden">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    { }
                                                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                                        {product.isNew && (
                                                            <span className="px-2 py-1 bg-jade-green text-white text-xs font-bold rounded-full shadow-lg">
                                                                NUEVO
                                                            </span>
                                                        )}
                                                        {product.discount > 0 && (
                                                            <span className="px-2 py-1 bg-gradient-to-r from-yale-blue to-bright-sky text-white text-xs font-bold rounded-full shadow-lg">
                                                                -{product.discount}%
                                                            </span>
                                                        )}
                                                        {product.freeShipping && (
                                                            <span className="px-2 py-1 bg-white/90 text-jade-green text-xs font-bold rounded-full shadow-lg">
                                                                ENVÍO GRATIS
                                                            </span>
                                                        )}
                                                    </div>
                                                    {!product.inStock && (
                                                        <div className="absolute inset-0 bg-yale-blue/60 flex items-center justify-center">
                                                            <span className="px-4 py-2 bg-white text-yale-blue font-bold rounded-lg">
                                                                AGOTADO
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                { }
                                                <div className="p-4">
                                                    { }
                                                    <span className="text-xs text-jade-green font-semibold uppercase tracking-wide">
                                                        {brands.find(b => b.id === product.brand)?.name}
                                                    </span>

                                                    <h4 className="text-lg font-bold text-yale-blue mb-1 group-hover:text-jade-green transition-colors line-clamp-1">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-grey text-sm mb-2 line-clamp-1">
                                                        {product.description}
                                                    </p>

                                                    { }
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="flex">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <StarIcon key={star} filled={star <= product.rating} />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-grey">({product.reviews})</span>
                                                    </div>

                                                    { }
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="text-xl font-black text-yale-blue">
                                                            ${product.price}
                                                        </span>
                                                        {product.discount > 0 && (
                                                            <span className="text-grey line-through text-sm">
                                                                ${product.originalPrice}
                                                            </span>
                                                        )}
                                                    </div>

                                                    { }
                                                    <button
                                                        disabled={!product.inStock}
                                                        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${product.inStock
                                                            ? 'bg-gradient-to-r from-jade-green to-bright-sky text-white shadow-lg shadow-jade-green/30 hover:shadow-xl hover:-translate-y-0.5'
                                                            : 'bg-grey/20 text-grey cursor-not-allowed'
                                                            }`}
                                                    >
                                                        <CartIcon />
                                                        Agregar al Carrito
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                { }
                {showMobileFilters && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div
                            className="absolute inset-0 bg-yale-blue/50 backdrop-blur-sm"
                            onClick={() => setShowMobileFilters(false)}
                        ></div>
                        <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
                            <div className="sticky top-0 bg-white p-4 border-b border-grey/10 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-yale-blue">Filtros</h2>
                                <button
                                    onClick={() => setShowMobileFilters(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ghost-white transition-colors cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>
                            {renderFiltersContent(true)}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}
