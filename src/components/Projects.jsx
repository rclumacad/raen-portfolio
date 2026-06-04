const projects = [
  {
    name: 'EvacSim',
    stack: ['React','TypeScript','Mapbox','Agent-Based Modelling'],
    desc: ['Web-based evacuation simulator for modeling crowd movement and emergency exit behavior.','Heatmap visualization to analyze congestion, bottlenecks, and crowd density over time.','Configurable simulation with multiple exits, obstacles, and adjustable agent parameters.'],
    link: null,
  },
  {
    name: 'UPKeep',
    stack: ['HTML','CSS','JavaScript'],
    desc: ['Web-based lost and found platform for the UP Cebu community.','Categorized item listing, search, and verification features for secure item claiming.','Hash tables and relational database concepts for efficient item tracking.'],
    link: null,
  },
  {
    name: 'Monster Creator',
    stack: ['Android Studio','Kotlin','Room Database','XML'],
    desc: ['Android app for creating and organizing custom D&D monsters with local database storage.','Turn-based session tracking with initiative sorting and randomized dice rolling.','Dynamic UI with RecyclerView unit management and automated turn cycling.'],
    link: null,
  },
  {
    name: 'MemoryMatch Game',
    stack: ['Android Studio','Java','XML'],
    desc: ['4×4 memory matching game with card shuffling, scoring, and countdown timer.','Power-ups: See Through and Buy Time.','FSM-based game logic for matching, reshuffling, and state transitions.'],
    link: null,
  },
  {
    name: 'Hnefatafl Game',
    stack: ['Android Studio','Kotlin','XML'],
    desc: ['Pass-and-play two-player Android adaptation of the ancient Viking strategy board game.','Rook-style piece movement, custodian capture logic, and asymmetric win conditions.','Interactive UI with piece selection, valid move highlighting, and turn indicators.'],
    link: null,
  },
]

export default function Projects() {
  return (
    <>
      <div className="sec-label">// 02 · What I've Built</div>
      <h2 className="sec-title">Projects</h2>
      {projects.map(p => (
        <div key={p.name} className="card">
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.name}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.85rem' }}>
            {p.stack.map(s => <span key={s} className="skill-tag" style={{ fontSize: 10, padding: '0.18rem 0.5rem', background: 'rgba(127,119,221,0.1)', color: 'var(--purple-light)', border: '1px solid rgba(127,119,221,0.22)' }}>{s}</span>)}
          </div>
          <ul style={{ listStyle: 'none', color: 'var(--text2)', fontSize: 13.5, lineHeight: 1.75 }}>
            {p.desc.map((d, i) => (
              <li key={i} style={{ position: 'relative', paddingLeft: '1rem', marginBottom: '0.3rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--purple)', fontSize: 11 }}>→</span>{d}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}