# Evidence Records Template

Status: Template

Evidence records connect QA execution to proof: screenshots, API responses, execution reports, traces, logs, and defect attachments.

| ID | Evidence Type | Related Case | Environment | Source | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| EVD-001 | Screenshot | MAN-001 | LOCAL-H2 | TBD | Template | Login/dashboard proof. |
| EVD-002 | Screenshot | MAN-002 | LOCAL-H2 | TBD | Template | Invalid login proof. |
| EVD-003 | API response | API-001 | LOCAL-H2 | TBD | Template | Auth response sample. |
| EVD-004 | API response | API-008 | LOCAL-H2 | TBD | Template | Validation error sample. |
| EVD-005 | Execution report | MAN-001..MAN-010 | LOCAL-H2 | TBD | Template | Manual execution summary. |
| EVD-006 | Browser trace | GUI-001 | LOCAL-H2 | TBD | Template | Future GUI trace artifact. |
| EVD-007 | CI log | API-001..API-010 | GitHub Actions | TBD | Template | Future API test run. |
| EVD-008 | CI log | GUI-001..GUI-010 | GitHub Actions | TBD | Template | Future GUI test run. |
| EVD-009 | Defect screenshot | DEF-001 | TBD | TBD | Template | Real defect only. |
| EVD-010 | Traceability export | TRC-001..TRC-010 | N/A | TBD | Template | Requirement-to-test mapping. |

## Evidence Detail Template

```md
## EVD-000 - Evidence title

Evidence Type:
Related Case / Defect:
Environment:
Browser:
SUT Version:
Source Path / Link:
Captured By:
Captured Date:

What This Evidence Shows:

Notes:
```

