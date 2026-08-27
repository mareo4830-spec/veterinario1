import { motion } from 'framer-motion';
import { Stethoscope, Scissors, ShoppingBag, Microscope, Syringe, PawPrint } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const services = [
  {
    icon: Stethoscope,
    title: 'Medicina y Consultas',
    desc: 'Diagnóstico, revisiones y seguimiento personalizado con la tecnología más avanzada.',
  },
  {
    icon: Syringe,
    title: 'Vacunación y Prevención',
    desc: 'Programas de vacunación y desparasitación a medida para cada etapa de la vida.',
  },
  {
    icon: Scissors,
    title: 'Peluquería Canina y Felina',
    desc: 'Baño, corte y estética con productos de alta calidad en un entorno relajado.',
  },
  {
    icon: ShoppingBag,
    title: 'Tienda Especializada',
    desc: 'Piensos, complementos y accesorios seleccionados por nuestros profesionales.',
  },
  {
    icon: Microscope,
    title: 'Análisis y Diagnóstico',
    desc: 'Laboratorio propio para resultados rápidos y decisiones clínicas precisas.',
  },
  {
    icon: PawPrint,
    title: 'Cirugía y Hospitalización',
    desc: 'Quirófano equipado y boxes de hospitalización con monitorización continua.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-slate-50">
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
            Nuestros Servicios
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight"
          >
            Todo lo que tu mascota necesita, bajo un mismo techo
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 text-lg text-slate-500 leading-relaxed">
            Ofrecemos una atención integral que combina medicina, estética y productos
            especializados para el bienestar completo de tu peludo.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className="group bg-white rounded-3xl p-8 shadow-card border border-slate-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-500">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
