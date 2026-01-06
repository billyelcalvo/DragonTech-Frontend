import { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

const categories = [
    { id: 'all', name: 'Todos', icon: '🔥' },
    { id: 'smartphones', name: 'Smartphones', icon: '📱' },
    { id: 'laptops', name: 'Laptops', icon: '💻' },
    { id: 'audio', name: 'Audio', icon: '🎧' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'accessories', name: 'Accesorios', icon: '⌚' },
    { id: 'wearables', name: 'Wearables', icon: '⌚' },
]

const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        category: 'smartphones',
        price: 1199,
        originalPrice: 1299,
        description: 'Chip A17 Pro, Titanio, Cámara 48MP',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
        isNew: true,
        discount: 10,
    },
    {
        id: 2,
        name: 'MacBook Air M3',
        category: 'laptops',
        price: 1299,
        originalPrice: 1299,
        description: '15" Liquid Retina, 18h batería',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        isNew: true,
        discount: 0,
    },
    {
        id: 3,
        name: 'AirPods Pro 2',
        category: 'audio',
        price: 212,
        originalPrice: 249,
        description: 'Cancelación de ruido adaptativa',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
        isNew: false,
        discount: 15,
    },
    {
        id: 4,
        name: 'PlayStation 5',
        category: 'gaming',
        price: 449,
        originalPrice: 499,
        description: 'Edición Digital, SSD Ultra Rápido',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
        isNew: false,
        discount: 10,
    },
    {
        id: 5,
        name: 'Samsung Galaxy S24 Ultra',
        category: 'smartphones',
        price: 1099,
        originalPrice: 1199,
        description: 'Galaxy AI, S Pen integrado',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
        isNew: true,
        discount: 8,
    },
    {
        id: 6,
        name: 'Sony WH-1000XM5',
        category: 'audio',
        price: 299,
        originalPrice: 349,
        description: 'Mejor cancelación de ruido',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
        isNew: false,
        discount: 14,
    },
    {
        id: 7,
        name: 'Apple Watch Ultra 2',
        category: 'wearables',
        price: 799,
        originalPrice: 799,
        description: 'GPS, 36h batería, Titanio',
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
        isNew: true,
        discount: 0,
    },
    {
        id: 8,
        name: 'ASUS ROG Laptop',
        category: 'laptops',
        price: 1899,
        originalPrice: 2099,
        description: 'RTX 4080, i9 14900H, 32GB RAM',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
        isNew: false,
        discount: 10,
    },
    {
        id: 9,
        name: 'Nintendo Switch OLED',
        category: 'gaming',
        price: 349,
        originalPrice: 349,
        description: 'Pantalla OLED 7", Dock mejorado',
        image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop',
        isNew: false,
        discount: 0,
    },
]

export function ProductsSection() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const sidebarRef = useRef(null)
    const productsGridRef = useRef(null)


    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(headerRef.current.children,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            )


            gsap.fromTo(sidebarRef.current.querySelectorAll('.category-item'),
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sidebarRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            )


            gsap.fromTo(productsGridRef.current.querySelectorAll('.product-card'),
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: productsGridRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="products" className="py-24 bg-gradient-to-b from-white to-ghost-white relative overflow-hidden">
            { }
            <div className="absolute top-40 right-0 w-96 h-96 bg-jade-green/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-bright-sky/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                { }
                <div ref={headerRef} className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-jade-green/10 text-jade-green rounded-full text-sm font-semibold mb-4 opacity-0">
                        Catálogo de Productos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-yale-blue mb-4 opacity-0">
                        Explora Nuestra <span className="bg-gradient-to-r from-jade-green to-bright-sky bg-clip-text text-transparent">Tecnología</span>
                    </h2>
                    <p className="text-grey text-lg max-w-2xl mx-auto mb-8 opacity-0">
                        Encuentra los mejores productos electrónicos con ofertas exclusivas.
                    </p>

                    { }
                    <div className="max-w-xl mx-auto opacity-0">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-jade-green to-bright-sky rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative flex items-center bg-white rounded-2xl shadow-lg border border-grey/10">
                                <div className="pl-5 text-grey">
                                    <SearchIcon />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full py-4 px-4 bg-transparent text-yale-blue placeholder-grey/60 focus:outline-none text-lg"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="pr-5 text-grey hover:text-yale-blue transition-colors"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                { }
                <div className="flex flex-col lg:flex-row gap-8">
                    { }
                    <aside ref={sidebarRef} className="lg:w-72 flex-shrink-0">
                        <div className="sticky top-24">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-jade-green/20 to-bright-sky/20 rounded-3xl blur opacity-50"></div>
                                <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50">
                                    <h3 className="text-lg font-bold text-yale-blue mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-gradient-to-br from-jade-green to-bright-sky rounded-lg flex items-center justify-center text-white text-sm">☰</span>
                                        Categorías
                                    </h3>
                                    <nav className="space-y-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`category-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${selectedCategory === category.id
                                                    ? 'bg-gradient-to-r from-jade-green to-bright-sky text-white shadow-lg shadow-jade-green/30'
                                                    : 'text-grey hover:text-yale-blue hover:bg-ghost-white'
                                                    }`}
                                            >
                                                <span className="text-xl">{category.icon}</span>
                                                <span className="font-medium">{category.name}</span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </aside>

                    { }
                    <main ref={productsGridRef} className="flex-1">
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-grey text-lg">No se encontraron productos.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                    className="mt-4 text-jade-green hover:underline"
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="product-card group relative opacity-0">
                                        { }
                                        <div className="absolute -inset-0.5 bg-gradient-to-br from-jade-green/20 to-bright-sky/20 rounded-3xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>

                                        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-white/50 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                            { }
                                            <div className="relative h-48 bg-gradient-to-br from-ghost-white to-white overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                { }
                                                <div className="absolute top-3 left-3 flex gap-2">
                                                    {product.isNew && (
                                                        <span className="px-3 py-1 bg-jade-green text-white text-xs font-bold rounded-full shadow-lg">
                                                            NUEVO
                                                        </span>
                                                    )}
                                                    {product.discount > 0 && (
                                                        <span className="px-3 py-1 bg-gradient-to-r from-yale-blue to-bright-sky text-white text-xs font-bold rounded-full shadow-lg">
                                                            -{product.discount}%
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            { }
                                            <div className="p-5">
                                                <h4 className="text-lg font-bold text-yale-blue mb-1 group-hover:text-jade-green transition-colors">
                                                    {product.name}
                                                </h4>
                                                <p className="text-grey text-sm mb-4 line-clamp-2">
                                                    {product.description}
                                                </p>

                                                { }
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-2xl font-black text-yale-blue">
                                                        ${product.price}
                                                    </span>
                                                    {product.discount > 0 && (
                                                        <span className="text-grey line-through text-sm">
                                                            ${product.originalPrice}
                                                        </span>
                                                    )}
                                                </div>

                                                { }
                                                <button className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-jade-green to-bright-sky text-white font-semibold rounded-xl shadow-lg shadow-jade-green/30 hover:shadow-xl hover:shadow-jade-green/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                                                    <CartIcon />
                                                    Agregar al Carrito
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </section>
    )
}
