import { motion } from 'framer-motion'
import { Activity, Users, TrendingUp } from 'lucide-react'

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } })
}

export default function Stats() {
  const items = [
    { icon: Activity, label: 'Active Sessions', value: '1,248', change: '+12%' },
    { icon: Users, label: 'New Users', value: '537', change: '+5.3%' },
    { icon: TrendingUp, label: 'Conversion', value: '3.8%', change: '+0.8%' },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,229,217,0.08)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={card}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5D9] to-cyan-500 flex items-center justify-center text-slate-900 shadow-[0_0_30px_rgba(0,229,217,0.6)]">
                <item.icon size={18} />
              </div>
              <div>
                <p className="text-teal-100/70 text-sm">{item.label}</p>
                <div className="flex items-end gap-2">
                  <h3 className="text-2xl font-bold text-white">{item.value}</h3>
                  <span className="text-xs text-emerald-300/90">{item.change}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
