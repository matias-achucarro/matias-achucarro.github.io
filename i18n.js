(function () {
  const storageKey = "portfolio-language";
  const supportedLanguages = ["en", "es"];

  const docsEn = [
    ["manual", "manual-test-scenarios.html", "manual-test-scenarios.md", "Manual Test Scenarios.md", "Manual QA", "Manual Test Scenarios", "Structured manual test scenarios for the QA Task Manager SUT. This page documents the planned manual validation coverage, including authentication, tasks, issues, RBAC, validation, attachments, and regression flows.", "Manual QA documentation preview for the QA Task Manager SUT project."],
    ["api", "api-test-cases.html", "api-test-cases.md", "API Test Cases.md", "API QA", "API Test Cases", "Endpoint-level API test case templates prepared for authentication, contracts, validation, RBAC, and deterministic test-data workflows.", "API test case documentation preview for the QA Task Manager SUT project."],
    ["gui", "gui-test-cases.html", "gui-test-cases.md", "GUI Test Cases.md", "GUI QA", "GUI Test Cases", "Browser-level GUI test case templates based on stable UI selectors and manually validated user flows.", "GUI test case documentation preview for the QA Task Manager SUT project."],
    ["defects", "defect-reports.html", "defect-reports.md", "Defects.md", "Defects", "Defect Reports", "Defect report templates for issues found during validation. These slots are structure only and do not represent real bugs until QA execution starts.", "Defect report documentation preview for the QA Task Manager SUT project."],
    ["evidence", "evidence-records.html", "evidence-records.md", "Evidence.md", "Evidence", "Evidence Records", "Evidence templates for screenshots, API responses, execution reports, traces, logs, and traceability exports.", "Evidence record documentation preview for the QA Task Manager SUT project."],
    ["traceability", "traceability-matrix.html", "traceability-matrix.md", "Traceability.md", "Traceability", "Traceability Matrix", "Requirement-to-test mapping templates linking business rules, manual cases, API cases, GUI cases, evidence, and defects.", "Traceability matrix documentation preview for the QA Task Manager SUT project."],
    ["ci", "ci-cd.html", "ci-cd.md", "CI_CD.md", "CI/CD", "CI/CD Regression", "CI/CD documentation template for planned automated execution, regression checks, reporting, and release confidence signals.", "CI/CD regression documentation preview for the QA Task Manager SUT project."]
  ];

  const docsEs = [
    ["manual", "manual-test-scenarios.html", "es/manual-test-scenarios.md", "Escenarios manuales.md", "QA manual", "Escenarios de testing manual", "Escenarios manuales estructurados para QA Task Manager SUT. Esta página documenta la cobertura manual planificada, incluyendo autenticación, tareas, issues, RBAC, validación, attachments y flujos de regresión.", "Vista de documentación QA manual para el proyecto QA Task Manager SUT."],
    ["api", "api-test-cases.html", "es/api-test-cases.md", "Casos API.md", "QA API", "Casos de prueba API", "Plantillas de casos API a nivel endpoint preparadas para autenticación, contratos, validación, RBAC y flujos deterministas de test data.", "Vista de documentación de casos API para el proyecto QA Task Manager SUT."],
    ["gui", "gui-test-cases.html", "es/gui-test-cases.md", "Casos GUI.md", "QA GUI", "Casos de prueba GUI", "Plantillas de casos GUI a nivel navegador basadas en selectores UI estables y flujos de usuario validados manualmente.", "Vista de documentación de casos GUI para el proyecto QA Task Manager SUT."],
    ["defects", "defect-reports.html", "es/defect-reports.md", "Defectos.md", "Defectos", "Reportes de defectos", "Plantillas de defect reports para issues encontrados durante la validación. Estos registros son solo estructura y no representan bugs reales hasta que empiece la ejecución QA.", "Vista de documentación de reportes de defectos para el proyecto QA Task Manager SUT."],
    ["evidence", "evidence-records.html", "es/evidence-records.md", "Evidencia.md", "Evidencia", "Registros de evidencia", "Plantillas de evidencia para capturas, respuestas API, reportes de ejecución, traces, logs y exportaciones de trazabilidad.", "Vista de documentación de evidencias para el proyecto QA Task Manager SUT."],
    ["traceability", "traceability-matrix.html", "es/traceability-matrix.md", "Trazabilidad.md", "Trazabilidad", "Matriz de trazabilidad", "Plantillas de mapeo requisito-a-prueba que conectan reglas de negocio, casos manuales, casos API, casos GUI, evidencia y defectos.", "Vista de documentación de trazabilidad para el proyecto QA Task Manager SUT."],
    ["ci", "ci-cd.html", "es/ci-cd.md", "CI_CD.md", "CI/CD", "Regresión CI/CD", "Plantilla de documentación CI/CD para ejecución automatizada planificada, checks de regresión, reporting y señales de confianza para release.", "Vista de documentación CI/CD para el proyecto QA Task Manager SUT."]
  ];

  const toDocs = (items) => items.map(([id, page, md, label, eyebrow, title, description, meta]) => ({
    id,
    page,
    md,
    label,
    eyebrow,
    title,
    description,
    meta
  }));

  const dictionaries = {
    en: {
      common: {
        navLabel: "Main navigation",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        languageLabel: "Language selector",
        english: "English",
        spanish: "Spanish"
      },
      meta: {
        homeTitle: "Matías Achucarro | QA Tester",
        homeDescription: "Personal QA portfolio for Matías Achucarro, QA Tester.",
        socialTitle: "Matías Achucarro | QA Tester",
        socialDescription: "QA portfolio focused on manual testing, API validation, regression testing, evidence, traceability, and automation foundations.",
        socialAlt: "Matías Achucarro QA Tester portfolio preview",
        projectTitle: "QA Task Manager SUT | Matías Achucarro",
        projectDescription: "QA Task Manager SUT project page for Matías Achucarro's QA portfolio."
      },
      home: {
        role: "QA Tester",
        tagline: "QA Tester with manual testing experience and growing automation skills",
        intro: "I build and document practical QA projects that demonstrate manual testing, API validation, regression coverage, defect reporting, traceability, and automation foundations.",
        viewProjects: "View Projects",
        github: "GitHub",
        contact: "Contact",
        workflowTitle: "QA workflow",
        workflow: ["Requirements review", "Test scenarios", "Manual execution", "API validation", "Evidence & defects", "Regression automation"],
        aboutTitle: "About me",
        aboutCards: [
          ["Manual QA experience", "Experience validating tickets, reproducing defects, executing regression tests, performing exploratory testing, retesting, and supporting pre-release validation."],
          ["API and data validation", "Experience using Postman, Swagger when available, SQL queries, and backend responses to validate system behavior beyond the UI."],
          ["Growing automation skills", "Building automation practice with Java, Selenium WebDriver, Playwright, Cypress, GitHub, CI/CD, Docker, and structured QA documentation."]
        ],
        skillsTitle: "Skills",
        skillGroups: [
          ["Manual Testing", ["Manual QA", "Regression Testing", "Exploratory Testing", "Retesting", "Pre-release Testing", "Defect Reporting"]],
          ["API & Data", ["API Testing", "Postman", "Swagger", "SQL validation", "Backend response checks"]],
          ["Automation", ["Selenium WebDriver with Java", "Playwright with Java", "Cypress with JavaScript", "Page Object Model", "Regression automation"]],
          ["Tools & Environment", ["Git / GitHub", "GitLab tickets", "CI/CD", "Docker", "Linux environments"]]
        ],
        featured: "Featured project",
        projectTitle: "QA Task Manager SUT",
        projectDescription: "A practical QA project built around a task management system used as a System Under Test. It demonstrates manual QA, API testing, automation, evidence, defects, traceability, and CI regression.",
        tags: ["Manual QA", "API Testing", "Automation", "RBAC", "Evidence", "CI/CD"],
        viewProject: "View Project",
        viewRepository: "View Repository",
        viewDocumentation: "View Documentation",
        contactEyebrow: "Contact",
        contactTitle: "Interested in QA roles?",
        contactText: "I am looking for QA Tester opportunities where I can contribute with manual testing experience while continuing to grow in automation.",
        contactCards: {
          githubLabel: "GitHub",
          githubHelper: "View repositories and QA projects",
          linkedinLabel: "LinkedIn",
          linkedinHelper: "Professional profile",
          emailLabel: "Email",
          emailHelper: "Copy email address or send directly",
          copyEmail: "Copy email",
          sendEmail: "Send email",
          copyEmailAria: "Copy email address machucarroortiz@gmail.com",
          copied: "Copied",
          copyFailed: "Copy failed"
        }
      },
      project: {
        backToProjects: "Back to Projects",
        backToProjectsAria: "Back to portfolio projects",
        description: "A practical QA project built around a task management system used as a System Under Test to demonstrate manual testing, API validation, automation, defect reporting, evidence, traceability, and CI regression.",
        viewRepository: "View Repository",
        viewDocumentation: "View Documentation",
        tags: ["Manual QA", "API Testing", "Automation", "RBAC", "Evidence", "CI/CD"],
        previewAria: "QA Task Manager SUT dashboard screenshot",
        previewAlt: "QA Task Manager dashboard with workload cards, task status, issue status, and charts",
        demonstratesTitle: "What this project demonstrates",
        demonstrates: [
          ["Manual Test Design", "Structured scenarios for core user workflows."],
          ["API Validation", "Backend validation using API checks and SQL."],
          ["RBAC Testing", "Role-based access control and permissions."],
          ["Defect Management", "Bug reporting with clear steps and evidence."],
          ["Evidence Collection", "Screenshots, logs, and artifacts for traceability."],
          ["Regression Automation", "Stable flows prepared for repeated execution."],
          ["CI/CD Execution", "Automated regression strategy for pipeline checks."],
          ["Traceability", "Linking requirements, tests, defects, and evidence."]
        ],
        screenshotsTitle: "SUT Screenshots",
        screenshotsText: "Real application screens from the current SUT. API evidence, defect reports, and test execution reports will be added when those QA phases start.",
        screenshots: [
          ["RBAC / seeded users", "Login", "Authentication entry point used to exercise role-based behavior.", "QA Task Manager login screen showing seeded admin and user credentials"],
          ["Overview", "Dashboard", "Main SUT overview with workload, task status, issue status, and summary panels.", "QA Task Manager dashboard showing task and issue overview cards"],
          ["Task management", "Tasks", "Task listing used for status, priority, ownership, filtering, and action checks.", "QA Task Manager tasks list with statuses, priorities, due dates, owners, and actions"],
          ["Issue tracking", "Issues", "Issue list used to validate tracking, filters, status transitions, and ownership.", "QA Task Manager issues list with statuses, priorities, dates, assignees, and actions"]
        ],
        detailsAria: "Project details",
        techStack: "Tech Stack",
        application: "Application / SUT",
        testing: "Testing",
        workflowEnvironment: "Workflow / Environment",
        testingItems: ["Manual QA", "API Testing", "Postman", "SQL validation", "Regression strategy"],
        workflowItems: ["Git / GitHub", "Docker Compose", "GitHub Pages documentation"],
        qaScope: "QA Scope",
        area: "Area",
        whatIsTested: "What is tested",
        scopeRows: [
          ["Authentication", "Login, invalid credentials, user access, and session behavior."],
          ["Tasks", "Create, edit, complete, delete, validation, and task ownership."],
          ["Issues", "Creation, labels, assignments, comments, and status transitions."],
          ["RBAC", "Admin vs regular user permissions and access to protected resources."],
          ["Attachments", "Valid files, unsupported files, size limits, and permissions."],
          ["API", "Status codes, validation, data integrity, and permissions."],
          ["Regression", "Critical user flows prepared for repeated execution."]
        ],
        statsAria: "Project stats",
        statsTitle: "Project Stats",
        stats: [["Type", "Personal QA Project"], ["Focus", "Manual + API + Automation"], ["Status", "Active"], ["Repository", "View on GitHub"]],
        documentationTitle: "Documentation",
        documentationText: "Explore all areas of the project in detail.",
        docs: [
          ["Manual Testing", "Test scenarios, execution notes, exploratory testing, and regression coverage."],
          ["API Testing", "Endpoint validation, status codes, negative cases, and backend checks."],
          ["Automation", "UI/API automation strategy, tools, framework structure, and regression coverage."],
          ["Evidence", "Screenshots, logs, execution results, and supporting test artifacts."],
          ["Defects", "Bug reports, reproduction steps, expected vs actual results, and severity."],
          ["Traceability", "Relationship between requirements, scenarios, tests, evidence, and defects."],
          ["CI/CD", "Automated execution strategy and regression checks in the pipeline."]
        ],
        cta: "This project is designed to showcase a complete QA process from requirements to regression.",
        backToPortfolio: "Back to Portfolio"
      },
      docsUi: {
        projectUrl: "../projects/qa-task-manager/",
        rawFilesUrl: "https://github.com/matias-achucarro/matias-achucarro.github.io/tree/main/qa",
        backToProject: "Back to QA Project",
        viewRawFiles: "View raw files",
        previewTitle: "Documentation Preview",
        previewDescription: "Select a documentation file to preview its rendered Markdown content.",
        selectFile: "Select file",
        selectFileAria: "Select documentation file",
        documentationFiles: "Documentation files",
        loading: "Loading {label}...",
        loadError: "The Markdown preview could not be loaded in this browser context.",
        openFile: "Open {label}",
        previous: "Previous",
        next: "Next",
        qaProject: "QA Project",
        caseDetail: "Case detail",
        caseDetailText: "Select a row from the documentation file to inspect it as a structured QA record.",
        selectRecord: "Select case / record",
        selectRecordAria: "Select documentation record",
        qaRecord: "QA record",
        selectedRecord: "Selected record",
        emptyValue: "TBD",
        fileTitleSuffix: "Matías Achucarro"
      },
      docs: toDocs(docsEn)
    },
    es: {
      common: {
        navLabel: "Navegación principal",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        languageLabel: "Selector de idioma",
        english: "Inglés",
        spanish: "Español"
      },
      meta: {
        homeTitle: "Matías Achucarro | QA Tester",
        homeDescription: "Portfolio QA de Matías Achucarro, QA Tester.",
        socialTitle: "Matías Achucarro | QA Tester",
        socialDescription: "Portfolio QA enfocado en testing manual, validación API, regresión, evidencia, trazabilidad y bases de automatización.",
        socialAlt: "Vista previa del portfolio QA de Matías Achucarro",
        projectTitle: "QA Task Manager SUT | Matías Achucarro",
        projectDescription: "Página del proyecto QA Task Manager SUT dentro del portfolio QA de Matías Achucarro."
      },
      home: {
        role: "QA Tester",
        tagline: "QA Tester con experiencia en testing manual y habilidades de automatización en crecimiento",
        intro: "Construyo y documento proyectos QA prácticos que muestran testing manual, validación API, cobertura de regresión, reporte de defectos, trazabilidad y bases de automatización.",
        viewProjects: "Ver proyectos",
        github: "GitHub",
        contact: "Contacto",
        workflowTitle: "Flujo QA",
        workflow: ["Revisión de requisitos", "Escenarios de prueba", "Ejecución manual", "Validación API", "Evidencia y defectos", "Automatización de regresión"],
        aboutTitle: "Sobre mí",
        aboutCards: [
          ["Experiencia en QA manual", "Experiencia validando tickets, reproduciendo defectos, ejecutando pruebas de regresión, realizando testing exploratorio, retesting y apoyando validaciones previas a release."],
          ["Validación API y datos", "Experiencia usando Postman, Swagger cuando está disponible, consultas SQL y respuestas backend para validar el comportamiento del sistema más allá de la UI."],
          ["Crecimiento en automatización", "Desarrollando práctica de automatización con Java, Selenium WebDriver, Playwright, Cypress, GitHub, CI/CD, Docker y documentación QA estructurada."]
        ],
        skillsTitle: "Habilidades",
        skillGroups: [
          ["Testing manual", ["QA manual", "Testing de regresión", "Testing exploratorio", "Retesting", "Validación pre-release", "Reporte de defectos"]],
          ["API y datos", ["API Testing", "Postman", "Swagger", "Validación SQL", "Validaciones de respuestas backend"]],
          ["Automatización", ["Selenium WebDriver con Java", "Playwright con Java", "Cypress con JavaScript", "Page Object Model", "Automatización de regresión"]],
          ["Herramientas y entorno", ["Git / GitHub", "Tickets en GitLab", "CI/CD", "Docker", "Entornos Linux"]]
        ],
        featured: "Proyecto destacado",
        projectTitle: "QA Task Manager SUT",
        projectDescription: "Un proyecto QA práctico construido alrededor de un sistema de gestión de tareas usado como System Under Test. Demuestra QA manual, API testing, automatización, evidencia, defectos, trazabilidad y regresión en CI.",
        tags: ["QA manual", "API Testing", "Automatización", "RBAC", "Evidencia", "CI/CD"],
        viewProject: "Ver proyecto",
        viewRepository: "Ver repositorio",
        viewDocumentation: "Ver documentación",
        contactEyebrow: "Contacto",
        contactTitle: "¿Te interesa mi perfil QA?",
        contactText: "Busco oportunidades como QA Tester donde pueda aportar experiencia en testing manual mientras sigo creciendo en automatización.",
        contactCards: {
          githubLabel: "GitHub",
          githubHelper: "Ver repositorios y proyectos QA",
          linkedinLabel: "LinkedIn",
          linkedinHelper: "Perfil profesional",
          emailLabel: "Email",
          emailHelper: "Copiar email o enviar un mensaje directamente",
          copyEmail: "Copiar email",
          sendEmail: "Enviar email",
          copyEmailAria: "Copiar dirección de email machucarroortiz@gmail.com",
          copied: "Copiado",
          copyFailed: "No se pudo copiar"
        }
      },
      project: {
        backToProjects: "Volver a proyectos",
        backToProjectsAria: "Volver a los proyectos del portfolio",
        description: "Un proyecto QA práctico construido alrededor de un sistema de gestión de tareas usado como System Under Test para demostrar testing manual, validación API, automatización, reporte de defectos, evidencia, trazabilidad y regresión en CI.",
        viewRepository: "Ver repositorio",
        viewDocumentation: "Ver documentación",
        tags: ["QA manual", "API Testing", "Automatización", "RBAC", "Evidencia", "CI/CD"],
        previewAria: "Captura del dashboard de QA Task Manager SUT",
        previewAlt: "Dashboard de QA Task Manager con tarjetas de carga de trabajo, estado de tareas, estado de issues y gráficos",
        demonstratesTitle: "Qué demuestra este proyecto",
        demonstrates: [
          ["Diseño manual", "Escenarios para flujos clave."],
          ["Validación API", "Checks backend con API y SQL."],
          ["Testing RBAC", "Roles, permisos y accesos."],
          ["Gestión de bugs", "Reportes con pasos y evidencia."],
          ["Evidencia", "Capturas, logs y artefactos."],
          ["Regresión", "Flujos estables repetibles."],
          ["CI/CD", "Ejecución prevista en pipeline."],
          ["Trazabilidad", "Requisitos, tests y evidencia."]
        ],
        screenshotsTitle: "Capturas del SUT",
        screenshotsText: "Pantallas reales de la aplicación actual. La evidencia API, los reportes de defectos y los reportes de ejecución se añadirán cuando empiecen esas fases QA.",
        screenshots: [
          ["RBAC / usuarios seed", "Login", "Punto de entrada de autenticación usado para ejercitar comportamiento por roles.", "Pantalla de login de QA Task Manager con credenciales seed de admin y usuarios"],
          ["Overview", "Dashboard", "Vista principal del SUT con workload, estado de tareas, estado de issues y paneles de resumen.", "Dashboard de QA Task Manager mostrando tarjetas de tareas e issues"],
          ["Gestión de tareas", "Tasks", "Listado de tareas usado para validar estado, prioridad, ownership, filtros y acciones.", "Listado de tasks de QA Task Manager con estados, prioridades, fechas, owners y acciones"],
          ["Seguimiento de issues", "Issues", "Listado de issues usado para validar tracking, filtros, transiciones de estado y ownership.", "Listado de issues de QA Task Manager con estados, prioridades, fechas, asignados y acciones"]
        ],
        detailsAria: "Detalles del proyecto",
        techStack: "Stack técnico",
        application: "Aplicación / SUT",
        testing: "Testing",
        workflowEnvironment: "Workflow / Entorno",
        testingItems: ["QA manual", "API Testing", "Postman", "Validación SQL", "Estrategia de regresión"],
        workflowItems: ["Git / GitHub", "Docker Compose", "Documentación en GitHub Pages"],
        qaScope: "Alcance QA",
        area: "Área",
        whatIsTested: "Qué se valida",
        scopeRows: [
          ["Autenticación", "Login, credenciales inválidas, acceso de usuarios y comportamiento de sesión."],
          ["Tasks", "Crear, editar, completar, eliminar, validación y ownership de tareas."],
          ["Issues", "Creación, labels, asignaciones, comentarios y transiciones de estado."],
          ["RBAC", "Permisos de admin frente a usuario regular y acceso a recursos protegidos."],
          ["Attachments", "Archivos válidos, archivos no soportados, límites de tamaño y permisos."],
          ["API", "Códigos de estado, validación, integridad de datos y permisos."],
          ["Regresión", "Flujos críticos preparados para ejecución repetida."]
        ],
        statsAria: "Datos del proyecto",
        statsTitle: "Datos del proyecto",
        stats: [["Tipo", "Proyecto QA personal"], ["Enfoque", "Manual + API + Automatización"], ["Estado", "Activo"], ["Repositorio", "Ver en GitHub"]],
        documentationTitle: "Documentación",
        documentationText: "Explora cada área del proyecto en detalle.",
        docs: [
          ["Testing manual", "Escenarios de prueba, notas de ejecución, testing exploratorio y cobertura de regresión."],
          ["API Testing", "Validación de endpoints, códigos de estado, casos negativos y comprobaciones backend."],
          ["Automatización", "Estrategia de automatización UI/API, herramientas, estructura del framework y cobertura de regresión."],
          ["Evidencia", "Capturas, logs, resultados de ejecución y artefactos de soporte."],
          ["Defectos", "Bug reports, pasos de reproducción, resultado esperado vs actual y severidad."],
          ["Trazabilidad", "Relación entre requisitos, escenarios, pruebas, evidencia y defectos."],
          ["CI/CD", "Estrategia de ejecución automatizada y checks de regresión en pipeline."]
        ],
        cta: "Este proyecto está diseñado para mostrar un proceso QA completo desde requisitos hasta regresión.",
        backToPortfolio: "Volver al portfolio"
      },
      docsUi: {
        projectUrl: "../projects/qa-task-manager/",
        rawFilesUrl: "https://github.com/matias-achucarro/matias-achucarro.github.io/tree/main/qa/es",
        backToProject: "Volver al proyecto QA",
        viewRawFiles: "Ver archivos fuente",
        previewTitle: "Vista de documentación",
        previewDescription: "Selecciona un archivo de documentación para previsualizar su contenido Markdown renderizado.",
        selectFile: "Seleccionar archivo",
        selectFileAria: "Seleccionar archivo de documentación",
        documentationFiles: "Archivos de documentación",
        loading: "Cargando {label}...",
        loadError: "La vista Markdown no se pudo cargar en este contexto del navegador.",
        openFile: "Abrir {label}",
        previous: "Anterior",
        next: "Siguiente",
        qaProject: "Proyecto QA",
        caseDetail: "Detalle del caso",
        caseDetailText: "Selecciona un registro de la documentación para revisarlo como artefacto QA estructurado.",
        selectRecord: "Seleccionar caso / registro",
        selectRecordAria: "Seleccionar registro de documentación",
        qaRecord: "Registro QA",
        selectedRecord: "Registro seleccionado",
        emptyValue: "Pendiente",
        fileTitleSuffix: "Matías Achucarro"
      },
      docs: toDocs(docsEs)
    }
  };

  function normalizeLanguage(language) {
    if (typeof language !== "string" || !language.trim()) return null;
    const languageCode = language.toLowerCase().split(/[-_]/)[0];
    return supportedLanguages.includes(languageCode) ? languageCode : null;
  }

  function getStoredLanguage() {
    try {
      const stored = window.localStorage.getItem(storageKey);
      return normalizeLanguage(stored);
    } catch (error) {
      return null;
    }
  }

  function getIntlLanguage() {
    try {
      return normalizeLanguage(Intl.DateTimeFormat().resolvedOptions().locale);
    } catch (error) {
      return null;
    }
  }

  function getBrowserLanguage() {
    const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    const primaryBrowserLanguage = normalizeLanguage(browserLanguages[0]);
    const intlLanguage = getIntlLanguage();

    if (intlLanguage === "es" && primaryBrowserLanguage !== "es") {
      return intlLanguage;
    }

    for (const language of [...browserLanguages, navigator.language, navigator.userLanguage, navigator.browserLanguage, intlLanguage]) {
      const supportedLanguage = normalizeLanguage(language);
      if (supportedLanguage) return supportedLanguage;
    }

    return "en";
  }

  function getLanguage() {
    return getStoredLanguage() || getBrowserLanguage();
  }

  function getCopy() {
    return dictionaries[getLanguage()] || dictionaries.en;
  }

  function setLanguage(language) {
    const nextLanguage = normalizeLanguage(language) || "en";
    try {
      window.localStorage.setItem(storageKey, nextLanguage);
    } catch (error) {
      // The current render still updates even if storage is unavailable.
    }
    applyTranslations();
    window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language: nextLanguage } }));
  }

  function setText(selector, value, root = document) {
    const element = root.querySelector(selector);
    if (element && value !== undefined) element.textContent = value;
  }

  function setTextAll(selector, values, root = document) {
    root.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] !== undefined) element.textContent = values[index];
    });
  }

  function setOwnText(selector, value, root = document) {
    const element = root.querySelector(selector);
    if (!element || value === undefined) return;
    Array.from(element.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .forEach((node) => node.remove());
    element.appendChild(document.createTextNode(value));
  }

  function setAttr(selector, attr, value, root = document) {
    const element = root.querySelector(selector);
    if (element && value !== undefined) element.setAttribute(attr, value);
  }

  function setMeta(selector, value) {
    const element = document.head.querySelector(selector);
    if (element && value !== undefined) element.setAttribute("content", value);
  }

  function injectLanguageSwitch() {
    const navLinks = document.querySelector(".nav-links");
    if (!navLinks || document.querySelector("[data-language-switch]")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "language-switch";
    wrapper.setAttribute("data-language-switch", "");
    wrapper.innerHTML = `
      <button type="button" data-lang-option="en">EN</button>
      <span aria-hidden="true">|</span>
      <button type="button" data-lang-option="es">ES</button>
    `;
    navLinks.appendChild(wrapper);

    wrapper.addEventListener("click", (event) => {
      const button = event.target.closest("[data-lang-option]");
      if (button) setLanguage(button.dataset.langOption);
    });
  }

  function updateLanguageSwitch() {
    const language = getLanguage();
    const copy = getCopy();
    const switcher = document.querySelector("[data-language-switch]");
    if (switcher) switcher.setAttribute("aria-label", copy.common.languageLabel);

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const active = button.dataset.langOption === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.setAttribute("aria-label", button.dataset.langOption === "en" ? copy.common.english : copy.common.spanish);
    });
  }

  function applyCommon() {
    const copy = getCopy();
    document.documentElement.lang = getLanguage();
    setAttr(".nav", "aria-label", copy.common.navLabel);
    setText('.nav-links a[href$="#about"]', copy.common.about);
    setText('.nav-links a[href$="#skills"]', copy.common.skills);
    setText('.nav-links a[href$="#projects"]', copy.common.projects);
    setText('.nav-links a[href$="#contact"]', copy.common.contact);
    updateLanguageSwitch();
  }

  function applyHead(title, description) {
    document.title = title;
    setMeta('meta[name="description"]', description);
  }

  function applyHome() {
    const copy = getCopy();
    const home = copy.home;
    applyHead(copy.meta.homeTitle, copy.meta.homeDescription);
    setMeta('meta[property="og:title"]', copy.meta.socialTitle);
    setMeta('meta[property="og:description"]', copy.meta.socialDescription);
    setMeta('meta[property="og:image:alt"]', copy.meta.socialAlt);
    setMeta('meta[name="twitter:title"]', copy.meta.socialTitle);
    setMeta('meta[name="twitter:description"]', copy.meta.socialDescription);

    setText(".role", home.role);
    setText(".tagline", home.tagline);
    setText(".intro", home.intro);
    setOwnText('.hero-actions .button.primary', home.viewProjects);
    setOwnText('.hero-actions .button.secondary[href*="github.com"]', home.github);
    setOwnText('.hero-actions .button.secondary[href^="mailto:"]', home.contact);
    setText(".workflow-card h2", home.workflowTitle);
    setTextAll(".workflow-card strong", home.workflow);
    setText(".about-section h2", home.aboutTitle);
    document.querySelectorAll(".about-cards .info-card").forEach((card, index) => {
      setText("h3", home.aboutCards[index]?.[0], card);
      setText("p", home.aboutCards[index]?.[1], card);
    });
    setText(".skills-section h2", home.skillsTitle);
    document.querySelectorAll(".skills-grid .skill-card").forEach((card, index) => {
      setText("h3", home.skillGroups[index]?.[0], card);
      setTextAll("li", home.skillGroups[index]?.[1] || [], card);
    });
    setText(".projects-section .eyebrow", home.featured);
    setText(".projects-section .section-heading h2", home.projectTitle);
    setText(".projects-section .section-heading > p:not(.eyebrow)", home.projectDescription);
    setTextAll(".featured-project .badge-row span", home.tags);
    setOwnText('.project-actions .button.primary[href*="qa-task-manager"]', home.viewProject);
    setOwnText('.project-actions .button.secondary[href*="github.com"]', home.viewRepository);
    setOwnText('.project-actions .button.secondary[href*="manual-test-scenarios"]', home.viewDocumentation);
    setText(".contact-copy .eyebrow", home.contactEyebrow);
    setText(".contact-section h2", home.contactTitle);
    setText(".contact-copy p:last-child", home.contactText);
    setText(".github-card .contact-label", home.contactCards.githubLabel);
    setText(".github-card .contact-helper", home.contactCards.githubHelper);
    setText(".linkedin-card .contact-label", home.contactCards.linkedinLabel);
    setText(".linkedin-card .contact-helper", home.contactCards.linkedinHelper);
    setText(".email-card .contact-label", home.contactCards.emailLabel);
    setText(".email-card .contact-helper", home.contactCards.emailHelper);
    setText(".email-copy-button", home.contactCards.copyEmail);
    setText(".email-send-link", home.contactCards.sendEmail);
    setAttr(".email-copy-button", "aria-label", home.contactCards.copyEmailAria);
  }

  function applyProject() {
    const copy = getCopy();
    const project = copy.project;
    applyHead(copy.meta.projectTitle, copy.meta.projectDescription);
    setAttr(".back-link", "aria-label", project.backToProjectsAria);
    setOwnText(".back-link", project.backToProjects);
    setText(".case-hero-copy > p", project.description);
    setOwnText('.case-actions .button.primary[href*="github.com"]', project.viewRepository);
    setOwnText('.case-actions .button.secondary[href*="manual-test-scenarios"]', project.viewDocumentation);
    setTextAll(".case-hero .badge-row span", project.tags);
    setAttr(".browser-preview", "aria-label", project.previewAria);
    setAttr(".sut-hero-image", "alt", project.previewAlt);
    setText(".case-section h2", project.demonstratesTitle);
    document.querySelectorAll(".demonstrates-grid .mini-card").forEach((card, index) => {
      setText("h3", project.demonstrates[index]?.[0], card);
      setText("p", project.demonstrates[index]?.[1], card);
    });
    setText("#sut-screenshots-title", project.screenshotsTitle);
    setText(".sut-screenshots-section .case-section-heading p", project.screenshotsText);
    document.querySelectorAll(".sut-screenshot-card").forEach((card, index) => {
      const item = project.screenshots[index] || [];
      setText(".sut-shot-copy span", item[0], card);
      setText(".sut-shot-copy h3", item[1], card);
      setText(".sut-shot-copy p", item[2], card);
      setAttr("img", "alt", item[3], card);
    });
    setAttr(".case-main-grid", "aria-label", project.detailsAria);
    setText(".tech-card h2", project.techStack);
    setTextAll(".tech-columns h3", [project.application, project.testing, project.workflowEnvironment]);
    setTextAll(".tech-columns div:nth-child(2) li", project.testingItems);
    setTextAll(".tech-columns div:nth-child(3) li", project.workflowItems);
    setText(".qa-scope-card h2", project.qaScope);
    setTextAll(".scope-table th", [project.area, project.whatIsTested]);
    document.querySelectorAll(".scope-table tbody tr").forEach((row, index) => {
      setTextAll("td", project.scopeRows[index] || [], row);
    });
    setAttr(".project-stats-card", "aria-label", project.statsAria);
    setText(".project-stats-card h2", project.statsTitle);
    document.querySelectorAll(".stats-list div").forEach((row, index) => {
      setText("dt", project.stats[index]?.[0], row);
      const dd = row.querySelector("dd");
      if (!dd || !project.stats[index]) return;
      if (index === 3) {
        const link = dd.querySelector("a");
        if (link?.firstChild) link.firstChild.textContent = project.stats[index][1] + " ";
      } else {
        dd.textContent = project.stats[index][1];
      }
    });
    setText(".documentation-section .case-section-heading h2", project.documentationTitle);
    setText(".documentation-section .case-section-heading p", project.documentationText);
    document.querySelectorAll(".documentation-grid .doc-link-card").forEach((card, index) => {
      setText("h3", project.docs[index]?.[0], card);
      setText("p", project.docs[index]?.[1], card);
    });
    setText(".case-cta p", project.cta);
    setOwnText(".case-cta .button", project.backToPortfolio);
  }

  function applyTranslations() {
    injectLanguageSwitch();
    applyCommon();
    if (document.body.classList.contains("case-page")) {
      applyProject();
      return;
    }
    if (document.body.classList.contains("doc-viewer-page")) return;
    applyHome();
  }

  function format(template, params = {}) {
    return String(template || "").replace(/\{(\w+)\}/g, (_, key) => params[key] || "");
  }

  function t(path, fallback = "") {
    const value = path.split(".").reduce((current, key) => current?.[key], getCopy());
    return value === undefined ? fallback : value;
  }

  window.PortfolioI18n = {
    getLanguage,
    setLanguage,
    getCopy,
    getDocs() {
      return getCopy().docs;
    },
    getDocsUi() {
      return getCopy().docsUi;
    },
    t,
    format,
    applyTranslations
  };

  document.addEventListener("DOMContentLoaded", applyTranslations);
})();
