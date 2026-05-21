# Plantilla de regresión CI/CD

Estado: Plantilla

La ejecución CI/CD está planificada después de definir las capas estables de automatización API y GUI. Este documento registra la estructura prevista del pipeline sin afirmar que ya existan ejecuciones automatizadas de regresión.

| ID | Área de pipeline | Comprobación planificada | Trigger | Estado | Notas |
| --- | --- | --- | --- | --- | --- |
| CI-001 | Build | Maven build finaliza correctamente | Pull request / main | Plantilla | Confirma que el SUT compila antes de ejecutar tests. |
| CI-002 | Unit / Tests existentes | Los tests existentes del proyecto se ejecutan | Pull request / main | Plantilla | Mantiene visibles los checks actuales del proyecto. |
| CI-003 | API Smoke | Checks de autenticación, health y SUT info | Pull request / main | Plantilla | Planificado después de añadir tests API. |
| CI-004 | API Regression | Contratos de endpoints estables y checks RBAC | Scheduled / main | Plantilla | Planificado tras confirmar el comportamiento manual. |
| CI-005 | GUI Smoke | Login y navegación principal | Pull request / main | Plantilla | Planificado después de añadir tests Playwright. |
| CI-006 | GUI Regression | Flujos de navegador de alto valor | Scheduled / release candidate | Plantilla | Planificado solo para flujos estables seleccionados. |
| CI-007 | Evidence | Guardar reportes, capturas o traces cuando aporte valor | Failed run / release candidate | Plantilla | Los artefactos reales se adjuntarán solo cuando exista ejecución. |

## Plantilla de detalle CI/CD

```md
## CI-000 - Área de pipeline - Comprobación planificada

Propósito:
Trigger:
Entorno:
Secrets requeridos:
Comando de test:
Resultado esperado:
Artefactos:
Gestión de fallos:
Estado actual:
Notas:
```
