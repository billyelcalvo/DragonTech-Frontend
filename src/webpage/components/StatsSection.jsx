import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function StatsSection() {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const statsRef = useRef(null)

    const stats = [
        { value: "50K+", label: "Clientes Satisfechos", icon: "👥" },
        { value: "99%", label: "Tasa de Satisfacción", icon: "⭐" },
        { value: "24/7", label: "Soporte Técnico", icon: "💬" },
        { value: "500+", label: "Productos Tech", icon: "📦" },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            )

            gsap.fromTo(statsRef.current.children,
                { opacity: 0, y: 40, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-r from-yale-blue via-yale-blue to-jade-green relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div ref={headerRef} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 opacity-0">La Confianza de Miles</h2>
                    <p className="text-white/70 text-lg opacity-0">Números que hablan por sí solos</p>
                </div>

                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group opacity-0">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:scale-110">
                                <span className="text-3xl">{stat.icon}</span>
                            </div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-white/70 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
