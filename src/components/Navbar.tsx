import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué nosotros', href: '#valores' },
  { label: 'Opiniones', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft transition-transform duration-300 group-hover:rotate-6">
            <Heart className="w-5 h-5" fill="currentColor" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-extrabold text-base sm:text-lg tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}>
              Centro Veterinario
            </span>
            <span className="font-bold text-sm text-brand-600 tracking-wide">Odiel</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors duration-300 relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:959254222"
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm shadow-soft hover:bg-brand-700 hover:shadow-lg transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
          959 25 42 22
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-slate-100"
      >
        <ul className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:959254222"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 text-white font-bold shadow-soft"
            >
              <Phone className="w-4 h-4" />
              Llamar: 959 25 42 22
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
