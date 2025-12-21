export function Footer() {
    const footerIcons = [
        {
            title: "Visit DragonShop Instagram",
            aria: "DragonShop Instagram",
            icon: "/public/icons_plattforms.svg#instagram"
        },
        {
            title: "Visit DragonShop Youtube",
            aria: "DragonShop Youtube",
            icon: "/public/icons_plattforms.svg#youtube"
        },
        {
            title: "Visit DragonShop Linkedin",
            aria: "DragonShop Linkedin",
            icon: "/public/icons_plattforms.svg#linkedin"
        }
    ]

    return (
        <footer className="bg-yale-blue relative overflow-hidden">

            <div className="h-1 bg-gradient-to-r from-jade-green via-bright-sky to-jade-green"></div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-jade-green to-bright-sky rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">M</span>
                            </div>
                            <span className="text-xl font-bold text-white">Dragon-Tech</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Tu tienda de tecnología con los mejores productos y el mejor servicio.
                        </p>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold mb-4">Tienda</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Nuevos Ingresos</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Más Vendidos</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Ofertas</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Categorías</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Nosotros</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Trabaja con Nosotros</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Contacto</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            {footerIcons.map((iconItem) =>
                                <a href="#" aria-label={iconItem.aria} title={iconItem.title} className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jade-green transition-transform hover:scale-110">
                                    <svg className="size-6">
                                        <use xlinkHref={iconItem.icon}></use>
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>


                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">© 2024 DragonTech. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Política de Privacidad</a>
                        <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
