import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// ─── Matrix Rain Component ───────────────────────────────────────────────────
function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</>{}[]#$%&@!?';
    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff4120';
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // brighter head
        ctx.fillStyle = i % 5 === 0 ? '#00ff41' : '#00ff4130';
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
}

// ─── Boot Sequence Component ──────────────────────────────────────────────────
const bootLines = [
  { text: 'BIOS v2.4.1 — Inicializando sistema...', delay: 0 },
  { text: '> Cargando módulos del kernel... [OK]', delay: 300 },
  { text: '> Montando sistema de archivos... [OK]', delay: 600 },
  { text: '> Estableciendo conexión segura... [OK]', delay: 900 },
  { text: '> Descifrando datos del portafolio... [OK]', delay: 1200 },
  { text: '> Autenticando usuario: MATIAS_VILLALOBOS... [OK]', delay: 1500 },
  { text: '> Nivel de acceso: ESPECIALISTA_TI [CONCEDIDO]', delay: 1800 },
  { text: '> Iniciando interfaz...', delay: 2100 },
  { text: '█████████████████████ 100%', delay: 2400 },
  { text: 'SISTEMA LISTO.', delay: 2700 },
];

function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    bootLines.forEach(({ text, delay }) => {
      setTimeout(() => {
        setLines(prev => [...prev, text]);
      }, delay);
    });
    setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, 3200);
  }, [onComplete]);

  return (
    <div className={`boot-screen ${done ? 'boot-fade' : ''}`}>
      <div className="boot-content">
        <div className="boot-logo">
          <span className="boot-bracket">[</span>
          <span className="boot-name">MV</span>
          <span className="boot-bracket">]</span>
        </div>
        <div className="boot-terminal">
          {lines.map((line, i) => (
            <div key={i} className={`boot-line ${line.includes('[OK]') ? 'ok' : line.includes('[GRANTED]') ? 'granted' : line.includes('READY') ? 'ready' : ''}`}>
              {line}
            </div>
          ))}
          <span className="cursor-blink">█</span>
        </div>
      </div>
    </div>
  );
}

// ─── Glitch Text Component ────────────────────────────────────────────────────
function GlitchText({ text }) {
  return (
    <div className="glitch-wrapper">
      <div className="glitch" data-text={text}>{text}</div>
    </div>
  );
}

