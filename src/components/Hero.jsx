import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[64vh] sm:h-[70vh] lg:h-[76vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,217,0.08),transparent_60%)]" />
        <div className="absolute -inset-40 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,229,217,0.15),transparent_30%)] animate-pulse" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-xl mb-4">
              <span className="h-2 w-2 rounded-full bg-[#00E5D9] shadow-[0_0_12px_rgba(0,229,217,1)]" />
              <span className="text-xs text-teal-100">Realtime glassmorphic 3D experience</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_40px_rgba(0,229,217,0.35)]">
              Futuristic Dashboard
            </h1>
            <p className="mt-4 text-teal-100/80 text-lg">
              A modern, animated control center with glass panels, neon glow, and playful micro-interactions.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="px-5 py-2 rounded-xl bg-[#00E5D9] text-slate-900 font-semibold shadow-[0_8px_30px_rgba(0,229,217,0.5)] hover:shadow-[0_10px_40px_rgba(0,229,217,0.7)] transition-shadow">
                Get Started
              </button>
              <button className="px-5 py-2 rounded-xl bg-white/10 border border-white/10 text-teal-50 hover:bg-white/15">
                Live Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
