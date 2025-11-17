import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Content from './components/Content'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#051C2C]">
      {/* ambient background gradients and 3D glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, rgba(0,229,217,0.25) 0%, rgba(0,229,217,0.05) 60%, transparent 70%)' }} />
        <div className="absolute -bottom-24 -right-24 w-[46rem] h-[46rem] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(0,229,217,0.18) 0%, rgba(0,229,217,0.05) 60%, transparent 70%)' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <Content />

      {/* subtle star field */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, transparent), radial-gradient(1px 1px at 120px 80px, #fff, transparent), radial-gradient(1px 1px at 220px 130px, #fff, transparent), radial-gradient(1px 1px at 320px 30px, #fff, transparent)' }} />
    </div>
  )
}

export default App
