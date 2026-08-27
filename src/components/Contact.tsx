import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Heart, Rainbow } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-slate-50">
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
            Contacto y Ubicación
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight"
          >
            Estamos aquí para ti y tu mascota
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Info card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-100 flex flex-col"
          >
            <div className="space-y-7 flex-1">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600">
                  <MapPin className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Dirección</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Av. Guatemala, 44, 21003 Huelva
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600">
                  <Phone className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Teléfono</h3>
                  <a
                    href="tel:959254222"
                    className="text-slate-500 leading-relaxed hover:text-brand-600 transition-colors font-semibold"
                  >
                    959 25 42 22
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600">
                  <Clock className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Horario</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Mañanas: hasta las 14:00<br />
                    Tardes: a partir de las 17:00
                  </p>
                </div>
              </div>
            </div>
            {/* CTA */}
            <a
              href="tel:959254222"
              className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-600 text-white font-bold text-base shadow-soft hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Pedir Cita Ahora
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-card border border-slate-100 min-h-[400px] relative bg-slate-100"
          >
            <iframe
              title="Ubicación Centro Veterinario Odiel"
              src="https://www.google.com/maps?q=Av.+Guatemala,+44,+21003+Huelva&output=embed"
              className="w-full h-full absolute inset-0"
              style={{ border: 0, minHeight: 400 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
