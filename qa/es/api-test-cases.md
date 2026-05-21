# Plantilla de casos de prueba API

Estado: Plantilla

Los casos API se planifican después de entender el comportamiento manual. Estos placeholders definen los primeros candidatos de automatización sin afirmar que los tests ya existan.

| ID | Endpoint / Área | Escenario | Prioridad | Tipo | Contexto de auth | Estado | Caso manual relacionado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| API-001 | `POST /api/auth/login` | Login válido devuelve JWT e identidad del usuario | Alta | Smoke | Anónimo | Plantilla | MAN-001 |
| API-002 | `POST /api/auth/login` | Login inválido devuelve error unauthorized | Alta | Negativo | Anónimo | Plantilla | MAN-002 |
| API-003 | `GET /api/health` | Health endpoint devuelve estado UP | Alta | Smoke | Anónimo | Plantilla | MAN-003 |
| API-004 | `GET /api/dashboard/summary` | El resumen del dashboard devuelve la estructura esperada | Alta | Contrato | JWT Admin | Plantilla | MAN-003 |
| API-005 | `POST /api/tasks` | Usuario crea tarea con payload válido | Alta | Funcional | JWT User | Plantilla | MAN-004 |
| API-006 | `GET /api/tasks/{id}` | Usuario no puede leer la tarea de otro usuario | Alta | RBAC | JWT User | Plantilla | MAN-005 |
| API-007 | `POST /api/issues` | Usuario crea issue con payload válido | Alta | Funcional | JWT User | Plantilla | MAN-006 |
| API-008 | `POST /api/issues` | Rango de fechas inválido devuelve error de validación | Alta | Validación | JWT User | Plantilla | MAN-007 |
| API-009 | `POST /api/test-data/demo` | Admin carga datos demo deterministas | Alta | Regresión | JWT Admin | Plantilla | MAN-008 |
| API-010 | `POST /api/issues/{id}/comments/{commentId}/attachments` | Upload con tipo no soportado es rechazado | Alta | Negativo | JWT User | Plantilla | MAN-010 |

## Plantilla de detalle de caso API

```md
## API-000 - Endpoint - Escenario

Prioridad:
Tipo:
Contexto de auth:
Caso manual relacionado:

Precondiciones:
- El perfil test o local está disponible.
- El token del usuario requerido está disponible.
- El estado de datos requerido está preparado.

Request:
- Método:
- Ruta:
- Headers:
- Body / Params:

Respuesta esperada:
- Status:
- Contrato:
- Assertions importantes:

Notas negativas / edge:

Estado de automatización:
```
