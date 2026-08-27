import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const testimonials = [
  {
    text: 'Son verdaderos profesionales de los animales. Tan pronto como vieron a mi mascota, dieron con lo que tenía. Muy, pero que muy bien.',
    author: 'MJ BO',
  },
  {
    text: 'Tenemos dos gatos y los supervisan con detalle y cariño. Hacen un buen seguimiento. Happy y Liber os dan las gracias.',
    author: 'Jose Luis T.',
  },
  {
    text: 'Trato exquisito, la veterinaria Rocío fantástica, y Elena muy cariñosa. Altamente recomendable.',
    author: 'Cliente satisfecho',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-bold tracking-wide mb-4"
          >
            Opiniones reales
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight"
          >
            Lo que dicen de nosotros
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-5 flex items-center justify-center gap-2">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400" fill="currentColor" />
              ))}
            </span>
            <span className="text-lg font-bold text-slate-700">4.8</span>
            <span className="text-slate-400 font-semibold">· Google Reviews</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.author}
              variants={fadeInUp}
              className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-500"
            >
              <Quote className="w-10 h-10 text-brand-200 mb-5" fill="currentColor" />
              <blockquote className="text-slate-600 leading-relaxed text-[1.05rem]">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-600 text-white font-bold text-sm">
                  {t.author.charAt(0)}
                </span>
                <div>
                  <p className="font-bold text-slate-800">{t.author}</p>
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
                    ))}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
