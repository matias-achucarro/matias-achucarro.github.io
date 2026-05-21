# Plantilla de registros de evidencia

Estado: Plantilla

Los registros de evidencia conectan la ejecución QA con pruebas verificables: capturas, respuestas API, reportes de ejecución, traces, logs y adjuntos de defectos.

| ID | Tipo de evidencia | Caso relacionado | Entorno | Fuente | Estado | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| EVD-001 | Captura | MAN-001 | LOCAL-H2 | Pendiente | Plantilla | Evidencia de login/dashboard. |
| EVD-002 | Captura | MAN-002 | LOCAL-H2 | Pendiente | Plantilla | Evidencia de login inválido. |
| EVD-003 | Respuesta API | API-001 | LOCAL-H2 | Pendiente | Plantilla | Muestra de respuesta de auth. |
| EVD-004 | Respuesta API | API-008 | LOCAL-H2 | Pendiente | Plantilla | Muestra de error de validación. |
| EVD-005 | Reporte de ejecución | MAN-001..MAN-010 | LOCAL-H2 | Pendiente | Plantilla | Resumen de ejecución manual. |
| EVD-006 | Browser trace | GUI-001 | LOCAL-H2 | Pendiente | Plantilla | Futuro artefacto de trace GUI. |
| EVD-007 | Log CI | API-001..API-010 | GitHub Actions | Pendiente | Plantilla | Futura ejecución de tests API. |
| EVD-008 | Log CI | GUI-001..GUI-010 | GitHub Actions | Pendiente | Plantilla | Futura ejecución de tests GUI. |
| EVD-009 | Captura de defecto | DEF-001 | Pendiente | Pendiente | Plantilla | Solo defecto real. |
| EVD-010 | Export de trazabilidad | TRC-001..TRC-010 | N/A | Pendiente | Plantilla | Mapeo requisito-a-prueba. |

## Plantilla de detalle de evidencia

```md
## EVD-000 - Título de evidencia

Tipo de evidencia:
Caso / Defecto relacionado:
Entorno:
Navegador:
Versión del SUT:
Ruta / Link fuente:
Capturado por:
Fecha de captura:

Qué demuestra esta evidencia:

Notas:
```
