// Inline SVG logos as components so we avoid external image deps
function UPCebuLogo() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="34" height="34">
      <circle cx="50" cy="50" r="46" fill="#7b1113" stroke="#fff" strokeWidth="2" />
      <text x="50" y="38" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="serif">UP</text>
      <text x="50" y="58" textAnchor="middle" fill="#f5c518" fontSize="10" fontFamily="sans-serif" fontWeight="bold">CEBU</text>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#f5c518" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  )
}

function PSHSLogo() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="34" height="34">
      <circle cx="50" cy="50" r="46" fill="#003087" stroke="#fff" strokeWidth="2" />
      <text x="50" y="36" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="serif">PSHS</text>
      <text x="50" y="52" textAnchor="middle" fill="#FFD700" fontSize="8" fontFamily="sans-serif">CVISC</text>
      <circle cx="50" cy="66" r="8" fill="none" stroke="#FFD700" strokeWidth="1.5" />
      <text x="50" y="70" textAnchor="middle" fill="#FFD700" fontSize="9">✦</text>
    </svg>
  )
}

function LaziLogo() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="34" height="34">
      <circle cx="50" cy="50" r="46" fill="#228B22" stroke="#fff" strokeWidth="2" />
      <text x="50" y="38" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">LAZI</text>
      <text x="50" y="54" textAnchor="middle" fill="#FFD700" fontSize="8" fontFamily="sans-serif">CENTRAL ES</text>
      <text x="50" y="68" textAnchor="middle" fill="white" fontSize="14">🌿</text>
    </svg>
  )
}

const schools = [
  {
    Logo: UPCebuLogo,
    school: 'University of the Philippines Cebu',
    degree: 'BS Computer Science',
    year: 'Expected Jul 2027',
    honor: null,
    coursework: [
      'Data Structures',
      'File Processing & Database Systems',
      'Agent-Based Modeling',
      'Natural Language Processing',
      'Software Engineering',
      'Algorithms',
      'Geographic Information Systems',
      'Operating Systems',
    ],
  },
  {
    Logo: PSHSLogo,
    school: 'Philippine Science High School',
    degree: 'STEM · Central Visayas Campus',
    year: 'Graduated May 2021',
    honor: '🏅 With Honor',
    coursework: null,
  },
  {
    Logo: LaziLogo,
    school: 'Lazi Central Elementary School',
    degree: 'Elementary Education · Lazi, Siquijor',
    year: 'Graduated Mar 2015',
    honor: null,
    coursework: null,
  },
]

export default function Education() {
  return (
    <>
      <div className="sec-label">// 04 · Where I Studied</div>
      <h2 className="sec-title">Education</h2>

      {schools.map((s) => (
        <div key={s.school} className="card">
          <div className="edu-header">
            {/* Logo */}
            <div className="edu-logo">
              <s.Logo />
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="edu-school">{s.school}</div>
              <div className="edu-degree">{s.degree}</div>
            </div>

            {/* Year badge */}
            <span className="edu-year">{s.year}</span>
          </div>

          {/* Honor */}
          {s.honor && (
            <div className="edu-honor">{s.honor}</div>
          )}

          {/* Coursework */}
          {s.coursework && (
            <>
              <div style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 9,
                color: 'var(--text3)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}>
                Relevant Coursework
              </div>
              <div className="skill-tags-row">
                {s.coursework.map((c) => (
                  <span key={c} className="skill-tag">{c}</span>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </>
  )
}