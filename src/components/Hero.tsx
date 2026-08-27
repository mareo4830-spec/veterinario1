import { motion } from 'framer-motion';
import { Star, Phone, CalendarHeart, Heart, Sparkles } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/6235650/pexels-photo-6235650.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Veterinaria auscultando a un perro en la clínica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-2xl">
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-100 shadow-soft">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </span>
              <span className="text-sm font-bold text-slate-700">4.8 en Google</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-50 border border-brand-100">
              <Heart className="w-4 h-4 text-brand-600" fill="currentColor" />
              <span className="text-sm font-bold text-brand-700">Dirigido por mujeres</span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-800"
          >
            Cuidamos de tu mejor amigo con la{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-600">profesionalidad</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-200/60 -z-0 rounded-full" />
            </span>{' '}
            que exige y el cariño que merece.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl"
          >
            Centro veterinario de referencia en Huelva. Medicina integral, peluquería y tienda
            especializada.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-600 text-white font-bold text-base shadow-soft hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Nuestros Servicios
            </a>
            <a
              href="tel:959254222"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-brand-700 font-bold text-base border-2 border-brand-200 hover:border-brand-400 hover:bg-brand-50 transition-all duration-300"
            >
              <CalendarHeart className="w-5 h-5" />
              Pedir Cita
            </a>
          </motion.div>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex items-center gap-2 text-slate-500"
          >
            <Phone className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold">Urgencias: 959 25 42 22</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Descubre más</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-8 bg-gradient-to-b from-brand-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
