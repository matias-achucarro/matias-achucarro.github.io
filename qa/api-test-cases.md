# API Test Cases Template

Status: Template

API cases are planned after manual behavior is understood. These placeholders define the first automation candidates without claiming that the tests already exist.

| ID | Endpoint / Area | Scenario | Priority | Type | Auth Context | Status | Linked Manual Case |
| --- | --- | --- | --- | --- | --- | --- | --- |
| API-001 | `POST /api/auth/login` | Valid login returns JWT and user identity | High | Smoke | Anonymous | Template | MAN-001 |
| API-002 | `POST /api/auth/login` | Invalid login returns unauthorized error | High | Negative | Anonymous | Template | MAN-002 |
| API-003 | `GET /api/health` | Health endpoint returns UP status | High | Smoke | Anonymous | Template | MAN-003 |
| API-004 | `GET /api/dashboard/summary` | Dashboard summary returns expected structure | High | Contract | Admin JWT | Template | MAN-003 |
| API-005 | `POST /api/tasks` | User creates task with valid payload | High | Functional | User JWT | Template | MAN-004 |
| API-006 | `GET /api/tasks/{id}` | User cannot read another user's task | High | RBAC | User JWT | Template | MAN-005 |
| API-007 | `POST /api/issues` | User creates issue with valid payload | High | Functional | User JWT | Template | MAN-006 |
| API-008 | `POST /api/issues` | Invalid date range returns validation error | High | Validation | User JWT | Template | MAN-007 |
| API-009 | `POST /api/test-data/demo` | Admin loads deterministic demo data | High | Regression | Admin JWT | Template | MAN-008 |
| API-010 | `POST /api/issues/{id}/comments/{commentId}/attachments` | Unsupported upload type is rejected | High | Negative | User JWT | Template | MAN-010 |

## API Case Detail Template

```md
## API-000 - Endpoint - Scenario

Priority:
Type:
Auth Context:
Linked Manual Case:

Preconditions:
- Test profile or local profile is available.
- Required user token is available.
- Required data state is prepared.

Request:
- Method:
- Path:
- Headers:
- Body / Params:

Expected Response:
- Status:
- Contract:
- Important assertions:

Negative / Edge Notes:

Automation Status:
```

