export default function About() {
  const stats = [
    ['3rd', 'Year in CS at UP Cebu'],
    ['5+',  'Projects Shipped'],
    ['10+', 'Languages & Tools'],
    ['∞',   'Curiosity'],
  ]

  const timeline = [
    { year: 'Mar 2015',        text: 'Graduated from Lazi Central Elementary School, Lazi, Siquijor.' },
    { year: 'May 2021',        text: 'Graduated from PSHS–Central Visayas Campus with honors in STEM.' },
    { year: '2021 – Present',  text: 'Enrolled in BS Computer Science at the University of the Philippines Cebu.' },
    { year: '2023',            text: 'Started building full-stack web and Android projects using React, TypeScript, Kotlin, and Java.' },
    { year: '2024',            text: 'Developed EvacSim — a web-based agent-based evacuation simulator with heatmap visualization.' },
    { year: 'Expected Jul 2027', text: 'Bachelor of Science in Computer Science graduation.' },
  ]

  return (
    <>
      <div className="sec-label">// 01 · Who I Am</div>
      <h2 className="sec-title">About Me</h2>

      <div className="looking-badge">
        <span className="dot-pulse" />
        Open to internship opportunities
      </div>

      {/* Stats Grid */}
      <div className="stat-grid">
        {stats.map(([num, label]) => (
          <div key={label} className="stat-card">
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <p style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.85, marginBottom: '1.4rem' }}>
        I'm a third-year BS Computer Science student at the University of the
        Philippines Cebu with experience spanning the full stack — from React and
        Next.js on the web to Kotlin and Java on Android. My projects range from a
        crowd evacuation simulator to an Android app for managing D&amp;D sessions.
      </p>
      <p style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.85, marginBottom: '2rem' }}>
        I'm seeking an internship where I can apply my skills in real-world systems,
        explore new technologies, and grow as an engineer. I care about code that is
        readable, purposeful, and elegant.
      </p>

      {/* Timeline */}
      <div className="sec-label" style={{ marginTop: '1.5rem' }}>// Journey</div>
      <div className="timeline">
        {timeline.map((item) => (
          <div key={item.year} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-text">{item.text}</div>
          </div>
        ))}
      </div>
    </>
  )
}