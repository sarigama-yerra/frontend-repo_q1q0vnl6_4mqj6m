import { motion } from 'framer-motion'
import { BarChart2, Cpu, Sparkles, Settings } from 'lucide-react'

export default function Content() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_50px_rgba(0,229,217,0.08)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00E5D9] to-cyan-500 flex items-center justify-center text-slate-900 shadow-[0_0_30px_rgba(0,229,217,0.6)]">
              <BarChart2 size={18} />
            </div>
            <h3 className="text-white font-semibold">Realtime Metrics</h3>
          </div>
          <div className="h-56 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00E5D9] to-cyan-500 flex items-center justify-center text-slate-900 shadow-[0_0_30px_rgba(0,229,217,0.6)]">
              <Cpu size={18} />
            </div>
            <h3 className="text-white font-semibold">AI Engine</h3>
          </div>
          <p className="text-teal-100/70 text-sm">Plug your models into a beautiful UI with delightful micro animations and glow.</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-teal-100/60">
            <Sparkles size={14} className="text-[#00E5D9]" /> Optimized rendering
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00E5D9] to-cyan-500 flex items-center justify-center text-slate-900 shadow-[0_0_30px_rgba(0,229,217,0.6)]">
              <Settings size={18} />
            </div>
            <h3 className="text-white font-semibold">Controls</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <button key={i} className="h-20 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:from-white/20 hover:to-white/10 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
