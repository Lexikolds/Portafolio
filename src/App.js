import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Code2, Terminal, Database, Server, Cpu, Monitor, Github, Linkedin, ExternalLink, ChevronRight, Calendar, Briefcase } from 'lucide-react';
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
      company: 'Gocar Ltda.',
      role: 'Especialista en soporte técnico',
      period: 'Dic. 2025 - Actualidad',
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
      id: 2,
      company: 'Banco Falabella',
      role: 'Soporte TI Microinformático',
      period: 'Ene. 2026 - Feb. 2026',
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
      id: 3,
      company: 'Psys',
      role: 'Programador Jr',
      period: 'Oct. 2025 - Dic. 2025',
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
      id: 4,
      company: 'Nexxos Chile',
      role: 'Soporte Técnico',
      period: 'Dic. 2024 - Dic. 2025',
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
      icon: Code2,
      items: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Frameworks',
      icon: Terminal,
      items: ['React', 'Node.js', 'Django', 'Express']
    },
    {
      category: 'Bases de Datos',
      icon: Database,
      items: ['MySQL', 'SQL Server', 'MongoDB']
    },
    {
      category: 'Herramientas',
      icon: Server,
      items: ['Git', 'cPanel', 'Odoo ERP', 'Windows Server']
    }
  ];

  const education = [
    {
      institution: 'Instituto Técnico Profesional Duoc UC',
      degree: 'Ingeniería en Informática',
      period: '2023 - Actual',
      status: 'En curso',
      icon: Cpu
    },
    {
      institution: 'Liceo Industrial De Electrotecnia Ramon Barros Luco',
      degree: 'Enseñanza Media y Técnica en Electrónica',
      period: '2019 - 2022',
      status: 'Completado',
      icon: Monitor
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
          <p className="role">Desarrollador | Soporte Técnico Especializado</p>
          
          <div className="social-links">
            <a 
              href="https://github.com/Lexikolds" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/matias-villalobos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
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
                  <Terminal className="card-icon" size={24} />
                  <h2>Sobre Mí</h2>
                </div>
                <p className="card-text">
                  Estudiante capacitado en informática con experiencia en soporte técnico, backoffice y desarrollo. 
                  Enfocado en la programación y tecnología, buscando constantemente nuevas oportunidades para 
                  crecer profesionalmente en el área IT.
                </p>
              </div>

              <div className="section-card">
                <div className="card-header">
                  <Mail className="card-icon" size={24} />
                  <h2>Contacto</h2>
                </div>
                <div className="contact-list">
                  <div className="contact-item">
                    <Mail size={18} />
                    <a href="mailto:matiasvillalobosperez02@gmail.com">
                      matiasvillalobosperez02@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} />
                    <a href="tel:+56977231057">+569 7723 1057</a>
                  </div>
                  <div className="contact-item">
                    <MapPin size={18} />
                    <span>La Florida, Santiago, Chile</span>
                  </div>
                </div>
              </div>

              <div className="section-card">
                <div className="card-header">
                  <Briefcase className="card-icon" size={24} />
                  <h2>Certificaciones</h2>
                </div>
                <ul className="cert-list">
                  {certifications.map((cert, index) => (
                    <li key={index} className="cert-item">
                      <ChevronRight size={16} />
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
                        <Calendar size={16} />
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
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon;
                return (
                  <div key={index} className="skill-card">
                    <div className="skill-header">
                      <Icon className="skill-icon" size={24} />
                      <h3>{skillGroup.category}</h3>
                    </div>
                    <div className="skill-tags">
                      {skillGroup.items.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Educación Tab */}
        {activeTab === 'educacion' && (
          <div className="tab-content">
            <div className="education-list">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <article key={index} className="edu-card">
                    <div className="edu-icon-wrapper">
                      <Icon size={28} />
                    </div>
                    <div className="edu-content">
                      <h3 className="edu-institution">{edu.institution}</h3>
                      <p className="edu-degree">{edu.degree}</p>
                      <div className="edu-footer">
                        <div className="edu-period">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <span className={`badge-status ${edu.status === 'En curso' ? 'active' : ''}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
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
