# Plantilla de escenarios de testing manual

Estado: Plantilla

Los escenarios manuales se documentan a nivel de escenario, no por cada pequeño clic. Cada escenario debe incluir suficiente detalle para reproducir la validación y decidir después si conviene automatizarlo por API o GUI.

| ID | Funcionalidad | Escenario | Prioridad | Tipo | Rol | Entorno | Estado | Candidato de automatización |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAN-001 | Login | Login válido de admin abre el dashboard | Alta | Smoke | Admin | LOCAL-H2 | Plantilla | GUI |
| MAN-002 | Login | Credenciales inválidas muestran error de login | Alta | Negativo | Anónimo | LOCAL-H2 | Plantilla | GUI |
| MAN-003 | Dashboard | El dashboard carga con datos seed por defecto | Alta | Smoke | Admin | LOCAL-H2 | Plantilla | API + GUI |
| MAN-004 | Tasks | Un usuario crea una tarea con datos válidos | Alta | Funcional | User | LOCAL-H2 | Plantilla | API + GUI |
| MAN-005 | Tasks | Un usuario no puede acceder a tareas de otro usuario | Alta | RBAC | User | LOCAL-H2 | Plantilla | API + GUI |
| MAN-006 | Issues | Un usuario crea un issue asignado a otro usuario | Alta | Funcional | User | LOCAL-H2 | Plantilla | API + GUI |
| MAN-007 | Issues | Se rechaza un issue con fecha fin anterior a la fecha inicio | Alta | Validación | User | LOCAL-H2 | Plantilla | API + GUI |
| MAN-008 | Settings | Admin carga datos demo desde Settings | Alta | Regresión | Admin | LOCAL-H2 | Plantilla | API + GUI |
| MAN-009 | Localización | La UI en español está disponible desde el selector de idioma | Media | Localización | User | LOCAL-H2 | Plantilla | GUI |
| MAN-010 | Attachments | Se rechaza un attachment de issue con tipo no soportado | Alta | Negativo | User | LOCAL-H2 | Plantilla | API + GUI |

## Plantilla de detalle de escenario

```md
## MAN-000 - [Entorno] - [Rol] - [Escenario] - [Funcionalidad] - [Tipo]

Prioridad:
Etiquetas:
Rol:
Entorno:
Candidato de automatización:

Requisito / Regla de negocio:

Precondiciones:
- El SUT está ejecutándose.
- El usuario requerido existe.
- Los datos de prueba necesarios están cargados.

| Paso | Datos | Resultado esperado |
| --- | --- | --- |
| 1. |  |  |
| 2. |  |  |
| 3. |  |  |

Resultado actual:

Estado:

Evidencia:

Defecto asociado:
```
