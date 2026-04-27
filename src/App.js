import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const experiences = [
    {
      id: 1,
      company: 'Sonda / Bolsa de Comercio de Santiago',
      role: 'Especialista TI en Infraestructura y Continuidad Operativa',
      period: 'Actualidad',
      duration: 'Proyecto actual',
      current: true,
      description: 'Especialista en entornos de misión crítica y alta disponibilidad, responsable de garantizar la continuidad operativa de la infraestructura tecnológica en la Bolsa de Valores (nuam). Experto en resolución de incidentes complejos mediante soporte técnico avanzado, administración de sistemas y diagnóstico de hardware a nivel de componentes.',
      highlights: [
        'Soporte N1/N2 especializado en plataformas de trading y sistemas corporativos críticos',
        'Gestión de aplicativos críticos: BCS Desktop (Sebra) con configuraciones avanzadas de seguridad en Java',
        'Administración de conectividad ODBC para bases de datos HISBAS y RUEBAS en SQL Server',
        'Gestión de identidades y accesos (IAM) mediante Active Directory y Azure AD',
        'Administración de sesiones seguras mediante BeyondTrust (PAM) con WinSCP y PuTTY',
        'Troubleshooting avanzado de red LAN/VoIP y administración de switching Cisco',
        'Staging corporativo mediante Acronis y gestión de imágenes en estaciones de trabajo',
        'Diagnóstico experto de hardware con análisis termográfico a nivel de componente',
        'Gestión de tickets mediante Jira y Aranda con cumplimiento estricto de SLAs'
      ]
    },
    {
      id: 2,
      company: 'Gocar Ltda.',
      role: 'Especialista en soporte técnico',
      period: '2025 - Actualidad',
      duration: '3 meses',
      current: true,
      description: 'Soporte técnico especializado en la empresa Gocar Ltda.',
      highlights: [
        'Soporte técnico directo a usuarios finales',
        'Resolución de incidencias de hardware y software',
        'Mantenimiento preventivo y correctivo de equipos',
        'Gestión de tickets y atención al cliente',
        'Configuración de sistemas operativos y aplicaciones'
      ]
    },
    {
      id: 3,
      company: 'Sonda / Agrosuper',
      role: 'Especialista TI en Infraestructura y Continuidad Operativa',
      period: '2026 - 2026',
      duration: 'Proyecto finalizado',
      current: false,
      description: 'Gestión centralizada de operaciones TI para sucursales de Agrosuper a nivel nacional. Orquestación de incidentes mediante Aranda Service Desk, auditoría técnica de reportes de terreno y aseguramiento de calidad (QA) en el cierre de tickets.',
      highlights: [
        'Gestión centralizada de operaciones TI para sucursales a nivel nacional',
        'Orquestación de incidentes mediante Aranda Service Desk',
        'Auditoría técnica de reportes de terreno',
        'Aseguramiento de calidad (QA) en el cierre de tickets',
        'Staging y aprovisionamiento de hardware (maquetación y mantenimiento)',
        'Garantizar la continuidad operativa en regiones'
      ]
    },
    {
      id: 4,
      company: 'Banco Falabella',
      role: 'Soporte TI Microinformático',
      period: '2026 - 2026',
      duration: '2 meses',
      current: false,
      description: 'Provisión y despliegue técnico de estaciones de trabajo en entorno bancario.',
      highlights: [
        'Aprovisionamiento de sistemas con imágenes corporativas personalizadas',
        'Integración de equipos al dominio corporativo',
        'Configuración de conectividad de red (LAN/Wi-Fi)',
        'Instalación de drivers específicos y aplicaciones críticas',
        'Soporte preventivo y correctivo de hardware'
      ]
    },
    {
      id: 5,
      company: 'Psys',
      role: 'Programador Jr',
      period: '2025 - 2025',
      duration: '3 meses',
      current: false,
      description: 'Desarrollo Backend Jr. con Node.js, TypeScript y tecnologías modernas.',
      highlights: [
        'Desarrollo y mantenimiento de aplicaciones web',
        'Creación y optimización de APIs',
        'Integración de bases de datos',
        'Implementación de buenas prácticas de programación',
        'Trabajo colaborativo con equipos de frontend'
      ]
    },
    {
      id: 6,
      company: 'Nexxos Chile',
      role: 'Soporte Técnico',
      period: '2024 - 2025',
      duration: '1 año 1 mes',
      current: false,
      description: 'Atención técnica a clientes internos y externos, gestión de incidencias tecnológicas.',
      highlights: [
        'Recepción, gestión y resolución de tickets de soporte',
        'Atención técnica a clientes internos y externos',
        'Administración en cPanel',
        'Instalación y configuración de certificados SSL',
        'Configuración de correos corporativos',
        'Manejo de sistema ERP Odoo'
      ]
    }
  ];

  const skills = [
    {
      category: 'Lenguajes',
      items: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Frameworks',
      items: ['React', 'Node.js', 'Django', 'Express']
    },
    {
      category: 'Bases de Datos',
      items: ['MySQL', 'SQL Server', 'MongoDB']
    },
    {
      category: 'Herramientas',
      items: ['Git', 'cPanel', 'Odoo ERP', 'Aranda', 'Windows Server', 'Jira']
    },
    {
      category: 'Infraestructura & Seguridad',
      items: ['Active Directory', 'Azure AD', 'BeyondTrust', 'Acronis', 'Cisco Switching']
    }
  ];

  const education = [
    {
      institution: 'Instituto Técnico Profesional Duoc UC',
      degree: 'Ingeniería en Informática',
      period: '2023 - Actual',
      status: 'En curso'
    },
    {
      institution: 'Liceo Industrial De Electrotecnia Ramon Barros Luco',
      degree: 'Enseñanza Media y Técnica en Electrónica',
      period: '2019 - 2022',
      status: 'Completado'
    }
  ];

  const certifications = [
    'Programación de Software (Python / JavaScript / HTML / CSS)',
    'Análisis y desarrollo de modelos de datos (Django / SQL Server / MySQL)',
    'Calidad de software'
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${isLoaded ? 'loaded' : ''}`}>
        <div className="header-content">
          <div className="title-wrapper">
            <h1 className="main-title">Matias Villalobos</h1>
            <div className="title-line"></div>
          </div>
          <p className="subtitle">Estudiante de Ingeniería en Informática</p>
          <p className="role">Especialista TI en Infraestructura | Desarrollador Fullstack</p>
          
          <div className="social-links">
            <a 
              href="https://github.com/Lexikolds" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/matias-villalobos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`nav ${isLoaded ? 'loaded' : ''}`}>
        <div className="nav-container">
          <button
            className={`nav-btn ${activeTab === 'inicio' ? 'active' : ''}`}
            onClick={() => setActiveTab('inicio')}
          >
            Inicio
          </button>
          <button
            className={`nav-btn ${activeTab === 'experiencia' ? 'active' : ''}`}
            onClick={() => setActiveTab('experiencia')}
          >
            Experiencia
          </button>
          <button
            className={`nav-btn ${activeTab === 'habilidades' ? 'active' : ''}`}
            onClick={() => setActiveTab('habilidades')}
          >
            Habilidades
          </button>
          <button
            className={`nav-btn ${activeTab === 'educacion' ? 'active' : ''}`}
            onClick={() => setActiveTab('educacion')}
          >
            Educación
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`main-content ${isLoaded ? 'loaded' : ''}`}>
        {/* Inicio Tab */}
        {activeTab === 'inicio' && (
          <div className="tab-content">
            <section className="about-section">
              <div className="section-card">
                <div className="card-header">
                  <span className="card-icon">💻</span>
                  <h2>Sobre Mí</h2>
                </div>
                <p className="card-text">
                  Especialista TI en entornos de misión crítica con experiencia en infraestructura, continuidad operativa 
                  y desarrollo de software. Enfocado en garantizar alta disponibilidad de sistemas financieros y plataformas 
                  críticas mediante soporte técnico avanzado, administración de infraestructura y diagnóstico de hardware a 
                  nivel de componentes. Estudiante de Ingeniería en Informática con sólida formación en programación y tecnologías de la información.
                </p>
              </div>

              <div className="section-card">
                <div className="card-header">
                  <span className="card-icon">📧</span>
                  <h2>Contacto</h2>
                </div>
                <div className="contact-list">
                  <div className="contact-item">
                    <span>📧</span>
                    <a href="mailto:matiasvillalobosperez02@gmail.com">
                      matiasvillalobosperez02@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <span>📍</span>
                    <span>La Florida, Santiago, Chile</span>
                  </div>
                </div>
              </div>

              <div className="section-card">
                <div className="card-header">
                  <span className="card-icon">🎓</span>
                  <h2>Certificaciones</h2>
                </div>
                <ul className="cert-list">
                  {certifications.map((cert, index) => (
                    <li key={index} className="cert-item">
                      <span>▸</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* Experiencia Tab */}
        {activeTab === 'experiencia' && (
          <div className="tab-content">
            <div className="experience-list">
              {experiences.map((exp) => (
                <article key={exp.id} className="exp-card">
                  <div className="exp-header">
                    <div className="exp-title-section">
                      <h3 className="exp-company">{exp.company}</h3>
                      <p className="exp-role">{exp.role}</p>
                    </div>
                    <div className="exp-meta">
                      <div className="exp-period">
                        <span>📅</span>
                        <span>{exp.period}</span>
                      </div>
                      {exp.current && <span className="badge-current">Actual</span>}
                    </div>
                  </div>
                  <p className="exp-description">{exp.description}</p>
                  <ul className="exp-list">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Habilidades Tab */}
        {activeTab === 'habilidades' && (
          <div className="tab-content">
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <span className="skill-icon">{index === 0 ? '⚡' : index === 1 ? '🔧' : index === 2 ? '💾' : '🛠️'}</span>
                    <h3>{skillGroup.category}</h3>
                  </div>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Educación Tab */}
        {activeTab === 'educacion' && (
          <div className="tab-content">
            <div className="education-list">
              {education.map((edu, index) => (
                <article key={index} className="edu-card">
                  <div className="edu-icon-wrapper">
                    <span className="edu-emoji">{index === 0 ? '🎓' : '📚'}</span>
                  </div>
                  <div className="edu-content">
                    <h3 className="edu-institution">{edu.institution}</h3>
                    <p className="edu-degree">{edu.degree}</p>
                    <div className="edu-footer">
                      <div className="edu-period">
                        <span>📅</span>
                        <span>{edu.period}</span>
                      </div>
                      <span className={`badge-status ${edu.status === 'En curso' ? 'active' : ''}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Matias Villalobos</p>
        <p className="footer-tech">Desarrollado con React</p>
      </footer>
    </div>
  );
}

export default App;