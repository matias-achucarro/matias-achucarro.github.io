(function () {
  const fallbackUi = {
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
  };

  const fallbackDocs = [
    { id: "manual", page: "manual-test-scenarios.html", md: "manual-test-scenarios.md", label: "Manual Test Scenarios.md", eyebrow: "Manual QA", title: "Manual Test Scenarios", description: "Structured manual test scenarios for the QA Task Manager SUT.", meta: "Manual QA documentation preview for the QA Task Manager SUT project." },
    { id: "api", page: "api-test-cases.html", md: "api-test-cases.md", label: "API Test Cases.md", eyebrow: "API QA", title: "API Test Cases", description: "Endpoint-level API test case templates prepared for the QA Task Manager SUT.", meta: "API test case documentation preview for the QA Task Manager SUT project." },
    { id: "gui", page: "gui-test-cases.html", md: "gui-test-cases.md", label: "GUI Test Cases.md", eyebrow: "GUI QA", title: "GUI Test Cases", description: "Browser-level GUI test case templates based on stable UI selectors.", meta: "GUI test case documentation preview for the QA Task Manager SUT project." },
    { id: "defects", page: "defect-reports.html", md: "defect-reports.md", label: "Defects.md", eyebrow: "Defects", title: "Defect Reports", description: "Defect report templates for issues found during validation.", meta: "Defect report documentation preview for the QA Task Manager SUT project." },
    { id: "evidence", page: "evidence-records.html", md: "evidence-records.md", label: "Evidence.md", eyebrow: "Evidence", title: "Evidence Records", description: "Evidence templates for QA artifacts.", meta: "Evidence record documentation preview for the QA Task Manager SUT project." },
    { id: "traceability", page: "traceability-matrix.html", md: "traceability-matrix.md", label: "Traceability.md", eyebrow: "Traceability", title: "Traceability Matrix", description: "Requirement-to-test mapping templates.", meta: "Traceability matrix documentation preview for the QA Task Manager SUT project." },
    { id: "ci", page: "ci-cd.html", md: "ci-cd.md", label: "CI_CD.md", eyebrow: "CI/CD", title: "CI/CD Regression", description: "CI/CD documentation template for planned automated execution.", meta: "CI/CD regression documentation preview for the QA Task Manager SUT project." }
  ];

  const i18n = window.PortfolioI18n;
  const body = document.body;
  let activeDocId = body.dataset.currentDoc || "manual";
  let activeRecords = [];
  let tableRenderIndex = 0;

  const elements = {
    eyebrow: document.querySelector("[data-doc-eyebrow]"),
    title: document.querySelector("[data-doc-title]"),
    description: document.querySelector("[data-doc-description]"),
    select: document.querySelector("[data-doc-select]"),
    list: document.querySelector("[data-doc-list]"),
    content: document.querySelector("[data-markdown-content]"),
    pager: document.querySelector("[data-doc-pager]"),
    rawLinks: document.querySelectorAll("[data-raw-files]"),
    backLinks: document.querySelectorAll(".doc-back-link, .doc-hero-actions .button.secondary"),
    previewTitle: document.querySelector("#documentation-preview-title"),
    previewDescription: document.querySelector(".doc-preview-header p"),
    selectLabel: document.querySelector(".doc-select-label span")
  };

  render(activeDocId);
  window.addEventListener("portfolio:languagechange", () => render(activeDocId));

  if (elements.select) {
    elements.select.addEventListener("change", () => render(elements.select.value));
  }

  if (elements.list) {
    elements.list.addEventListener("click", (event) => {
      const button = event.target.closest("[data-doc-id]");
      if (button) render(button.dataset.docId);
    });
  }

  elements.content?.addEventListener("click", (event) => {
    const row = event.target.closest("[data-record-index]");
    if (row) showRecord(activeRecords, Number(row.dataset.recordIndex));
  });

  function getDocs() {
    return i18n?.getDocs?.() || fallbackDocs;
  }

  function getUi() {
    return i18n?.getDocsUi?.() || fallbackUi;
  }

  function render(docId) {
    const docs = getDocs();
    const ui = getUi();
    const docsById = new Map(docs.map((doc) => [doc.id, doc]));
    const doc = docsById.get(docId) || docs[0];
    const index = docs.indexOf(doc);
    activeDocId = doc.id;

    document.title = `${doc.title} | ${ui.fileTitleSuffix}`;
    setMeta('meta[name="description"]', doc.meta || doc.description);

    elements.rawLinks.forEach((link) => {
      link.href = ui.rawFilesUrl;
      link.textContent = ui.viewRawFiles;
    });
    elements.backLinks.forEach((link) => {
      link.href = ui.projectUrl;
      link.textContent = ui.backToProject;
    });
    if (elements.previewTitle) elements.previewTitle.textContent = ui.previewTitle;
    if (elements.previewDescription) elements.previewDescription.textContent = ui.previewDescription;
    if (elements.selectLabel) elements.selectLabel.textContent = ui.selectFile;
    if (elements.select) elements.select.setAttribute("aria-label", ui.selectFileAria);
    if (elements.list) elements.list.setAttribute("aria-label", ui.documentationFiles);
    if (elements.pager) elements.pager.setAttribute("aria-label", `${ui.previous} / ${ui.next}`);
    if (elements.eyebrow) elements.eyebrow.textContent = doc.eyebrow;
    if (elements.title) elements.title.textContent = doc.title;
    if (elements.description) elements.description.textContent = doc.description;

    renderSelector(docs, doc);
    renderFileList(docs, doc, ui);
    renderPager(docs[index - 1], docs[index + 1], ui);
    loadMarkdown(doc, ui);
  }

  function renderSelector(docs, activeDoc) {
    if (!elements.select) return;
    elements.select.innerHTML = docs.map((doc) => `<option value="${doc.id}">${doc.label}</option>`).join("");
    elements.select.value = activeDoc.id;
  }

  function renderFileList(docs, activeDoc, ui) {
    if (!elements.list) return;
    elements.list.innerHTML = `
      <p>${escapeHtml(ui.documentationFiles)}</p>
      ${docs
        .map((doc) => `
          <button class="doc-file-button" type="button" data-doc-id="${doc.id}">
            <span class="doc-file-icon" aria-hidden="true">${fileIcon(doc.id)}</span>
            <span>${escapeHtml(doc.label)}</span>
          </button>
        `)
        .join("")}
    `;

    elements.list.querySelectorAll("[data-doc-id]").forEach((button) => {
      const isActive = button.dataset.docId === activeDoc.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  function renderPager(previous, next, ui) {
    if (!elements.pager) return;
    const previousHtml = previous
      ? `<a class="doc-nav-card" href="${previous.page}"><span>${ui.previous}</span><strong>${previous.title}</strong></a>`
      : `<a class="doc-nav-card" href="${ui.projectUrl}"><span>${ui.previous}</span><strong>${ui.qaProject}</strong></a>`;
    const nextHtml = next
      ? `<a class="doc-nav-card doc-nav-card-next" href="${next.page}"><span>${ui.next}</span><strong>${next.title}</strong></a>`
      : `<a class="doc-nav-card doc-nav-card-next" href="${ui.projectUrl}"><span>${ui.next}</span><strong>${ui.qaProject}</strong></a>`;
    elements.pager.innerHTML = `${previousHtml}${nextHtml}`;
  }

  async function loadMarkdown(doc, ui) {
    if (!elements.content) return;
    const format = i18n?.format || ((template, params) => template.replace(/\{label\}/g, params.label));
    elements.content.innerHTML = `<p class="doc-loading">${escapeHtml(format(ui.loading, { label: doc.label }))}</p>`;

    try {
      const response = await fetch(doc.md, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const markdown = await response.text();
      renderDetailPanel(markdown, ui);
      elements.content.innerHTML = renderMarkdown(markdown);
      if (activeRecords.length) showRecord(activeRecords, 0, ui);
    } catch (error) {
      renderDetailPanel("", ui);
      elements.content.innerHTML = `
        <h2>${escapeHtml(doc.title)}</h2>
        <p>${escapeHtml(ui.loadError)}</p>
        <p><a href="${doc.md}">${escapeHtml(format(ui.openFile, { label: doc.label }))}</a></p>
      `;
    }
  }

  function renderDetailPanel(markdown, ui) {
    const records = extractPrimaryTable(markdown);
    let panel = document.querySelector("[data-record-panel]");
    const previewPanel = document.querySelector(".doc-preview-panel");
    if (!previewPanel) return;

    if (!panel) {
      panel = document.createElement("section");
      panel.className = "record-detail-panel";
      panel.setAttribute("data-record-panel", "");
      previewPanel.insertBefore(panel, document.querySelector(".doc-viewer-grid"));
      panel.addEventListener("change", (event) => {
        if (event.target.matches("[data-record-select]")) {
          showRecord(activeRecords, Number(event.target.value), getUi());
        }
      });
    }

    activeRecords = records;
    if (!records.length) {
      panel.hidden = true;
      return;
    }

    panel.hidden = false;
    panel.innerHTML = `
      <div class="record-detail-header">
        <div>
          <h3>${escapeHtml(ui.caseDetail)}</h3>
          <p>${escapeHtml(ui.caseDetailText)}</p>
        </div>
        <label>
          <span>${escapeHtml(ui.selectRecord)}</span>
          <select data-record-select aria-label="${escapeHtml(ui.selectRecordAria)}">
            ${records.map((record, index) => `<option value="${index}">${escapeHtml(recordTitle(record, index))}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="record-detail-body" data-record-detail></div>
    `;
    showRecord(records, 0, ui);
  }

  function extractPrimaryTable(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    for (let index = 0; index < lines.length; index += 1) {
      if (!isTableStart(lines, index)) continue;
      const tableLines = [];
      while (index < lines.length && lines[index].includes("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }
      const rows = tableLines
        .filter((_, rowIndex) => rowIndex !== 1)
        .map((row) => row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()));
      const headers = rows.shift() || [];
      return rows.map((row) => {
        const record = {};
        headers.forEach((header, cellIndex) => {
          record[header] = row[cellIndex] || "";
        });
        return record;
      });
    }
    return [];
  }

  function recordTitle(record, index) {
    const id = firstValue(record, ["ID"]) || `Record ${index + 1}`;
    const scenario = firstValue(record, ["Scenario", "Escenario", "Planned Check", "Comprobación planificada", "Title", "Título", "Type", "Tipo", "Requirement / Rule", "Requisito / Regla", "Pipeline Area", "Área de pipeline"]);
    return scenario ? `${id} - ${stripMarkdown(scenario)}` : id;
  }

  function showRecord(records, index, ui = getUi()) {
    const detail = document.querySelector("[data-record-detail]");
    const select = document.querySelector("[data-record-select]");
    const record = records[index] || records[0];
    if (!detail || !record) return;
    if (select) select.value = String(index);
    document.querySelectorAll("[data-record-index]").forEach((row) => {
      row.classList.toggle("is-selected", Number(row.dataset.recordIndex) === index);
    });

    const category = firstValue(record, ["Feature", "Funcionalidad", "Endpoint / Area", "Endpoint / Área", "Evidence Type", "Tipo de evidencia", "Pipeline Area", "Área de pipeline"]) || ui.qaRecord;
    const heading = firstValue(record, ["Scenario", "Escenario", "Planned Check", "Comprobación planificada", "Title", "Título", "Requirement / Rule", "Requisito / Regla", "ID"]) || ui.selectedRecord;

    detail.innerHTML = `
      <header>
        <p>${escapeHtml(category)}</p>
        <h4>${inline(heading)}</h4>
      </header>
      <dl>
        ${Object.entries(record)
          .map(([key, value]) => `<div><dt>${escapeHtml(key)}</dt><dd>${inline(value || ui.emptyValue)}</dd></div>`)
          .join("")}
      </dl>
    `;
  }

  function renderMarkdown(markdown) {
    tableRenderIndex = 0;
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const html = [];
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];
      if (!line.trim()) {
        index += 1;
        continue;
      }
      if (line.startsWith("```")) {
        const code = [];
        index += 1;
        while (index < lines.length && !lines[index].startsWith("```")) {
          code.push(lines[index]);
          index += 1;
        }
        index += 1;
        html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        continue;
      }
      const heading = line.match(/^(#{1,4})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
        index += 1;
        continue;
      }
      if (isTableStart(lines, index)) {
        const tableLines = [];
        while (index < lines.length && lines[index].includes("|")) {
          tableLines.push(lines[index]);
          index += 1;
        }
        html.push(renderTable(tableLines));
        continue;
      }
      if (/^\s*[-*]\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
          items.push(lines[index].replace(/^\s*[-*]\s+/, ""));
          index += 1;
        }
        html.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
        continue;
      }
      if (/^\s*\d+\.\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
          items.push(lines[index].replace(/^\s*\d+\.\s+/, ""));
          index += 1;
        }
        html.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ol>`);
        continue;
      }
      const paragraph = [line];
      index += 1;
      while (index < lines.length && lines[index].trim() && !lines[index].startsWith("```") && !/^(#{1,4})\s+/.test(lines[index]) && !isTableStart(lines, index) && !/^\s*[-*]\s+/.test(lines[index]) && !/^\s*\d+\.\s+/.test(lines[index])) {
        paragraph.push(lines[index]);
        index += 1;
      }
      html.push(`<p>${inline(paragraph.join(" "))}</p>`);
    }
    return html.join("");
  }

  function isTableStart(lines, index) {
    return Boolean(lines[index] && lines[index + 1] && lines[index].includes("|") && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(lines[index + 1]));
  }

  function renderTable(tableLines) {
    const rows = tableLines
      .filter((_, index) => index !== 1)
      .map((row) => row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()));
    const header = rows.shift() || [];
    const isPrimaryTable = tableRenderIndex === 0;
    const bodyRows = rows.map((row, index) => `<tr${isPrimaryTable ? ` data-record-index="${index}"` : ""}>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("");
    tableRenderIndex += 1;
    return `
      <div class="markdown-table-wrap">
        <table>
          <thead><tr>${header.map((cell) => `<th>${inline(cell)}</th>`).join("")}</tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
    `;
  }

  function firstValue(record, keys) {
    for (const key of keys) {
      if (record[key]) return record[key];
    }
    return "";
  }

  function inline(text) {
    return escapeHtml(text)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function stripMarkdown(value) {
    return String(value).replace(/`/g, "").replace(/\*\*/g, "");
  }

  function setMeta(selector, value) {
    const element = document.head.querySelector(selector);
    if (element && value !== undefined) element.setAttribute("content", value);
  }

  function fileIcon(id) {
    return { manual: "M", api: "A", gui: "G", defects: "D", evidence: "E", traceability: "T", ci: "CI" }[id] || "D";
  }
})();