// ─── Terminal Line Component ──────────────────────────────────────────────────
function TerminalLine({ prompt = '$', command, output, color = 'green' }) {
  return (
    <div className="terminal-line">
      <span className="t-prompt">{prompt}</span>
      <span className={`t-command color-${color}`}>{command}</span>
      {output && <div className="t-output">{output}</div>}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [booting, setBooting] = useState(true);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');
  const [typedCmd, setTypedCmd] = useState('');
  const fullCmd = 'cat portafolio.json';

  useEffect(() => {
    if (!booting) {
      setTimeout(() => setVisible(true), 100);
      // typing effect for nav command
      let i = 0;
      const interval = setInterval(() => {
        setTypedCmd(fullCmd.slice(0, i + 1));
        i++;
        if (i >= fullCmd.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }
  }, [booting]);

  const experiences = [
    {
      id: 1,
      company: 'Sonda / Bolsa de Comercio de Santiago',
      role: 'Especialista TI — Infraestructura & Continuidad Operativa',
      period: 'Actualidad',
      current: true,
      description: 'Entorno de misión crítica y alta disponibilidad. Responsable de garantizar la continuidad operativa de la infraestructura tecnológica en la Bolsa de Valores (nuam).',
      highlights: [
        'GESTIÓN DE IDENTIDADES, ACCESOS Y SERVICIOS DE DIRECTORIO (IAM)',
        'Administración de Active Directory: gestión avanzada de objetos de dominio, grupos de seguridad, delegación de privilegios y despliegue de GPOs para hardening de políticas locales',
        'Troubleshooting Avanzado de Autenticación: diagnóstico y resolución de bloqueos de usuarios mediante LockoutStatus, localizando fallos de autenticación a través de los controladores de dominio (DCs)',
        'Migración de Objetos e Identidades Interdominio: planificación y ejecución de migraciones de perfiles de usuario y estaciones de trabajo entre dominios corporativos, garantizando integridad de datos y persistencia de configuraciones',
        'Gestión de Endpoints a Nivel de Sistema: configuración local, habilitación de cuentas de servicio y control de listas de acceso (ACLs) mediante Administrador de Equipos',
        'REDES, CONECTIVIDAD DE DATOS Y SEGURIDAD PERIMETRAL',
        'Despliegue y Aprovisionamiento VPN: configuración e instalación del cliente Palo Alto GlobalProtect, asegurando tunelización y canales cifrados de extremo a extremo',
        'Soporte de Infraestructura de Red L2/L3: monitoreo operacional, diagnóstico de fallas de conectividad, gestión de direccionamiento IP y resolución de incidencias en capas de acceso y distribución',
        'SOPORTE DE PLATAFORMAS FINANCIERAS TRANSFRONTERIZAS Y CIBERSEGURIDAD',
        'Soporte de Continuidad Operativa a SEBRA HT: soporte técnico N2 a la plataforma de negociación de renta fija transfronteriza entre Chile y Perú, garantizando estabilidad y disponibilidad del mercado integrado',
        'Aseguramiento de Entornos de Ejecución y Criptografía SSL: implementación y actualización de certificados digitales en Keystores, asegurando conexiones TLS/SSL cifradas hacia plataformas transaccionales del core financiero',
        'Integración y Soporte de Hardware Zebra: aprovisionamiento, calibración de sensores, direccionamiento lógico y mantenimiento de terminales de impresión térmica Zebra dentro de la red corporativa'
      ]
    },
    {
      id: 2,
      company: 'Gocar Ltda.',
      role: 'Especialista en Soporte Técnico',
      period: 'Dic. 2025 - Actualidad',
      current: true,
      description: 'Soporte técnico especializado y gestión de infraestructura IT.',
      highlights: [
        'Soporte técnico directo a usuarios finales',
        'Resolución de incidencias de hardware y software',
        'Mantenimiento preventivo y correctivo de equipos',
        'Gestión de tickets y atención al cliente'
      ]
    },
    {
      id: 3,
      company: 'Sonda / Agrosuper',
      role: 'IT Support Analyst & Operations Backup',
      period: '2024 - 2025',
      current: false,
      description: 'Gestión centralizada de operaciones TI para sucursales de Agrosuper a nivel nacional.',
      highlights: [
        'Gestión centralizada de operaciones TI a nivel nacional',
        'Orquestación de incidentes mediante Aranda Service Desk',
        'Auditoría técnica de reportes de terreno',
        'Aseguramiento de calidad (QA) en cierre de tickets',
        'Staging y aprovisionamiento de hardware para continuidad operativa en regiones'
      ]
    },
    {
      id: 4,
      company: 'Banco Falabella',
      role: 'Soporte TI Microinformático',
      period: 'Ene. 2026 — Feb. 2026',
      current: false,
      description: 'Provisión y despliegue técnico de estaciones de trabajo en entorno bancario.',
      highlights: [
        'Aprovisionamiento con imágenes corporativas Falabella',
        'Integración de equipos al dominio corporativo',
        'Configuración de red LAN/Wi-Fi y drivers específicos',
        'Soporte preventivo y correctivo de hardware',
        'Entrega y validación con usuario final'
      ]
    },
    {
      id: 5,
      company: 'Psys',
      role: 'Programador Jr',
      period: 'Oct. 2025 — Dic. 2025',
      current: false,
      description: 'Desarrollo Backend Jr. con Node.js, TypeScript y tecnologías modernas.',
      highlights: [
        'Desarrollo y mantenimiento de APIs',
        'Integración de bases de datos',
        'Buenas prácticas de programación',
        'Trabajo colaborativo con equipos de frontend'
      ]
    },
    {
      id: 6,
      company: 'Nexxos Chile',
      role: 'Soporte Técnico',
      period: 'Dic. 2024 — Dic. 2025',
      current: false,
      description: 'Atención técnica a clientes internos y externos.',
      highlights: [
        'Gestión y resolución de tickets de soporte',
        'Administración cPanel e instalación de certificados SSL',
        'Configuración de correos corporativos',
        'Manejo de sistema ERP Odoo'
      ]
    }
  ];

  const skills = [
    { category: 'languages', label: 'Lenguajes', items: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'frameworks', label: 'Frameworks', items: ['React', 'Node.js', 'Django', 'Express'] },
    { category: 'databases', label: 'Bases de Datos', items: ['MySQL', 'SQL Server', 'MongoDB'] },
    { category: 'tools', label: 'Herramientas', items: ['Git', 'cPanel', 'Odoo ERP', 'Aranda', 'Jira', 'Windows Server'] },
    { category: 'infra', label: 'Infraestructura & Seguridad', items: ['Active Directory', 'Azure AD', 'BeyondTrust', 'Acronis', 'Cisco Switching', 'Fibra Óptica SFP'] }
  ];

  const education = [
    { institution: 'Duoc UC', degree: 'Ingeniería en Informática', period: '2023 — Actual', status: 'ACTIVE' },
    { institution: 'Liceo Industrial Ramon Barros Luco', degree: 'Técnico en Electrónica', period: '2019 — 2022', status: 'COMPLETED' }
  ];

  const certifications = [
    'Programación de Software — Python / JavaScript / HTML / CSS',
    'Análisis y desarrollo de modelos de datos — Django / SQL Server / MySQL',
    'Calidad de software'
  ];

  const tabs = [
    { id: 'inicio',      label: 'inicio',      icon: '~' },
    { id: 'experiencia', label: 'experiencia',  icon: '$' },
    { id: 'habilidades', label: 'habilidades',  icon: '>' },
    { id: 'educacion',   label: 'educacion',    icon: '#' }
  ];

  if (booting) return <BootSequence onComplete={() => setBooting(false)} />;

  return (
    <div className={`app ${visible ? 'app-visible' : ''}`}>
      <MatrixRain />

      <div className="scanline" />
      <div className="vignette" />

      <div className="app-inner">
        {/* ── HEADER ─────────────────────────────── */}
        <header className="hdr">
          <div className="hdr-top">
            <div className="hdr-status">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="hdr-path">~/portfolio/matias_villalobos</span>
            </div>
            <div className="hdr-links">
              <a href="https://github.com/Lexikolds" target="_blank" rel="noopener noreferrer" className="hdr-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                github
              </a>
              <a href="https://linkedin.com/in/matias-villalobos" target="_blank" rel="noopener noreferrer" className="hdr-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                linkedin
              </a>
            </div>
          </div>

          <div className="hdr-hero">
            <div className="hdr-pre">
              <span className="pre-bracket">root@kali</span>
              <span className="pre-sep">:</span>
              <span className="pre-path">~/specialists</span>
              <span className="pre-dollar">#</span>
            </div>
            <GlitchText text="MATIAS VILLALOBOS" />
            <div className="hdr-role">
              <span className="role-tag">[ ESPECIALISTA TI ]</span>
              <span className="role-sep"> :: </span>
              <span className="role-tag">[ INFRAESTRUCTURA ]</span>
              <span className="role-sep"> :: </span>
              <span className="role-tag">[ MISIÓN CRÍTICA ]</span>
            </div>
            <div className="hdr-cmd">
              <span className="cmd-prompt">$ </span>
              <span className="cmd-text">{typedCmd}</span>
              <span className="cursor-blink">█</span>
            </div>          </div>
        </header>

        <nav className="nav">
          <div className="nav-inner">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-btn ${activeTab === tab.id ? 'nav-btn--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="nav-icon">{tab.icon}</span>
                <span className="nav-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <main className="main">
          {activeTab === 'inicio' && (
            <div className="tab-pane">
              <div className="section-header">
                <TerminalLine prompt="root@mv:~#" command=" cat sobre_mi.txt" />
              </div>

              <div className="cards-grid">
                <div className="card card--glow">
                  <div className="card-head">
                    <span className="card-head-icon">{'>'}</span>
                    <span className="card-head-title">SOBRE_MI.exe</span>
                    <span className="card-head-line" />
                  </div>
                  <p className="card-body">
                    Especialista TI en entornos de misión crítica con experiencia en infraestructura,
                    continuidad operativa y desarrollo de software. Responsable de garantizar la alta disponibilidad
                    de sistemas financieros y plataformas críticas mediante soporte avanzado, administración de
                    infraestructura y diagnóstico de hardware a nivel de componentes.
                  </p>
                  <div className="card-footer">
                    <span className="tag tag--cyan">ESTADO: ACTIVO</span>
                    <span className="tag tag--green">NIVEL: ESPECIALISTA</span>
                  </div>
                </div>

                <div className="card card--glow">
                  <div className="card-head">
                    <span className="card-head-icon">{'>'}</span>
                    <span className="card-head-title">CONTACTO.cfg</span>
                    <span className="card-head-line" />
                  </div>
                  <div className="contact-list">
                    <div className="contact-row">
                      <span className="contact-key">correo</span>
                      <span className="contact-sep">=</span>
                      <a href="mailto:matiasvillalobosperez02@gmail.com" className="contact-val">
                        matiasvillalobosperez02@gmail.com
                      </a>
                    </div>
                    <div className="contact-row">
                      <span className="contact-key">teléfono</span>
                      <span className="contact-sep">=</span>
                      <a href="tel:+56977231057" className="contact-val">+569 7723 1057</a>
                    </div>
                    <div className="contact-row">
                      <span className="contact-key">ubicación</span>
                      <span className="contact-sep">=</span>
                      <span className="contact-val">La Florida, Santiago, CL</span>
                    </div>
                    <div className="contact-row">
                      <span className="contact-key">github</span>
                      <span className="contact-sep">=</span>
                      <a href="https://github.com/Lexikolds" target="_blank" rel="noopener noreferrer" className="contact-val">Lexikolds</a>
                    </div>
                  </div>
                </div>

                <div className="card card--glow">
                  <div className="card-head">
                    <span className="card-head-icon">{'>'}</span>
                    <span className="card-head-title">CERTIFICACIONES.pem</span>
                    <span className="card-head-line" />
                  </div>
                  <ul className="cert-list">
                    {certifications.map((cert, i) => (
                      <li key={i} className="cert-item">
                        <span className="cert-num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="cert-arrow">{'>>'}</span>
                        <span className="cert-text">{cert}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-footer">
                    <span className="tag tag--green">DUOC UC — VERIFICADO</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experiencia' && (
            <div className="tab-pane">
              <TerminalLine prompt="root@mv:~#" command=" git log --all --experiencia" />
              <div className="exp-list">
                {experiences.map((exp, i) => (
                  <div key={exp.id} className={`exp-card ${exp.current ? 'exp-card--active' : ''}`}>
                    <div className="exp-gutter">
                      <div className="exp-dot" />
                      {i < experiences.length - 1 && <div className="exp-line" />}
                    </div>
                    <div className="exp-body">
                      <div className="exp-top">
                        <div>
                          <div className="exp-company">{exp.company}</div>
                          <div className="exp-role">{exp.role}</div>
                        </div>
                        <div className="exp-meta">
                          <span className="exp-period">{exp.period}</span>
                          {exp.current && <span className="badge-live"><span className="live-dot" />LIVE</span>}
                        </div>
                      </div>
                      <p className="exp-desc">{exp.description}</p>
                      <ul className="exp-hl">
                        {exp.highlights.map((h, j) => {
                          const isHeader = h === h.toUpperCase() && h.length > 5;
                          return (
                            <li key={j} className={`exp-hl-item ${isHeader ? 'exp-hl-header' : ''}`}>
                              {!isHeader && <span className="hl-arrow">▸</span>}
                              {h}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'habilidades' && (
            <div className="tab-pane">
              <TerminalLine prompt="root@mv:~#" command=" ./habilidades.sh --listar-todas" />
              <div className="skills-grid">
                {skills.map((group, i) => (
                  <div key={i} className="skill-card">
                    <div className="skill-head">
                      <span className="skill-idx">{String(i).padStart(2, '0')}</span>
                      <span className="skill-label">{group.label.toUpperCase()}</span>
                    </div>
                    <div className="skill-tags">
                      {group.items.map((item, j) => (
                        <span key={j} className="skill-tag">
                          <span className="tag-pre">$</span>{item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'educacion' && (
            <div className="tab-pane">
              <TerminalLine prompt="root@mv:~#" command=" SELECT * FROM educacion;" />
              <div className="edu-list">
                {education.map((edu, i) => (
                  <div key={i} className="edu-card">
                    <div className="edu-left">
                      <div className="edu-idx">{String(i + 1).padStart(2, '0')}</div>
                      <span className={`edu-status ${edu.status === 'ACTIVE' ? 'status-active' : 'status-done'}`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="edu-right">
                      <div className="edu-institution">{edu.institution}</div>
                      <div className="edu-degree">{edu.degree}</div>
                      <div className="edu-period">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

        <footer className="footer">
          <span>© 2026 Matias Villalobos</span>
          <span className="footer-sep">//</span>
          <span>VERSIÓN: <span className="footer-green">v3.0.0-estable</span></span>
          <span className="footer-sep">//</span>
          <span>ESTADO: <span className="footer-green">EN LÍNEA</span></span>
        </footer>
      </div>
    </div>
  );
}