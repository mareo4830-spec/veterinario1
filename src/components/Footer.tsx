import { Heart, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <Heart className="w-5 h-5" fill="currentColor" />
            </span>
            <div className="leading-none">
              <p className="font-extrabold text-white text-base">Centro Veterinario</p>
              <p className="font-bold text-brand-400 text-sm">Odiel · Huelva</p>
            </div>
          </div>

          <a
            href="tel:959254222"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm hover:bg-brand-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            959 25 42 22
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Centro Veterinario Odiel. Hecho con cariño para los
            peludos de Huelva.
          </p>
        </div>
      </div>
    </footer>
  );
}
