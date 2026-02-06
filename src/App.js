import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Code2, Terminal, Database, Server, Cpu, Monitor, Wrench, ChevronRight, Calendar } from 'lucide-react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      ],
      color: '#00d4ff'
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
        'Gestión de dominios y redes para garantizar conectividad',
        'Instalación de drivers específicos y aplicaciones críticas',
        'Soporte preventivo y correctivo de hardware',
        'Entrega y validación con usuario final'
      ],
      color: '#22c55e'
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
        'Trabajo colaborativo con equipos de frontend',
        'Planificación de proyectos y resolución de incidencias técnicas'
      ],
      color: '#a855f7'
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
        'Manejo de sistema ERP Odoo',
        'Soporte remoto y administración de sistemas'
      ],
      color: '#f59e0b'
    }
  ];

  const skills = [
    {
      category: 'Lenguajes de Programación',
      icon: Code2,
      items: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
      color: '#00d4ff'
    },
    {
      category: 'Frameworks & Librerías',
      icon: Terminal,
      items: ['React', 'Node.js', 'Django', 'Express'],
      color: '#22c55e'
    },
    {
      category: 'Bases de Datos',
      icon: Database,
      items: ['MySQL', 'SQL Server', 'MongoDB'],
      color: '#a855f7'
    },
    {
      category: 'Herramientas & Sistemas',
      icon: Server,
      items: ['Git', 'cPanel', 'Odoo ERP', 'Windows Server'],
      color: '#f59e0b'
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
    'Programación de Software (Python / JavaScript / HTML / CSS) - Duoc UC',
    'Análisis y desarrollo de modelos de datos (Django / SQL Server / MySQL) - Duoc UC',
    'Calidad de software - Duoc UC'
  ];

  return (
    <div className="portfolio-v3" style={{
      '--cursor-x': `${cursorPosition.x}px`,
      '--cursor-y': `${cursorPosition.y}px`
    }}>
      <div className="grid-bg"></div>

      <div className="main-container">
        {/* Header */}
        <header className="header" style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translateY(${isLoaded ? 0 : -50}px)`
        }}>
          <h1 className="main-title">Matias Villalobos</h1>
          <p className="main-subtitle">Estudiante Informático</p>
          <p className="main-role">&gt; Desarrollador & Soporte Técnico Especializado</p>
        </header>

        {/* Navigation */}
        <div className="nav-container" style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translateY(${isLoaded ? 0 : 20}px)`
        }}>
          <div className="nav-tabs">
            <button
              className={`nav-tab ${activeTab === 'inicio' ? 'active' : ''}`}
              onClick={() => setActiveTab('inicio')}
            >
              inicio
            </button>
            <button
              className={`nav-tab ${activeTab === 'experiencia' ? 'active' : ''}`}
              onClick={() => setActiveTab('experiencia')}
            >
              experiencia
            </button>
            <button
              className={`nav-tab ${activeTab === 'habilidades' ? 'active' : ''}`}
              onClick={() => setActiveTab('habilidades')}
            >
              habilidades
            </button>
            <button
              className={`nav-tab ${activeTab === 'educacion' ? 'active' : ''}`}
              onClick={() => setActiveTab('educacion')}
            >
              educación
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="content" style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translateY(${isLoaded ? 0 : 30}px)`
        }}>
          {/* Inicio Tab */}
          {activeTab === 'inicio' && (
            <div className="inicio-section">
              <div className="info-box">
                <div className="box-icon">
                  <Terminal size={28} color="#ffffff" />
                </div>
                <h2 className="box-title">Sobre Mí</h2>
                <p className="box-content">
                  Estudiante capacitado en estudios de informática y cargos de soporte técnico y backoffice, 
                  con experiencia en Soporte Técnico, BackOffice y desarrollo, buscando nuevas oportunidades 
                  y experiencias relacionadas al área de la programación y tecnología.
                </p>
              </div>

              <div className="info-box">
                <div className="box-icon">
                  <Mail size={28} color="#ffffff" />
                </div>
                <h2 className="box-title">Contacto</h2>
                <div className="box-content">
                  <div className="contact-item">
                    <Mail size={18} />
                    <span>matiasvillalobosperez02@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} />
                    <span>+569 7723 1057</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={18} />
                    <span>La Florida, Santiago</span>
                  </div>
                </div>
              </div>

              <div className="info-box">
                <div className="box-icon">
                  <Wrench size={28} color="#ffffff" />
                </div>
                <h2 className="box-title">Certificaciones</h2>
                <div className="box-content">
                  {certifications.map((cert, index) => (
                    <div key={index} className="cert-item">
                      <ChevronRight size={16} />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Experiencia Tab */}
          {activeTab === 'experiencia' && (
            <div className="experience-grid">
              {experiences.map((exp) => (
                <div key={exp.id} className="exp-card">
                  <div className="exp-header">
                    <div className="exp-title-group">
                      <h3 className="exp-company">{exp.company}</h3>
                      <p className="exp-role">{exp.role}</p>
                    </div>
                    <div className="exp-meta">
                      <div className="exp-period">
                        <Calendar size={16} />
                        {exp.period} · {exp.duration}
                      </div>
                      {exp.current && <span className="exp-current">Actual</span>}
                    </div>
                  </div>
                  <p className="exp-description">{exp.description}</p>
                  <ul className="exp-highlights">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Habilidades Tab */}
          {activeTab === 'habilidades' && (
            <div className="skills-grid">
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon;
                return (
                  <div key={index} className="skill-card">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <Icon size={24} color="#ffffff" />
                      </div>
                      <h3 className="skill-category">{skillGroup.category}</h3>
                    </div>
                    <div className="skill-items">
                      {skillGroup.items.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Educación Tab */}
          {activeTab === 'educacion' && (
            <div className="education-grid">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <div key={index} className="edu-card">
                    <div className="edu-icon-box">
                      <Icon size={32} color="#ffffff" />
                    </div>
                    <div className="edu-content">
                      <h3 className="edu-institution">{edu.institution}</h3>
                      <p className="edu-degree">{edu.degree}</p>
                      <div className="edu-period">
                        <Calendar size={16} />
                        {edu.period}
                        <span className="edu-status">{edu.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2026 Matias Villalobos Dev | Diseñado con React</p>
        </footer>
      </div>
    </div>
  );
}

export default App;