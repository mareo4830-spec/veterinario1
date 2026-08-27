import { motion } from 'framer-motion';
import { DoorOpen, HeartHandshake, Layers } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/motion';

const values = [
  {
    icon: DoorOpen,
    title: 'Consultas Separadas',
    desc: 'Espacios independientes para perros y gatos. Menos estrés para tu mascota y una espera más tranquila.',
  },
  {
    icon: HeartHandshake,
    title: 'Trato Familiar',
    desc: 'La veterinaria Rocío y nuestra auxiliar Elena tratarán a tu peludo como si fuera suyo. Cercanía real en cada visita.',
  },
  {
    icon: Layers,
    title: 'Servicio Integral',
    desc: 'Clínica, peluquería y tienda, todo en un mismo lugar. Ahorra tiempo y ofrece a tu mascota una atención completa.',
  },
];

export default function Values() {
  return (
    <section id="valores" className="py-24 sm:py-32 bg-white">
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
            Por qué elegirnos
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight"
          >
            Una forma distinta de cuidar
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 text-lg text-slate-500 leading-relaxed">
            No somos una clínica más. Somos un equipo que ama a los animales y lo demuestra en
            cada detalle.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={scaleIn}
                custom={i}
                className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-10 text-center border border-slate-100 hover:shadow-card transition-shadow duration-500"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white mx-auto mb-7 shadow-soft">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
                <span className="absolute top-6 right-7 text-6xl font-extrabold text-brand-50 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
