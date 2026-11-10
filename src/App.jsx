import React, { useState } from 'react';
import {
  Code2,
  Database,
  Cloud,
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
  Layers,
  ShieldCheck,
  Server,
  Sun,
  Moon,
  Bot,
  Workflow,
  Wrench,
  X,
  MessageSquare,
  Award,
  CheckCircle2,
  ArrowUpRight,
  FileText,
  Calendar,
  Building2,
  Sparkles
} from 'lucide-react';

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.35a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSkillCategory, setActiveSkillCategory] = useState('Todos');
  const [profileViewTab, setProfileViewTab] = useState('resumen');
  const [copiedField, setCopiedField] = useState(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const skillsData = [
    // Backend & DB
    { name: 'C# (.NET Core 3.1 → .NET 8)', category: 'Backend & DB', level: 'Avanzado (5 años)', detail: 'APIs RESTful, Clean Architecture, Dependency Injection', core: true },
    { name: 'Microsoft SQL Server', category: 'Backend & DB', level: 'Avanzado (5 años)', detail: 'T-SQL, Stored Procedures, Índices y Vistas', core: true },
    { name: 'Entity Framework Core', category: 'Backend & DB', level: 'Avanzado', detail: 'Code-First, Migraciones, Transacciones ACID', core: true },
    { name: 'ASP.NET WebForms (CodeBehind)', category: 'Backend & DB', level: 'Avanzado', detail: 'Mantenimiento de sistemas legacy corporativos', core: false },
    { name: 'Optimización de Consultas & Triggers', category: 'Backend & DB', level: 'Avanzado', detail: 'Diagnóstico de cuellos de botella y rendimiento', core: false },
    { name: 'Arquitectura en Capas & Patrones', category: 'Backend & DB', level: 'Avanzado', detail: 'Repository Pattern, Unit of Work, DTOs', core: false },

    // Frontend
    { name: 'React 18', category: 'Frontend', level: 'Avanzado', detail: 'Hooks, Componentes Funcionales, Context API, SPA', core: true },
    { name: 'TypeScript', category: 'Frontend', level: 'Avanzado', detail: 'Tipado estricto, interfaces, generics y mantenibilidad', core: true },
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Avanzado', detail: 'Asincronía (Async/Await), manipulación del DOM, closures', core: true },
    { name: 'Angular', category: 'Frontend', level: 'Competente', detail: 'Componentes, servicios, observables y arquitectura modular', core: false },
    { name: 'Tailwind CSS & Material UI', category: 'Frontend', level: 'Avanzado', detail: 'Diseño responsive y sistemas de componentes', core: false },
    { name: 'HTML5 & CSS3 Semántico', category: 'Frontend', level: 'Avanzado', detail: 'Accesibilidad web (a11y) y layouts flexibles', core: false },

    // Cloud & DevOps
    { name: 'Microsoft Azure', category: 'Cloud & DevOps', level: 'Competente', detail: 'App Services, Azure SQL, Blob Storage, Key Vault', core: true },
    { name: 'Azure DevOps CI/CD', category: 'Cloud & DevOps', level: 'Avanzado', detail: 'Pipelines de compilación, releases automatizados', core: true },
    { name: 'Git & GitHub / Azure Repos', category: 'Cloud & DevOps', level: 'Avanzado', detail: 'GitFlow, ramas, pull requests y revisión de código', core: false },
    { name: 'Metodologías Ágiles (Scrum)', category: 'Cloud & DevOps', level: 'Avanzado', detail: 'Sprints, daily standups, backlog refinamiento', core: false },

    // Aceleración con IA
    { name: 'Claude Code & Claude 3.7', category: 'Aceleración con IA', level: 'Uso Diario', detail: 'Diagnóstico profundo, refactoring de arquitectura', core: true },
    { name: 'GitHub Copilot', category: 'Aceleración con IA', level: 'Uso Diario', detail: 'Pair programming y generación de tests unitarios', core: true },
    { name: 'Google Gemini Pro', category: 'Aceleración con IA', level: 'Uso Diario', detail: 'Modelado conceptual y análisis de requerimientos', core: false },
    { name: 'Agentes Autónomos & Custom Skills', category: 'Aceleración con IA', level: 'Avanzado', detail: 'Automatización de flujos repetitivos del ciclo de desarrollo', core: true },
  ];

  const filteredSkills = activeSkillCategory === 'Todos'
    ? skillsData
    : skillsData.filter(s => s.category === activeSkillCategory);

  const projects = [
    {
      id: 'techservice-erp',
      title: 'TechService Pro ERP — Gestión Técnica e Inventario Transaccional',
      subtitle: '.NET 8 Web API • React 18 & TypeScript • SQL Server • Clean Architecture',
      badge: 'Arquitectura Enterprise Full Stack',
      description:
        'Plataforma integral para centros de servicio técnico y soporte de hardware. Controla la trazabilidad completa de garantías por número de serie, ejecución de órdenes de trabajo y control transaccional de stock de repuestos en tiempo real bajo estrictos estándares ACID.',
      stack: ['.NET 8 Web API', 'C# 12', 'React 18', 'TypeScript', 'Tailwind CSS', 'SQL Server', 'EF Core + T-SQL SP', 'JWT RBAC'],
      highlights: [
        'Transaccionalidad ACID en Inventario: Descuento seguro de repuestos con BeginTransactionAsync y Rollback automático ante inconsistencias de stock.',
        'Estrategia de Datos Híbrida: EF Core para operaciones transaccionales ágiles combinado con Stored Procedures en SQL Server para generación de tableros analíticos en milisegundos.',
        'Seguridad Corporativa RBAC: Autenticación con JWT Bearer y autorización basada en Claims para administradores, supervisores y técnicos.'
      ],
      architecture: {
        layers: [
          { name: 'API Layer (.NET 8)', detail: 'Controladores REST delgados, middleware de excepciones global, autenticación JWT y documentación OpenAPI.' },
          { name: 'Core Layer (Dominio)', detail: 'Entidades puras (ServiceOrder, InventoryItem, Customer), DTOs, interfaces de repositorio y validaciones de negocio.' },
          { name: 'Infrastructure (Persistencia)', detail: 'DbContext de EF Core, mapeo relacional y ejecución optimizada de Stored Procedures en SQL Server.' },
          { name: 'Frontend SPA (React + TypeScript)', detail: 'Estructura modular por features (órdenes, inventario, auth), estado reactivo y cliente Axios con interceptores.' }
        ],
        endpoints: [
          { method: 'POST', path: '/api/v1/auth/login', desc: 'Emisión de token JWT con Claims de Rol y expiración controlada' },
          { method: 'GET', path: '/api/v1/dashboard/metrics', desc: 'Invoca el Stored Procedure sp_GetTechMetrics con KPIs consolidados' },
          { method: 'GET', path: '/api/v1/orders?status=&serial=', desc: 'Búsqueda paginada con filtrado dinámico por serie o cliente' },
          { method: 'POST', path: '/api/v1/orders/{id}/parts', desc: 'Transacción ACID: asignación y descuento atómico de repuestos' },
          { method: 'PATCH', path: '/api/v1/orders/{id}/status', desc: 'Transición de estado y registro de auditoría en OrderHistory' }
        ],
        tables: ['Users', 'Customers', 'InventoryItems', 'ServiceOrders', 'OrderItems', 'OrderHistory']
      }
    },
    {
      id: 'enterprise-migration-suite',
      title: 'Modernización de Módulos Críticos ERP (.NET Core 3.1 & WebForms → .NET 8)',
      subtitle: 'C# .NET 8 • React • Angular • SQL Server • Azure DevOps CI/CD',
      badge: 'Caso de Éxito en Producción Real',
      description:
        'Iniciativa de evolución tecnológica en software empresarial de alta concurrencia. Migración planificada y progresiva de componentes heredados en ASP.NET WebForms y servicios en .NET Core 3.1 hacia APIs modulares en .NET 8 con frontends reactivos en React y Angular.',
      stack: ['C#', '.NET Core 3.1 → .NET 8', 'ASP.NET WebForms', 'React', 'Angular', 'SQL Server', 'Azure DevOps'],
      highlights: [
        'Desacoplamiento progresivo: Reemplazo de lógica densa en CodeBehind por servicios desacoplados e inyección de dependencias en .NET 8.',
        'Optimización en Base de Datos: Refactorización y tuning de Stored Procedures complejos en SQL Server reduciendo en más del 40% la latencia en reportes masivos.',
        'Despliegue Continuo Seguro: Pipelines automatizados de CI/CD en Microsoft Azure DevOps garantizando disponibilidad del servicio sin interrupciones operativas.'
      ],
      architecture: {
        layers: [
          { name: 'Arquitectura de Coexistencia', detail: 'Integración fluida de micro-módulos en React dentro del portal empresarial existente.' },
          { name: 'Servicios Backend .NET 8', detail: 'APIs orientadas a dominio, reducción de deuda técnica y actualización masiva de paquetes NuGet.' },
          { name: 'Motor Transaccional SQL Server', detail: 'Reestructuración de índices, planes de ejecución y consultas T-SQL para alto volumen.' }
        ],
        endpoints: [
          { method: 'POST', path: '/api/v2/modules/sync', desc: 'Sincronización transaccional entre módulos legados y nueva base central' },
          { method: 'GET', path: '/api/v2/reports/performance', desc: 'Generación analítica de alto volumen con SPs indexados' }
        ],
        tables: ['CoreEntities', 'AuditTrails', 'TransactionalLedgers', 'SecurityClaims']
      }
    },
    {
      id: 'ai-learning-hub',
      title: 'Plataforma Interactiva EdTech de Comprensión y Práctica de Idiomas',
      subtitle: 'React • TypeScript • Node.js / .NET API • SQL Server • AI Augmented Workflows',
      badge: 'Solución Web Moderna',
      description:
        'Aplicación web responsiva orientada al desarrollo de habilidades lingüísticas y comprensión lectora técnica mediante módulos interactivos de lectura, escucha activa y evaluación continua asistida por Inteligencia Artificial estructurada.',
      stack: ['React 18', 'TypeScript', 'Tailwind CSS', '.NET / Node API', 'SQL Server', 'Prompt Engineering'],
      highlights: [
        'Motor de Cuestionarios Dinámicos: Generación contextual de preguntas de comprensión y glosarios técnicos especializados.',
        'Panel de Métricas de Progreso: Trazabilidad diaria del avance del usuario, rachas de estudio y métricas de retención.',
        'Diseño Centrado en la Usabilidad: Interfaz minimalista con modo lectura libre de distracciones y adaptabilidad móvil.'
      ],
      architecture: {
        layers: [
          { name: 'Interfaz de Usuario Reactiva', detail: 'Módulos dinámicos para ejercicios de lectura, escucha y escritura con retroalimentación inmediata.' },
          { name: 'Capa de Evaluación Asistida', detail: 'Flujos estructurados para análisis semántico y sugerencias gramaticales en tiempo real.' },
          { name: 'Persistencia de Progreso', detail: 'Modelado relacional en SQL Server para historial de sesiones, puntajes y curvas de aprendizaje.' }
        ],
        endpoints: [
          { method: 'GET', path: '/api/v1/lessons/active', desc: 'Obtención de lecturas niveladas con vocabulario clave' },
          { method: 'POST', path: '/api/v1/assessments/evaluate', desc: 'Procesamiento de respuestas con retroalimentación técnica estructurada' }
        ],
        tables: ['Students', 'LessonModules', 'PracticeSessions', 'VocabularyBank']
      }
    }
  ];

  return (
    <div className={darkMode ? 'bg-zinc-950 text-zinc-100 min-h-screen selection:bg-blue-600 selection:text-white' : 'bg-zinc-50 text-zinc-900 min-h-screen selection:bg-blue-600 selection:text-white'}>
      
      {/* Barra de Navegación Profesional */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors print:hidden ${
        darkMode ? 'bg-zinc-950/90 border-zinc-800/80' : 'bg-white/90 border-zinc-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className={`w-9 h-9 rounded-lg font-bold text-sm flex items-center justify-center border transition-all ${
              darkMode 
                ? 'bg-zinc-900 border-zinc-700 text-zinc-100 group-hover:border-zinc-500' 
                : 'bg-zinc-900 border-zinc-900 text-white'
            }`}>
              JF
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight block leading-tight">
                José Albeiro Franco
              </span>
              <span className={`text-xs block ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Full Stack Software Engineer
              </span>
            </div>
          </a>

          {/* Menú de enlaces */}
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-medium">
            <a href="#sobre-mi" className={`transition-colors ${darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'}`}>Sobre Mí</a>
            <a href="#experiencia" className={`transition-colors ${darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'}`}>Experiencia</a>
            <a href="#proyectos" className={`transition-colors ${darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'}`}>Proyectos</a>
            <a href="#habilidades" className={`transition-colors ${darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'}`}>Habilidades</a>
            <a href="#educacion" className={`transition-colors ${darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'}`}>Educación</a>
            <a href="#contacto" className={`transition-colors ${darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'}`}>Contacto</a>
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Cambiar modo"
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={handlePrint}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-zinc-100 text-zinc-900 hover:bg-white border-transparent'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800 border-transparent'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Guardar CV (PDF)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenedor Principal */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-20 sm:space-y-28">

        {/* HERO SECTION ELEGANTE */}
        <section id="inicio" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* Disponibilidad */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
              darkMode 
                ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible para nuevos retos • Bogotá / Remoto</span>
            </div>

            {/* Titular */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                José Albeiro Franco
              </h1>
              <p className={`text-lg sm:text-xl font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Ingeniero de Sistemas & Desarrollador Full Stack
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-mono text-blue-500 dark:text-blue-400">
                <span>C# .NET 8</span>
                <span>•</span>
                <span>SQL Server</span>
                <span>•</span>
                <span>React & TypeScript</span>
                <span>•</span>
                <span>Azure CI/CD</span>
              </div>
            </div>

            {/* Extracto Profesional */}
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
              Profesional en ingeniería de software con <strong>casi 5 años de experiencia</strong> en el ciclo completo de desarrollo empresarial (SDLC). Especialista en la construcción y modernización de plataformas críticas desde <strong>ASP.NET WebForms y .NET Core 3.1 hacia .NET 8</strong>, optimización de bases de datos relacionales en <strong>Microsoft SQL Server</strong> y creación de interfaces modernas en <strong>React y Angular con TypeScript</strong>. Complemento mi práctica de ingeniería con <strong>herramientas de Inteligencia Artificial</strong> para acelerar el diagnóstico, el refactoring seguro y la entrega continua.
            </p>

            {/* Métricas Reales de Impacto */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800/80' : 'bg-white border-zinc-200'}`}>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 dark:text-white">~5 Años</div>
                <div className={`text-xs mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Experiencia .NET & SQL</div>
              </div>
              <div className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800/80' : 'bg-white border-zinc-200'}`}>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 dark:text-white">ERP & L3</div>
                <div className={`text-xs mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Software Empresarial</div>
              </div>
              <div className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800/80' : 'bg-white border-zinc-200'}`}>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 dark:text-white">.NET 3.1 → 8</div>
                <div className={`text-xs mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Modernización Real</div>
              </div>
              <div className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800/80' : 'bg-white border-zinc-200'}`}>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 dark:text-white">React + TS</div>
                <div className={`text-xs mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Frontend SPA</div>
              </div>
            </div>

            {/* Botones de Acción Directa */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/jose-franco-702998258"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  darkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-500'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>Perfil de LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="https://github.com/JoseAFrancoG"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium border transition-all ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200'
                    : 'bg-white border-zinc-300 hover:bg-zinc-100 text-zinc-800'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={() => copyToClipboard('Jose.arleck91@hotmail.com', 'email')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200'
                    : 'bg-white border-zinc-300 hover:bg-zinc-100 text-zinc-800'
                }`}
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Correo Copiado</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <span>Jose.arleck91@hotmail.com</span>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                  </>
                )}
              </button>

              <a
                href="https://wa.me/573124108574?text=Hola%20Jos%C3%A9%2C%20vi%20tu%20portafolio%20profesional%20y%20me%20gustar%C3%ADa%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium border transition-all ${
                  darkMode
                    ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200'
                    : 'bg-white border-zinc-300 hover:bg-zinc-100 text-zinc-800'
                }`}
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+57 312 410 8574</span>
              </a>
            </div>
          </div>

          {/* Tarjeta Ejecutiva de Perfil Profesional (Reemplaza la terminal con aspecto de plantilla) */}
          <div className="lg:col-span-5 print:hidden">
            <div className={`rounded-xl border shadow-sm overflow-hidden ${
              darkMode ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white border-zinc-200'
            }`}>
              
              {/* Encabezado de la Ficha Técnica */}
              <div className={`px-5 py-4 border-b flex items-center justify-between ${
                darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Ficha Técnica Profesional</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">Bogotá, CO</span>
              </div>

              {/* Pestañas de la Ficha */}
              <div className={`px-5 py-2.5 border-b flex gap-2 ${darkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-zinc-50/50'}`}>
                <button
                  onClick={() => setProfileViewTab('resumen')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    profileViewTab === 'resumen'
                      ? darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-zinc-900'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Perfil General
                </button>
                <button
                  onClick={() => setProfileViewTab('arquitectura')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    profileViewTab === 'arquitectura'
                      ? darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-zinc-900'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Pilares de Ingeniería
                </button>
              </div>

              {/* Contenido según pestaña */}
              <div className="p-5 space-y-4 text-xs sm:text-sm">
                {profileViewTab === 'resumen' ? (
                  <>
                    <div className="space-y-1">
                      <span className="text-xs uppercase font-mono text-zinc-500 block">Título Académico</span>
                      <p className="font-semibold text-zinc-200 dark:text-zinc-100">Ingeniero de Sistemas (2024)</p>
                      <p className="text-xs text-zinc-400">Fundación de Educación Superior San José</p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-zinc-800/60">
                      <span className="text-xs uppercase font-mono text-zinc-500 block">Experiencia en Producción</span>
                      <p className="font-semibold text-zinc-200 dark:text-zinc-100">SINCOSOFT S.A.S. (4 años, 10 meses)</p>
                      <p className="text-xs text-zinc-400">Software ERP corporativo de alta concurrencia y soporte crítico L3.</p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-zinc-800/60">
                      <span className="text-xs uppercase font-mono text-zinc-500 block">Stack Central</span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {['C#', '.NET 8', '.NET Core 3.1', 'SQL Server', 'EF Core', 'React 18', 'TypeScript', 'Azure CI/CD'].map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 rounded text-xs font-mono border ${
                              darkMode
                                ? 'bg-zinc-950 border-zinc-800 text-zinc-300'
                                : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-zinc-800/60">
                      <span className="text-xs uppercase font-mono text-zinc-500 block">Diferenciador en Ingeniería</span>
                      <p className="text-xs leading-relaxed text-zinc-400">
                        Adopción sistemática de herramientas de IA (Claude Code, GitHub Copilot, Agentes) como multiplicador de productividad para documentación, testing y refactoring libre de deuda técnica.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-zinc-200">Clean Architecture & DDD:</strong>
                        <span className="text-zinc-400 text-xs">Separación estricta en capas (API, Dominio, Aplicación, Persistencia).</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-zinc-200">Transaccionalidad ACID en SQL Server:</strong>
                        <span className="text-zinc-400 text-xs">Manejo atómico de inventarios y finanzas con Rollbacks seguros.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-zinc-200">Modernización sin Disrupción:</strong>
                        <span className="text-zinc-400 text-xs">Migración por etapas de WebForms a APIs REST en .NET 8 con micro-frontends en React.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-zinc-200">Integración Continua en Azure:</strong>
                        <span className="text-zinc-400 text-xs">Pipelines automatizados de compilación y despliegue a producción.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: SOBRE MÍ / ENFOQUE PROFESIONAL */}
        <section id="sobre-mi" className="space-y-6">
          <div className="border-b pb-4 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-blue-500" />
              Perfil y Enfoque Profesional
            </h2>
            <span className="text-xs uppercase font-mono text-zinc-500">Resumen Ejecutivo</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'}`}>
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold mb-3">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-zinc-100 dark:text-white">Arquitectura & Backend</h3>
              <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Construcción de Web APIs RESTful seguras y escalables en C# .NET 8, aplicando principios SOLID, Clean Architecture, Entity Framework Core y seguridad basada en tokens JWT con roles específicos (RBAC).
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'}`}>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold mb-3">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-zinc-100 dark:text-white">Ingeniería de Datos en SQL Server</h3>
              <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Casi 5 años optimizando esquemas de datos relacionales, creación de Stored Procedures de alto desempeño, Triggers y vistas indexadas, asegurando integridad referencial y tiempos de respuesta mínimos.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'}`}>
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold mb-3">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-zinc-100 dark:text-white">Frontend Reactivo & SPA</h3>
              <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Desarrollo de interfaces de usuario modernas y modulares en React 18 y TypeScript, así como experiencia en Angular, garantizando accesibilidad, gestión limpia de estado y consumo fluido de APIs.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA LABORAL PRINCIPAL */}
        <section id="experiencia" className="space-y-6">
          <div className="border-b pb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-blue-500" />
                Experiencia Profesional
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Trayectoria laboral continua en software corporativo de alta concurrencia.
              </p>
            </div>
            <span className="text-xs uppercase font-mono text-zinc-500 hidden sm:inline">Trayectoria</span>
          </div>

          <div className={`rounded-xl border p-6 sm:p-8 ${darkMode ? 'bg-zinc-900/70 border-zinc-800' : 'bg-white border-zinc-200'}`}>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-6 border-b border-zinc-800/60">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100 dark:text-white">Desarrollador Full Stack</h3>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-semibold border ${
                    darkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                  }`}>
                    SINCOSOFT S.A.S.
                  </span>
                </div>
                <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Bogotá D.C., Colombia • Software ERP Empresarial para Sector Construcción y Misión Crítica
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-800/60 text-zinc-300 shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                <span>Ene 2022 – Oct 2026 (4 años, 10 meses)</span>
              </div>
            </div>

            {/* Logros Clave */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">
              
              <div className={`p-4 rounded-lg border ${darkMode ? 'bg-zinc-950/60 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'}`}>
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-blue-400 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span>Modernización & Desarrollo Full Stack</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Diseño, mantenimiento y evolución de módulos ERP en <strong>C#, .NET Core 3.1 y .NET 8</strong>, junto con sistemas heredados en <strong>ASP.NET WebForms (CodeBehind)</strong>. Creación de componentes e interfaces interactivas en <strong>React, Angular, TypeScript y Material UI</strong>.
                </p>
              </div>

              <div className={`p-4 rounded-lg border ${darkMode ? 'bg-zinc-950/60 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'}`}>
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-emerald-400 mb-2">
                  <Database className="w-4 h-4" />
                  <span>Ingeniería de Datos en SQL Server</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Creación y tuning exhaustivo de <strong>Stored Procedures</strong>, consultas complejas en <strong>T-SQL</strong>, Triggers y vistas indexadas. Garantía de integridad transaccional ACID y reducción comprobada de tiempos de respuesta en reportes de alta demanda.
                </p>
              </div>

              <div className={`p-4 rounded-lg border ${darkMode ? 'bg-zinc-950/60 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'}`}>
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-purple-400 mb-2">
                  <Wrench className="w-4 h-4" />
                  <span>Soporte Técnico Nivel 3 (L3) & Clientes</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Diagnóstico y resolución de bugs críticos en producción con cero tolerancia a caída de servicio. Acompañamiento directo a clientes corporativos en levantamiento de requerimientos y estabilización técnica de módulos de negocio.
                </p>
              </div>

              <div className={`p-4 rounded-lg border ${darkMode ? 'bg-zinc-950/60 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'}`}>
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-amber-400 mb-2">
                  <Cloud className="w-4 h-4" />
                  <span>Despliegues en Azure & Productividad</span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Gestión de código mediante Git / Azure Repos y despliegues con pipelines CI/CD en <strong>Microsoft Azure</strong>. Integración de flujos de IA (Claude Code, GitHub Copilot) para acelerar diagnósticos, redacción de pruebas y refactorizaciones limpias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS TÉCNICOS DESTACADOS */}
        <section id="proyectos" className="space-y-6">
          <div className="border-b pb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2.5">
                <FolderGit2 className="w-5 h-5 text-blue-500" />
                Proyectos y Casos de Arquitectura
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Haz clic en <strong>"Inspeccionar Arquitectura"</strong> para revisar el diseño en capas, endpoints y modelo SQL Server.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className={`rounded-xl border p-6 sm:p-7 transition-all ${
                  darkMode
                    ? 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="space-y-2 max-w-3xl">
                    <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                      darkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                    }`}>
                      {proj.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold">{proj.title}</h3>
                    <p className="text-xs sm:text-sm font-mono text-blue-400">{proj.subtitle}</p>
                    <p className={`text-xs sm:text-sm leading-relaxed pt-1 ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {proj.description}
                    </p>
                  </div>

                  <div className="shrink-0 print:hidden">
                    <button
                      onClick={() => setSelectedProjectModal(proj)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        darkMode
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-100 hover:bg-zinc-700'
                          : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200'
                      }`}
                    >
                      <Server className="w-3.5 h-3.5" />
                      <span>Inspeccionar Arquitectura</span>
                    </button>
                  </div>
                </div>

                {/* Aspectos Técnicos Resueltos */}
                <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-2">
                  {proj.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stack de Tecnologías */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-800/40">
                  {proj.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs font-mono px-2 py-0.5 rounded border ${
                        darkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-300'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700'
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

        {/* HABILIDADES TÉCNICAS */}
        <section id="habilidades" className="space-y-6">
          <div className="border-b pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-blue-500" />
                Competencias & Tecnologías
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Habilidades evaluadas en producción y nivel de dominio profesional.
              </p>
            </div>

            {/* Pestañas de Filtro */}
            <div className="flex flex-wrap gap-1.5 print:hidden">
              {['Todos', 'Backend & DB', 'Frontend', 'Cloud & DevOps', 'Aceleración con IA'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeSkillCategory === cat
                      ? darkMode
                        ? 'bg-zinc-100 text-zinc-950 font-semibold'
                        : 'bg-zinc-900 text-white font-semibold'
                      : darkMode
                      ? 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                      : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  skill.core
                    ? darkMode
                      ? 'bg-zinc-900/80 border-zinc-700/80'
                      : 'bg-white border-zinc-300 shadow-sm'
                    : darkMode
                    ? 'bg-zinc-900/40 border-zinc-800/80'
                    : 'bg-zinc-50/80 border-zinc-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-zinc-100 dark:text-white">{skill.name}</h4>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{skill.detail}</p>
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                    skill.core
                      ? darkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-200' : 'bg-zinc-100 border-zinc-300 text-zinc-800'
                      : darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-600'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCACIÓN Y CERTIFICACIONES */}
        <section id="educacion" className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              Educación y Formación Profesional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-zinc-100 dark:text-white">Ingeniería de Sistemas</h3>
                  <p className="text-xs sm:text-sm text-blue-500 font-medium">Fundación de Educación Superior San José</p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">2024</span>
              </div>
              <p className={`text-xs mt-2 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Formación profesional en ingeniería de software, arquitectura de sistemas empresariales, modelos de datos relacionales y gestión integral de proyectos tecnológicos.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-zinc-100 dark:text-white">Tecnólogo en Análisis y Desarrollo de Sistemas (ADSI)</h3>
                  <p className="text-xs sm:text-sm text-blue-500 font-medium">SENA — Servicio Nacional de Aprendizaje</p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">2022</span>
              </div>
              <p className={`text-xs mt-2 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Análisis estructurado de requerimientos, patrones de diseño orientado a objetos, modelado relacional en SQL y construcción de soluciones web y de escritorio.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-zinc-100 dark:text-white">Técnico en Sistemas y Redes</h3>
                  <p className="text-xs sm:text-sm text-blue-500 font-medium">SENA — Servicio Nacional de Aprendizaje</p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">2014</span>
              </div>
              <p className={`text-xs mt-2 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Fundamentos de infraestructura informática, cableado estructurado, configuración de servidores de red y mantenimiento predictivo y correctivo.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-zinc-100 dark:text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    Actualización Continua & Desarrollo con IA
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-500 font-medium">Platzi / Microsoft Learn / Cursos Especializados</p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">2026</span>
              </div>
              <p className={`text-xs mt-2 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Desarrollo Full Stack con React 18 & TypeScript, arquitectura moderna en .NET 8, despliegues continuos en Azure DevOps y flujos de automatización asistida por IA.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO PROFESIONAL PARA RECLUTADORES */}
        <section id="contacto" className={`rounded-xl border p-6 sm:p-10 text-center space-y-6 ${
          darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight">¿Conversamos sobre una oportunidad o vacante técnica?</h2>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Disponible para entrevistas técnicas, pruebas de código en vivo en C# .NET / React / SQL Server y vinculación en Bogotá (remoto, híbrido o presencial).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/573124108574?text=Hola%20Jos%C3%A9%2C%20vi%20tu%20portafolio%20profesional%20y%20me%20gustar%C3%ADa%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Directo (+57 312 410 8574)</span>
            </a>

            <a
              href="mailto:Jose.arleck91@hotmail.com"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border transition-all ${
                darkMode
                  ? 'bg-zinc-100 text-zinc-900 hover:bg-white border-transparent'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800 border-transparent'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Enviar Correo</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jose-franco-702998258"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium border transition-all ${
                darkMode
                  ? 'bg-zinc-950 border-zinc-800 hover:bg-zinc-800 text-zinc-200'
                  : 'bg-zinc-50 border-zinc-300 hover:bg-zinc-100 text-zinc-800'
              }`}
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" />
              <span>Conectar en LinkedIn</span>
            </a>
          </div>
        </section>

      </main>

      {/* PIE DE PÁGINA SOBRIO */}
      <footer className={`border-t py-8 px-4 text-center text-xs ${
        darkMode ? 'border-zinc-800 text-zinc-500' : 'border-zinc-200 text-zinc-400'
      }`}>
        <p>© {new Date().getFullYear()} José Albeiro Franco Granados • Ingeniero de Sistemas & Full Stack Software Engineer</p>
      </footer>

      {/* MODAL DE ARQUITECTURA LIMPIO */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`w-full max-w-3xl rounded-xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 ${
            darkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-100' : 'bg-white border-zinc-300 text-zinc-900'
          }`}>
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase text-blue-400">{selectedProjectModal.badge}</span>
                <h3 className="text-lg sm:text-xl font-bold mt-1">{selectedProjectModal.title}</h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">{selectedProjectModal.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Capas de Arquitectura */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                1. Diseño en Capas (Clean Architecture)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProjectModal.architecture.layers.map((layer, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
                    <div className="font-semibold text-xs text-blue-400">{layer.name}</div>
                    <p className="text-xs mt-1 text-zinc-400">{layer.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Endpoints Principales */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                2. Contrato de Endpoints REST API
              </h4>
              <div className="space-y-2">
                {selectedProjectModal.architecture.endpoints.map((ep, idx) => (
                  <div key={idx} className={`p-2.5 rounded-lg border font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className={`px-1.5 py-0.5 rounded font-bold text-[10px] ${
                        ep.method === 'GET'
                          ? 'bg-blue-500/20 text-blue-300'
                          : ep.method === 'POST'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="font-semibold text-zinc-300">{ep.path}</span>
                    </div>
                    <span className="font-sans text-zinc-400 text-xs">{ep.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modelo Relacional SQL Server */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                3. Entidades en Base de Datos (SQL Server)
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProjectModal.architecture.tables.map((tb, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-300">
                    dbo.{tb}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-100 cursor-pointer"
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
