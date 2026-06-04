const skillGroups = [
  {
    label: 'Languages',
    skills: ['C', 'C++', 'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    label: 'Frontend',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Mapbox', 'XML'],
  },
  {
    label: 'Backend & Data',
    skills: ['Node.js', 'SQLite', 'Room Database'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Android Studio', 'Git / GitHub', 'VS Code', 'QGIS', 'NetLogo'],
  },
  {
    label: 'Concepts & Domains',
    skills: [
      'Agent-Based Modelling',
      'Geographic Information Systems',
      'Data Structures',
      'Algorithms',
      'Software Engineering',
      'Natural Language Processing',
      'FSM Design',
      'Database Systems',
    ],
  },
]

// Simple bar-style proficiency for a few key languages (optional visual)
const proficiency = [
  { name: 'JavaScript / TypeScript', level: 88 },
  { name: 'Kotlin',                  level: 82 },
  { name: 'Java',                    level: 80 },
  { name: 'Python',                  level: 72 },
  { name: 'C / C++',                 level: 65 },
]

export default function Skills() {
  return (
    <>
      <div className="sec-label">// 03 · What I Know</div>
      <h2 className="sec-title">Technical Skills</h2>

      {/* Tag groups */}
      {skillGroups.map((group) => (
        <div key={group.label} className="skill-section">
          <div className="skill-section-label">{group.label}</div>
          <div className="skill-tags-row">
            {group.skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      ))}

      {/* Proficiency bars */}
      <div className="sec-label" style={{ marginTop: '2.5rem' }}>// Proficiency</div>
      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {proficiency.map((p) => (
          <div key={p.name}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: 'DM Mono, monospace', fontSize: 11,
              color: 'var(--text2)', marginBottom: '0.35rem',
            }}>
              <span>{p.name}</span>
              <span style={{ color: 'var(--purple)' }}>{p.level}%</span>
            </div>
            <div style={{
              height: 6, borderRadius: 99,
              background: 'var(--bg3)', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${p.level}%`,
                borderRadius: 99,
                background: 'linear-gradient(90deg, var(--purple-dark), var(--purple-light))',
                transition: 'width 0.8s ease',
              }} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}