# Manual Test Scenarios Template

Status: Template

Manual scenarios are documented at scenario level, not every tiny click. Each scenario should include enough detail to reproduce the validation and later decide whether it becomes API or GUI automation.

| ID | Feature | Scenario | Priority | Type | Role | Environment | Status | Automation Candidate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAN-001 | Login | Valid admin login opens dashboard | High | Smoke | Admin | LOCAL-H2 | Template | GUI |
| MAN-002 | Login | Invalid credentials show login error | High | Negative | Anonymous | LOCAL-H2 | Template | GUI |
| MAN-003 | Dashboard | Dashboard loads with default seed data | High | Smoke | Admin | LOCAL-H2 | Template | API + GUI |
| MAN-004 | Tasks | User creates a task with valid data | High | Functional | User | LOCAL-H2 | Template | API + GUI |
| MAN-005 | Tasks | User cannot access another user's task | High | RBAC | User | LOCAL-H2 | Template | API + GUI |
| MAN-006 | Issues | User creates an issue assigned to another user | High | Functional | User | LOCAL-H2 | Template | API + GUI |
| MAN-007 | Issues | Issue end date before start date is rejected | High | Validation | User | LOCAL-H2 | Template | API + GUI |
| MAN-008 | Settings | Admin loads demo data from Settings | High | Regression | Admin | LOCAL-H2 | Template | API + GUI |
| MAN-009 | Localization | Spanish UI is available from language selector | Medium | Localization | User | LOCAL-H2 | Template | GUI |
| MAN-010 | Attachments | Unsupported issue attachment type is rejected | High | Negative | User | LOCAL-H2 | Template | API + GUI |

## Scenario Detail Template

```md
## MAN-000 - [Environment] - [Role] - [Scenario] - [Feature] - [Type]

Priority:
Labels:
Role:
Environment:
Automation Candidate:

Requirement / Business Rule:

Preconditions:
- SUT is running.
- Required user exists.
- Required test data is loaded.

| Step | Data | Expected Result |
| --- | --- | --- |
| 1. |  |  |
| 2. |  |  |
| 3. |  |  |

Actual Result:

Status:

Evidence:

Defect Link:
```

