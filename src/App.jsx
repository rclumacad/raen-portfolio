import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

const tabBgs = {
  home:      'rgba(127,119,221,0.04)',
  about:     'rgba(155,119,221,0.055)',
  projects:  'rgba(127,119,221,0.09)',
  skills:    'rgba(119,170,221,0.07)',
  education: 'rgba(170,136,204,0.06)',
  hobbies:   'rgba(119,187,170,0.06)',
  contact:   'rgba(204,136,119,0.06)',
}

const panels = { home: Home, about: About, projects: Projects, skills: Skills, education: Education, hobbies: Hobbies, contact: Contact }

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const ActivePanel = panels[activeTab]

  return (
    <div className="layout" onClick={() => setSettingsOpen(false)}>
      {/* Settings */}
      <button className="settings-btn" onClick={e => { e.stopPropagation(); setSettingsOpen(o => !o) }}>⚙</button>
      {settingsOpen && (
        <div className="settings-panel" onClick={e => e.stopPropagation()}>
          <div className="settings-label">Appearance</div>
          {['dark','light','black'].map(t => (
            <button key={t} className={`theme-btn ${theme === t ? 'active' : ''}`} onClick={() => { setTheme(t); setSettingsOpen(false) }}>
              <span className="theme-dot" style={{ background: t === 'dark' ? '#1F1F1E' : t === 'light' ? '#F5F4FF' : '#000', borderColor: t === 'light' ? '#7F77DD' : undefined }} />
              {t.charAt(0).toUpperCase() + t.slice(1)} Mode
            </button>
          ))}
        </div>
      )}

      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="main" style={{ background: tabBgs[activeTab] }}>
        <div className="content-area">
          <ActivePanel />
        </div>
      </main>
    </div>
  )
}