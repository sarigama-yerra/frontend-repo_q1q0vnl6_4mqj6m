import { Menu, Bell, Search, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-teal-200">
              <Menu size={20} />
            </button>
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00E5D9] to-cyan-500 shadow-[0_0_30px_rgba(0,229,217,0.65)]" />
              <span className="text-white font-semibold tracking-tight">NeonBoard</span>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-200/70" size={16} />
              <input
                className="w-72 pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 placeholder:text-teal-100/50 text-teal-50 focus:outline-none focus:ring-2 focus:ring-[#00E5D9]/60"
                placeholder="Search..."
              />
            </div>
            <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-teal-200 relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00E5D9] shadow-[0_0_10px_rgba(0,229,217,0.9)]" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
              <User className="text-teal-100" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
