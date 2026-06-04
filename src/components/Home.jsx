import photo from '../assets/picme.png'

export default function Home() {
  return (
    <>
      <div className="sec-label">// Welcome to my Portfolio</div>
      <div className="home-hero">
        <div className="hero-avatar"><img src={photo} alt="Raen Clark" /></div>
        <div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Raen Clark<br /><span style={{ color: 'var(--purple)' }}>Lumacad</span>
          </h1>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'var(--text2)', marginBottom: '1.2rem' }}>
            BS Computer Science · UP Cebu · 3rd Year
          </div>
          <div className="looking-badge"><span className="dot-pulse" />Open to internship opportunities</div>
        </div>
      </div>
      <p style={{ fontSize: 15.5, color: 'var(--text2)', maxWidth: 580, lineHeight: 1.85, marginBottom: '1.8rem', borderLeft: '2px solid var(--purple-dark)', paddingLeft: '1.2rem' }}>
        Full-stack developer with a passion for building things — from web simulators and mobile RPG tools to strategy games. I thrive at the intersection of engineering and creative problem-solving.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
        <a href="mailto:rclumacad@up.edu.ph" className="chip">✉ rclumacad@up.edu.ph</a>
        <a href="https://github.com/rclumacad" target="_blank" rel="noreferrer" className="chip">⌥ github.com/rclumacad</a>
        <a href="https://linkedin.com/in/rclumacad2026" target="_blank" rel="noreferrer" className="chip">in linkedin/rclumacad2026</a>
        <span className="chip">📍 Cebu City</span>
      </div>
      <div className="stat-grid" style={{ maxWidth: 440 }}>
        {[['3rd','Year in CS'],['5+','Projects Built'],['10+','Technologies'],['∞','Curiosity']].map(([n,l]) => (
          <div key={l} className="stat-card"><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
        ))}
      </div>
    </>
  )
}