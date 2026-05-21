# Plantilla de casos de prueba GUI

Estado: Plantilla

Los casos GUI usan selectores `data-testid` estables cuando están disponibles. Son candidatos planificados para automatización GUI, no tests de Playwright ya completados.

| ID | Funcionalidad | Escenario | Prioridad | Tipo | Alcance de navegador | Estado | Caso manual relacionado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GUI-001 | Login | Admin hace login y llega al dashboard | Alta | Smoke | Chrome | Plantilla | MAN-001 |
| GUI-002 | Login | Login inválido muestra mensaje de error | Alta | Negativo | Chrome | Plantilla | MAN-002 |
| GUI-003 | Navegación | La navegación lateral llega a las páginas principales | Alta | Smoke | Chrome | Plantilla | MAN-003 |
| GUI-004 | Dashboard | El resumen del dashboard es visible tras login | Alta | Smoke | Chrome | Plantilla | MAN-003 |
| GUI-005 | Tasks | Usuario crea tarea mediante formulario UI | Alta | Funcional | Chrome | Plantilla | MAN-004 |
| GUI-006 | Tasks | Página de tarea prohibida muestra restricción de acceso | Alta | RBAC | Chrome | Plantilla | MAN-005 |
| GUI-007 | Issues | Usuario crea issue mediante formulario UI | Alta | Funcional | Chrome | Plantilla | MAN-006 |
| GUI-008 | Issues | El formulario de issue rechaza rango de fechas inválido | Alta | Validación | Chrome | Plantilla | MAN-007 |
| GUI-009 | Settings | Admin carga datos demo desde la página Settings | Alta | Regresión | Chrome | Plantilla | MAN-008 |
| GUI-010 | Localización | Usuario cambia el idioma de la UI a español | Media | Localización | Chrome, Firefox, Edge | Plantilla | MAN-009 |

## Plantilla de detalle de caso GUI

```md
## GUI-000 - Funcionalidad - Escenario

Prioridad:
Tipo:
Alcance de navegador:
Caso manual relacionado:

Precondiciones:
- El SUT está ejecutándose.
- El usuario requerido existe.
- El estado de datos requerido está preparado.

Selectores:
- Selector principal:
- Selectores de soporte:

Pasos:
1.
2.
3.

Resultado esperado:

Evidencia en fallo:
- Screenshot:
- Trace:
- Notas de consola/network:

Estado de automatización:
```
