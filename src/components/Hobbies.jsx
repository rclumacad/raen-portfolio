const hobbies = [
  {
    icon: '🎲',
    name: 'Tabletop RPGs',
    desc: 'Passionate about D&D — I even built an Android app to manage my sessions.',
  },
  {
    icon: '🎮',
    name: 'Game Development',
    desc: 'Love designing and building small games — from memory matching to Viking board games.',
  },
  {
    icon: '🧩',
    name: 'Strategy Games',
    desc: 'Fascinated by abstract strategy games with asymmetric mechanics and deep rule systems.',
  },
  {
    icon: '🗺️',
    name: 'GIS & Mapping',
    desc: 'Enjoy working with spatial data and visualizing real-world geography through QGIS and Mapbox.',
  },
  {
    icon: '🤖',
    name: 'Simulation & ABM',
    desc: 'Captivated by emergent behavior — how complex systems arise from simple rules.',
  },
  {
    icon: '📚',
    name: 'CS Theory',
    desc: 'Enjoy diving into algorithms, automata theory, and the mathematical foundations of computing.',
  },
  {
    icon: '🎨',
    name: 'UI Design',
    desc: 'Appreciate clean, intentional interfaces — design that serves function without sacrificing form.',
  },
  {
    icon: '☕',
    name: 'Late-Night Coding',
    desc: 'Most productive after midnight with a cup of coffee and a stubborn bug to chase down.',
  },
]

export default function Hobbies() {
  return (
    <>
      <div className="sec-label">// 05 · What I Do for Fun</div>
      <h2 className="sec-title">Hobbies & Interests</h2>

      <div className="hobby-grid">
        {hobbies.map((h) => (
          <div key={h.name} className="hobby-card">
            <span className="hobby-icon">{h.icon}</span>
            <div className="hobby-name">{h.name}</div>
            <div className="hobby-desc">{h.desc}</div>
          </div>
        ))}
      </div>
    </>
  )
}