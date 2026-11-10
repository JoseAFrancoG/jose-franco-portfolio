import React, { useState } from 'react';
import {
  Code2,
  Database,
  Cpu,
  Cloud,
  Sparkles,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Printer,
  Terminal,
  Layers,
  ShieldCheck,
  Server,
  ChevronRight,
  Sun,
  Moon,
  Bot,
  Workflow,
  Wrench,
  X,
  MessageSquare,
  Award,
  CheckCircle2
} from 'lucide-react';

function Linkedin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.35a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
    </svg>
  );
}

function Github({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSkillTab, setActiveSkillTab] = useState('Todos');
  const [activeCodeTab, setActiveCodeTab] = useState('csharp');
  const [copiedField, setCopiedField] = useState(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [activeExpFilter, setActiveExpFilter] = useState('all');

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const skillsData = [
    // Frontend
    { name: 'React.js 18', category: 'Frontend', level: 'Avanzado', tag: 'UI / SPA', highlight: true },
    { name: 'TypeScript', category: 'Frontend', level: 'Avanzado', tag: 'Tipado Estricto', highlight: true },
    { name: 'Angular', category: 'Frontend', level: 'Competente', tag: 'Enterprise SPA', highlight: false },
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Avanzado', tag: 'Core Web', highlight: false },
    { name: 'Tailwind CSS & Material UI', category: 'Frontend', level: 'Avanzado', tag: 'Diseño Moderno', highlight: false },
    { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Avanzado', tag: 'Maquetación Semántica', highlight: false },

    // Backend & DB
    { name: 'C# (.NET Core 3.1 a .NET 8)', category: 'Backend & DB', level: 'Avanzado (4.9 años)', tag: 'Core Backend', highlight: true },
    { name: 'Microsoft SQL Server', category: 'Backend & DB', level: 'Avanzado (4.9 años)', tag: 'T-SQL & Stored Procedures', highlight: true },
    { name: 'RESTful Web APIs', category: 'Backend & DB', level: 'Avanzado', tag: 'Clean Architecture', highlight: true },
    { name: 'Entity Framework Core', category: 'Backend & DB', level: 'Avanzado', tag: 'ORM & Transacciones ACID', highlight: false },
    { name: 'ASP.NET WebForms (CodeBehind)', category: 'Backend & DB', level: 'Avanzado', tag: 'Sistemas Legacy & Migración', highlight: false },
    { name: 'Optimización de Consultas & Triggers', category: 'Backend & DB', level: 'Avanzado', tag: 'Alto Rendimiento DB', highlight: false },

    // IA & Automatización
    { name: 'Claude AI & Claude Code', category: 'IA & Automatización', level: 'Uso Diario', tag: 'Arquitectura & Refactoring', highlight: true },
    { name: 'Google Gemini Pro', category: 'IA & Automatización', level: 'Uso Diario', tag: 'Análisis & Generación', highlight: true },
    { name: 'GitHub Copilot', category: 'IA & Automatización', level: 'Uso Diario', tag: 'AI Pair Programming', highlight: true },
    { name: 'Agentes IA & Custom Skills', category: 'IA & Automatización', level: 'Avanzado', tag: 'Flujos Autónomos', highlight: true },
    { name: 'Automatización de Flujos TI', category: 'IA & Automatización', level: 'Avanzado', tag: 'Productividad 3x', highlight: false },
    { name: 'Prompt Engineering Técnico', category: 'IA & Automatización', level: 'Avanzado', tag: 'Context Engineering', highlight: false },

    // Cloud & DevOps
    { name: 'Microsoft Azure', category: 'Cloud & DevOps', level: 'Competente', tag: 'Cloud Computing', highlight: true },
    { name: 'Azure DevOps & CI/CD Pipelines', category: 'Cloud & DevOps', level: 'Avanzado', tag: 'Despliegue Continuo', highlight: true },
    { name: 'Git / GitHub / Azure Repos', category: 'Cloud & DevOps', level: 'Avanzado', tag: 'Control de Versiones', highlight: false },
    { name: 'Scrum / Metodologías Ágiles', category: 'Cloud & DevOps', level: 'Avanzado', tag: 'Gestión SDLC', highlight: false },
  ];

  const filteredSkills = activeSkillTab === 'Todos'
    ? skillsData
    : skillsData.filter(s => s.category === activeSkillTab);

  const projects = [
    {
      id: 'techservice-erp',
      title: 'TechService Pro ERP — Gestión de Servicio Técnico e Inventario',
      subtitle: 'Arquitectura Limpia en .NET 8 Web API + React 18 + SQL Server',
      badge: 'Proyecto Estrella Full Stack',
      description:
        'Sistema empresarial diseñado para digitalizar talleres de soporte técnico y mantenimiento de hardware. Resuelve la trazabilidad de garantías por número de serie, control transaccional de stock de repuestos en tiempo real y métricas financieras.',
      stack: ['.NET 8 Web API', 'C# 12', 'React 18', 'TypeScript', 'Tailwind CSS', 'SQL Server', 'EF Core + T-SQL SP', 'JWT Auth'],
      highlights: [
        'Control Transaccional ACID: Descuento automático de repuestos con BeginTransactionAsync y Rollback automático ante fallos de stock.',
        'Enfoque Híbrido de Datos: Entity Framework Core para CRUD ágil combinado con Stored Procedures (sp_GetDashboardMetrics) en SQL Server para KPIs instantáneos.',
        'Seguridad RBAC con JWT: Roles diferenciados para Administradores y Técnicos Especialistas con historial de auditoría (OrderHistory).'
      ],
      architecture: {
        layers: [
          { name: 'TechService.API (.NET 8)', detail: 'Controllers delgados, autenticación JWT Bearer, Swagger OpenAPI y manejo global de excepciones.' },
          { name: 'TechService.Core (Dominio)', detail: 'Entidades limpias (ServiceOrder, InventoryItem, OrderHistory), DTOs, Interfaces y Reglas de Negocio.' },
          { name: 'TechService.Infra (Datos)', detail: 'EF Core DbContext, ejecución de Stored Procedures en SQL Server y manejo de transacciones explícitas.' },
          { name: 'Frontend SPA (React + TS)', detail: 'Arquitectura modular basada en Features (auth, orders, inventory, dashboard) con interceptores Axios.' }
        ],
        endpoints: [
          { method: 'POST', path: '/api/auth/login', desc: 'Autenticación y emisión de token JWT con Claims de Rol' },
          { method: 'GET', path: '/api/dashboard/summary', desc: 'Ejecuta Stored Procedure sp_GetDashboardMetrics en SQL Server' },
          { method: 'GET', path: '/api/orders?status=&search=', desc: 'Listado paginado con filtros dinámicos por serie, cliente o estado' },
          { method: 'POST', path: '/api/orders/{id}/items', desc: 'Transacción ACID: asigna repuesto, valida y descuenta stock' },
          { method: 'PATCH', path: '/api/orders/{id}/status', desc: 'Actualiza estado e inserta trazabilidad en OrderHistory' }
        ],
        tables: ['Users', 'Customers', 'InventoryItems', 'ServiceOrders', 'OrderItems', 'OrderHistory']
      }
    },
    {
      id: 'ai-learning-hub',
      title: 'AI-Assisted Reading & English Practice Platform',
      subtitle: 'Plataforma Interactiva de Comprensión Lectora y Entrenamiento con IA',
      badge: 'EdTech & Integración IA',
      description:
        'Aplicación web moderna enfocada en el desarrollo del hábito de lectura y aprendizaje de inglés mediante ejercicios interactivos de lectura, escucha, escritura y pronunciación asistidos por flujos de Inteligencia Artificial.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js / .NET API', 'SQL Server', 'AI Prompt Workflows'],
      highlights: [
        'Generación dinámica de cuestionarios de comprensión lectora y vocabulario contextual.',
        'Panel de seguimiento de progreso diario y métricas de retención de lectura.',
        'Interfaz adaptable con modo lectura inmersivo libre de distracciones.'
      ],
      architecture: {
        layers: [
          { name: 'Frontend Reactivo', detail: 'Componentes interactivos para evaluación de lectura, audio y escritura en tiempo real.' },
          { name: 'Motor de Evaluación IA', detail: 'Integración de prompts estructurados para retroalimentación gramatical y semántica.' },
          { name: 'Persistencia Relacional', detail: 'Almacenamiento de sesiones de estudio, rachas y evolución por nivel CEFR.' }
        ],
        endpoints: [
          { method: 'GET', path: '/api/readings/daily', desc: 'Obtiene lecturas niveladas con glosario técnico' },
          { method: 'POST', path: '/api/evaluations/submit', desc: 'Procesa respuestas del usuario y genera feedback asistido por IA' }
        ],
        tables: ['Students', 'ReadingModules', 'PracticeSessions', 'VocabularyBank']
      }
    },
    {
      id: 'enterprise-migration-suite',
      title: 'Modernización de Módulos Empresariales (.NET Core 3.1 / WebForms a .NET 8 & React)',
      subtitle: 'Caso de Éxito en Ingeniería de Software Corporativa',
      badge: 'Experiencia Real en Producción',
      description:
        'Iniciativa de actualización tecnológica en entornos de alta concurrencia: migración progresiva de componentes legacy en ASP.NET WebForms y proyectos en .NET Core 3.1 hacia servicios en .NET 8 e interfaces modernas en React y Angular.',
      stack: ['C#', '.NET Core 3.1 → .NET 8', 'ASP.NET WebForms', 'React', 'Angular', 'SQL Server', 'Azure DevOps CI/CD'],
      highlights: [
        'Actualización de librerías NuGet, refactorización de código crítico y eliminación de deuda técnica apoyada por agentes de IA (Claude / Copilot).',
        'Optimización de procedimientos almacenados en SQL Server reduciendo tiempos de carga en módulos transaccionales.',
        'Automatización de despliegues mediante pipelines CI/CD en Microsoft Azure garantizando cero pérdida de continuidad operativa.'
      ],
      architecture: {
        layers: [
          { name: 'Capa de Presentación Híbrida', detail: 'Convivencia e integración gradual de vistas WebForms con micro-módulos en React y Angular.' },
          { name: 'Servicios Backend .NET', detail: 'Migración de lógica acoplada en CodeBehind hacia servicios desacoplados y APIs en .NET 8.' },
          { name: 'Motor Transaccional SQL Server', detail: 'Consultas T-SQL optimizadas, índices y Stored Procedures para reportes corporativos.' }
        ],
        endpoints: [
          { method: 'POST', path: '/api/v2/modules/sync', desc: 'Sincronización de reglas de negocio entre módulos modernos y base de datos central' },
          { method: 'GET', path: '/api/v2/reports/ analytical', desc: 'Consulta optimizada de alto volumen en SQL Server' }
        ],
        tables: ['EnterpriseCoreTables', 'AuditLogs', 'TransactionalLedgers']
      }
    }
  ];

  return (
    <div className={darkMode ? 'bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-slate-950' : 'bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-blue-600 selection:text-white'}>
      {/* Ambient Background Glows (Hidden on Print) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none print:hidden z-0">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-cyan-500' : 'bg-blue-400'}`} />
        <div className={`absolute top-1/3 -left-40 w-96 h-96 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-300'}`} />
        <div className={`absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-emerald-500' : 'bg-teal-300'}`} />
      </div>

      {/* Barra de Navegación Sticky */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors print:hidden ${
        darkMode ? 'bg-slate-950/85 border-slate-800/80' : 'bg-white/85 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
              JF
            </div>
            <div>
              <span className="font-bold tracking-tight text-sm sm:text-base block leading-none">
                José Albeiro Franco
              </span>
              <span className={`text-xs font-medium ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Full Stack .NET & React + AI
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#stack" className="hover:text-cyan-400 transition-colors">Stack & IA</a>
            <a href="#experiencia" className="hover:text-cyan-400 transition-colors">Experiencia</a>
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#educacion" className="hover:text-cyan-400 transition-colors">Educación</a>
            <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Cambiar tema Claro / Oscuro"
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Guardar CV (PDF)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenedor Principal */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-14 space-y-16 sm:space-y-24">

        {/* HERO SECTION */}
        <section id="inicio" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para nuevos retos | Full Stack & AI-Augmented Developer
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                José Albeiro{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                  Franco Granados
                </span>
              </h1>
              <p className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Ingeniero de Sistemas | C# .NET Core / .NET 8 • SQL Server • React & TypeScript • Agentes IA
              </p>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Desarrollador Full Stack con <strong>casi 5 años de experiencia</strong> comprobada en el ciclo completo de software empresarial (SDLC), modernización de aplicaciones desde <strong>ASP.NET WebForms y .NET Core 3.1 hacia .NET 8</strong>, e interfaces reactivas con <strong>React, Angular y TypeScript</strong>. Especialista en optimización de bases de datos en <strong>SQL Server</strong>, despliegues CI/CD en <strong>Microsoft Azure</strong> e integración diaria de <strong>Claude, Gemini, GitHub Copilot, Agentes IA y Skills</strong> para multiplicar la velocidad y calidad de entrega.
            </p>

            {/* Métricas de Impacto Rápido para Reclutadores */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400">~5 Años</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Experiencia en .NET & SQL</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="text-xl sm:text-2xl font-extrabold text-blue-400">.NET 3.1 → 8</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Migración y Modernización</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="text-xl sm:text-2xl font-extrabold text-indigo-400">React + TS</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Frontend Moderno & SPA</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">AI-First</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Claude, Gemini & Copilot</div>
              </div>
            </div>

            {/* Botones de Contacto Directo */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/jose-franco-702998258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Oficial</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                onClick={() => copyToClipboard('Jose.arleck91@hotmail.com', 'email')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-cyan-500/50 text-slate-200'
                    : 'bg-white border-slate-300 hover:border-blue-500 text-slate-700'
                }`}
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Correo Copiado</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Jose.arleck91@hotmail.com</span>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                  </>
                )}
              </button>

              <button
                onClick={() => copyToClipboard('+57 312 410 8574', 'phone')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-cyan-500/50 text-slate-200'
                    : 'bg-white border-slate-300 hover:border-blue-500 text-slate-700'
                }`}
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Teléfono Copiado</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>+57 312 410 8574</span>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Tarjeta Interactiva de Código / Terminal para Tech Leads */}
          <div className="lg:col-span-5 print:hidden">
            <div className={`rounded-2xl border overflow-hidden shadow-2xl ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-900 border-slate-800 text-slate-100'
            }`}>
              {/* Barra superior de la ventana de código */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">
                    {activeCodeTab === 'csharp' ? 'DeveloperProfile.cs' : 'ai_workflow_agent.ts'}
                  </span>
                </div>
                <div className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveCodeTab('csharp')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      activeCodeTab === 'csharp'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    C# .NET 8
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('ai')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      activeCodeTab === 'ai'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    AI & React
                  </button>
                </div>
              </div>

              {/* Contenido del código */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-200">
                {activeCodeTab === 'csharp' ? (
                  <pre className="space-y-1">
                    <div><span className="text-purple-400">namespace</span> <span className="text-cyan-300">JoseFranco.Portfolio</span>;</div>
                    <div className="pt-1"><span className="text-purple-400">public record</span> <span className="text-amber-300">FullStackEngineer</span></div>
                    <div>{'{'}</div>
                    <div className="pl-4"><span className="text-blue-400">public string</span> Name =&gt; <span className="text-emerald-300">"José Albeiro Franco"</span>;</div>
                    <div className="pl-4"><span className="text-blue-400">public string</span> Location =&gt; <span className="text-emerald-300">"Bogotá, CO"</span>;</div>
                    <div className="pl-4"><span className="text-blue-400">public string[]</span> Backend =&gt; [</div>
                    <div className="pl-8 text-emerald-300">"C# 12", ".NET Core 3.1 → .NET 8",</div>
                    <div className="pl-8 text-emerald-300">"SQL Server (T-SQL / SPs)", "WebForms"</div>
                    <div className="pl-4">];</div>
                    <div className="pl-4"><span className="text-blue-400">public string[]</span> Frontend =&gt; [</div>
                    <div className="pl-8 text-emerald-300">"React 18", "TypeScript", "Angular"</div>
                    <div className="pl-4">];</div>
                    <div className="pl-4"><span className="text-blue-400">public bool</span> ReadyForChallenges =&gt; <span className="text-cyan-400">true</span>;</div>
                    <div>{'}'}</div>
                  </pre>
                ) : (
                  <pre className="space-y-1">
                    <div><span className="text-slate-500">// Flujo diario potenciado con IA & Agentes</span></div>
                    <div><span className="text-purple-400">const</span> <span className="text-cyan-300">aiAugmentedWorkflow</span> = {'{'}</div>
                    <div className="pl-4">models: [<span className="text-emerald-300">'Claude'</span>, <span className="text-emerald-300">'Gemini'</span>, <span className="text-emerald-300">'GitHub Copilot'</span>],</div>
                    <div className="pl-4">capabilities: [</div>
                    <div className="pl-8 text-amber-300">'Diseño de Agentes & Custom Skills',</div>
                    <div className="pl-8 text-amber-300">'Migración .NET Core 3.1 a .NET 8',</div>
                    <div className="pl-8 text-amber-300">'Automatización de Testing & Refactor',</div>
                    <div className="pl-8 text-amber-300">'Optimización T-SQL en SQL Server'</div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">cloudDeployment: <span className="text-emerald-300">'Azure DevOps CI/CD'</span></div>
                    <div>{'};'}</div>
                  </pre>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DESTACADA: INGENIERÍA POTENCIADA POR IA */}
        <section className={`rounded-2xl p-6 sm:p-8 border relative overflow-hidden ${
          darkMode
            ? 'bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-indigo-500/30'
            : 'bg-gradient-to-r from-indigo-50 via-blue-50 to-slate-100 border-indigo-200'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <Sparkles className="w-4 h-4" />
                Diferenciador Competitivo 2026
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Desarrollo de Software Potenciado con IA, Agentes y Automatización
              </h2>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Integro diariamente <strong>Claude, Gemini y GitHub Copilot</strong> junto con la configuración de <strong>Agentes autónomos, Skills personalizados y automatizaciones</strong> dentro del ciclo de ingeniería. Esto me permite diagnosticar bugs en producción en una fracción del tiempo, migrar arquitecturas legacy (.NET Core 3.1 / WebForms a .NET 8) con alta precisión y documentar APIs bajo estándares Clean Code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                <Bot className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold">Claude & Gemini</div>
                  <div className="text-[11px] opacity-70">Arquitectura & Prompts</div>
                </div>
              </div>
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                <Code2 className="w-6 h-6 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold">GitHub Copilot</div>
                  <div className="text-[11px] opacity-70">Velocidad de Codificación</div>
                </div>
              </div>
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                <Workflow className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold">Agentes & Skills</div>
                  <div className="text-[11px] opacity-70">Flujos Automatizados</div>
                </div>
              </div>
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold">Calidad & Testing</div>
                  <div className="text-[11px] opacity-70">Refactorización Segura</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STACK TECNOLÓGICO INTERACTIVO */}
        <section id="stack" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2.5">
                <Layers className="w-7 h-7 text-cyan-400" />
                Stack Tecnológico & Competencias
              </h2>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Filtra mis habilidades técnicas por área de especialidad.
              </p>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-2 print:hidden">
              {['Todos', 'Backend & DB', 'Frontend', 'IA & Automatización', 'Cloud & DevOps'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveSkillTab(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeSkillTab === tab
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : darkMode
                      ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                  skill.highlight
                    ? darkMode
                      ? 'bg-slate-900/90 border-cyan-500/40 shadow-sm'
                      : 'bg-white border-blue-300 shadow-sm'
                    : darkMode
                    ? 'bg-slate-900/40 border-slate-800/80'
                    : 'bg-white/80 border-slate-200'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm sm:text-base">{skill.name}</span>
                  </div>
                  <span className={`inline-block text-xs px-2 py-0.5 rounded-md ${
                    darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {skill.tag}
                  </span>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                  skill.highlight
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                    : darkMode
                    ? 'bg-slate-800 text-slate-400'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCIA PROFESIONAL */}
        <section id="experiencia" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2.5">
                <Briefcase className="w-7 h-7 text-cyan-400" />
                Experiencia Profesional
              </h2>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Trayectoria construyendo, modernizando y soportando software empresarial de misión crítica.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* SINCOSOFT S.A.S. */}
            <div className={`rounded-2xl p-6 sm:p-8 border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-800/60">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-bold">Desarrollador Full Stack</h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                      SINCOSOFT S.A.S.
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Bogotá D.C., Colombia • Software Empresarial ERP & Alta Concurrencia
                  </p>
                </div>
                <div className="text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-xl bg-slate-800/80 text-slate-200 shrink-0 self-start md:self-center">
                  Enero 2022 – Octubre 2026 (4 años, 10 meses)
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-bold text-sm text-cyan-400 mb-1.5 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Migración .NET Core 3.1 → .NET 8 & Desarrollo Full Stack
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Diseño, construcción y evolución de módulos empresariales en <strong>C#, .NET Core / .NET 8 y ASP.NET WebForms (CodeBehind)</strong>. Actualización de código y librerías NuGet, articulando interfaces modernas en <strong>React, Angular, TypeScript y Material UI</strong>.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-bold text-sm text-emerald-400 mb-1.5 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Ingeniería de Datos en Microsoft SQL Server
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Creación y optimización de consultas T-SQL complejas, <strong>Stored Procedures</strong>, Triggers y Vistas en <strong>SQL Server</strong>, garantizando integridad transaccional y reduciendo tiempos de respuesta en operaciones críticas.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-bold text-sm text-indigo-400 mb-1.5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Productividad con IA, Agentes & Azure CI/CD
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Integración diaria de <strong>Claude, Gemini y GitHub Copilot</strong>, junto con agentes, <em>skills</em> y automatizaciones para refactorización limpia. Gestión de despliegues continuos (CI/CD) en <strong>Microsoft Azure</strong>.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-bold text-sm text-amber-400 mb-1.5 flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Soporte Nivel 3 (L3), Resolución de Bugs y Clientes
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Diagnóstico profundo y corrección de bugs críticos en producción. Levantamiento directo de requerimientos y acompañamiento técnico a clientes corporativos, traduciendo necesidades de negocio en soluciones escalables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS DESTACADOS E INSPECTOR DE ARQUITECTURA */}
        <section id="proyectos" className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2.5">
              <FolderGit2 className="w-7 h-7 text-cyan-400" />
              Proyectos Destacados & Arquitectura
            </h2>
            <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Haz clic en <strong>"Inspeccionar Arquitectura y Endpoints"</strong> para revisar el diseño técnico en capas y el modelo de base de datos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40'
                    : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="space-y-2 max-w-3xl">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                      {proj.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold">{proj.title}</h3>
                    <p className="text-sm font-semibold text-blue-400">{proj.subtitle}</p>
                    <p className={`text-sm leading-relaxed pt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 print:hidden">
                    <button
                      onClick={() => setSelectedProjectModal(proj)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md transition-all cursor-pointer"
                    >
                      <Server className="w-4 h-4" />
                      <span>Inspeccionar Arquitectura y Endpoints</span>
                    </button>
                  </div>
                </div>

                {/* Logros Técnicos del Proyecto */}
                <div className="mt-5 space-y-2">
                  {proj.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Etiquetas del Stack */}
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-800/50">
                  {proj.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-cyan-300'
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCACIÓN Y FORMACIÓN */}
        <section id="educacion" className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2.5">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
              Educación y Certificaciones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Ingeniería de Sistemas</h3>
                  <p className="text-sm text-cyan-400 font-medium">Fundación de Educación Superior San José</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">2024</span>
              </div>
              <p className={`text-xs mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Formación profesional en arquitectura de software, ingeniería de bases de datos, redes y gestión de proyectos TI.
              </p>
            </div>

            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Tecnólogo en Análisis y Desarrollo de Sistemas (ADSI)</h3>
                  <p className="text-sm text-cyan-400 font-medium">SENA — Servicio Nacional de Aprendizaje</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">2022</span>
              </div>
              <p className={`text-xs mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Análisis de requerimientos, diseño orientado a objetos, modelado relacional SQL y construcción de software.
              </p>
            </div>

            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Técnico en Sistemas y Redes</h3>
                  <p className="text-sm text-cyan-400 font-medium">SENA — Servicio Nacional de Aprendizaje</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">2014</span>
              </div>
              <p className={`text-xs mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Infraestructura TI, mantenimiento preventivo/correctivo de cómputo, diagnóstico de hardware y conectividad.
              </p>
            </div>

            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    Actualización Continua & IA Aplicada
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium">Platzi / Microsoft Learn / Cursos Especializados</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300">2026</span>
              </div>
              <p className={`text-xs mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Desarrollo Full Stack con React & TypeScript, .NET 8, Despliegues en Azure DevOps e Ingeniería asistida por IA (Claude, Gemini, Copilot, Agentes y Skills).
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER DE CONTACTO RÁPIDO PARA RECLUTADORES */}
        <section id="contacto" className={`rounded-2xl p-6 sm:p-10 border text-center space-y-6 ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">¿Hablamos sobre tu próximo proyecto o vacante?</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Disponible para entrevistas técnicas, pruebas en vivo de C# .NET / React / SQL Server y vinculación inmediata en Bogotá (remoto, híbrido o presencial).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/573124108574?text=Hola%20Jos%C3%A9%2C%20vi%20tu%20portafolio%20web%20de%20Desarrollador%20Full%20Stack%20y%20me%20gustar%C3%ADa%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Escribir por WhatsApp (+57 312 410 8574)</span>
            </a>

            <a
              href="mailto:Jose.arleck91@hotmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar Correo Directo</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jose-franco-702998258"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 hover:border-blue-500 text-slate-200'
                  : 'bg-slate-100 border-slate-300 hover:border-blue-600 text-slate-800'
              }`}
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>Conectar en LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      {/* MODAL INTERACTIVO DE ARQUITECTURA DE PROYECTOS */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className={`w-full max-w-3xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 ${
            darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
          }`}>
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase text-cyan-400">{selectedProjectModal.badge}</span>
                <h3 className="text-xl font-bold mt-1">{selectedProjectModal.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400">{selectedProjectModal.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Capas de Arquitectura */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                1. Diseño en Capas (Clean Architecture)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProjectModal.architecture.layers.map((layer, idx) => (
                  <div key={idx} className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold text-xs sm:text-sm text-blue-400">{layer.name}</div>
                    <p className="text-xs mt-1 opacity-85">{layer.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Endpoints Principales */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                2. Contrato de Endpoints REST API
              </h4>
              <div className="space-y-2">
                {selectedProjectModal.architecture.endpoints.map((ep, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        ep.method === 'GET'
                          ? 'bg-blue-500/20 text-blue-300'
                          : ep.method === 'POST'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="font-semibold">{ep.path}</span>
                    </div>
                    <span className="font-sans text-slate-400 text-xs">{ep.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modelo Relacional SQL Server */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                3. Entidades en Base de Datos (SQL Server)
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProjectModal.architecture.tables.map((tb, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    dbo.{tb}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="px-5 py-2 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 cursor-pointer"
              >
                Cerrar Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
