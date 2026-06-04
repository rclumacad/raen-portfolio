import photo from '../assets/picme.png'

const tabs = [
  { id: 'home',      icon: '🏠', label: 'Home' },
  { id: 'about',     icon: '👤', label: 'About Me' },
  { id: 'projects',  icon: '🛠', label: 'Projects' },
  { id: 'skills',    icon: '⚡', label: 'Skills' },
  { id: 'education', icon: '🎓', label: 'Education' },
  { id: 'hobbies',   icon: '🎲', label: 'Hobbies' },
  { id: 'contact',   icon: '✉',  label: 'Contact' },
]

export default function Sidebar({ activeTab, onTabChange }) {
  const compact = activeTab !== 'home'

  return (
    <aside className="sidebar">
      <div className={`profile-area ${compact ? 'compact' : ''}`}>
        <div className="profile-top">
          <div className={`avatar ${compact ? 'compact' : ''}`}>
            <img src={photo} alt="Raen Clark Lumacad" />
          </div>
          <div>
            <div className={`profile-name ${compact ? 'compact' : ''}`}>Raen Clark<br />Lumacad</div>
            <div className="profile-sub">BS CS · UP Cebu</div>
          </div>
        </div>
        <p className={`profile-bio ${compact ? 'compact' : ''}`}>
          Full-stack developer with a passion for building things — from web simulators and mobile RPG tools to strategy games.
        </p>
        <div className={`profile-links ${compact ? 'compact' : ''}`}>
          <a href="mailto:rclumacad@up.edu.ph" className="plink"><span className="plink-icon">✉</span>rclumacad@up.edu.ph</a>
          <a href="https://github.com/rclumacad" className="plink" target="_blank" rel="noreferrer"><span className="plink-icon">⌥</span>github.com/rclumacad</a>
          <a href="https://linkedin.com/in/rclumacad2026" className="plink" target="_blank" rel="noreferrer"><span className="plink-icon">in</span>linkedin/rclumacad2026</a>
          <span className="plink"><span className="plink-icon">📍</span>Cebu City, Philippines</span>
          <span className="plink"><span className="plink-icon">📞</span>+63 966 965 9875</span>
        </div>
      </div>
      <nav className="nav-tabs">
        <div className="nav-label">Navigation</div>
        {tabs.map(t => (
          <button key={t.id} className={`tab-btn ${activeTab === t.id ? 'active' : ''}`} onClick={() => onTabChange(t.id)}>
            <span className="tab-icon">{t.icon}</span>{t.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}