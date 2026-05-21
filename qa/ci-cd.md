# CI/CD Regression Template

Status: Template

CI/CD execution is planned after the stable API and GUI automation layers are defined. This document records the intended pipeline structure without claiming that automated regression runs already exist.

| ID | Pipeline Area | Planned Check | Trigger | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| CI-001 | Build | Maven build completes successfully | Pull request / main | Template | Confirms the SUT can compile before test execution. |
| CI-002 | Unit / Existing Tests | Existing project tests execute | Pull request / main | Template | Keeps current project checks visible. |
| CI-003 | API Smoke | Authentication, health, and SUT info checks | Pull request / main | Template | Planned after API tests are added. |
| CI-004 | API Regression | Stable endpoint contract and RBAC checks | Scheduled / main | Template | Planned after manual behavior is confirmed. |
| CI-005 | GUI Smoke | Login and core navigation checks | Pull request / main | Template | Planned after Playwright tests are added. |
| CI-006 | GUI Regression | High-value browser flows | Scheduled / release candidate | Template | Planned for selected stable flows only. |
| CI-007 | Evidence | Store reports, screenshots, or traces when useful | Failed run / release candidate | Template | Real artifacts will be attached only after execution exists. |

## CI/CD Detail Template

```md
## CI-000 - Pipeline Area - Planned Check

Purpose:
Trigger:
Environment:
Required Secrets:
Test Command:
Expected Result:
Artifacts:
Failure Handling:
Current Status:
Notes:
```
