# GUI Test Cases Template

Status: Template

GUI cases use stable `data-testid` selectors where available. These are planned GUI automation candidates, not completed Playwright tests.

| ID | Feature | Scenario | Priority | Type | Browser Scope | Status | Linked Manual Case |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GUI-001 | Login | Admin logs in and reaches dashboard | High | Smoke | Chrome | Template | MAN-001 |
| GUI-002 | Login | Invalid login displays error message | High | Negative | Chrome | Template | MAN-002 |
| GUI-003 | Navigation | Sidebar navigation reaches core pages | High | Smoke | Chrome | Template | MAN-003 |
| GUI-004 | Dashboard | Dashboard summary is visible after login | High | Smoke | Chrome | Template | MAN-003 |
| GUI-005 | Tasks | User creates task through UI form | High | Functional | Chrome | Template | MAN-004 |
| GUI-006 | Tasks | Forbidden task page shows access restriction | High | RBAC | Chrome | Template | MAN-005 |
| GUI-007 | Issues | User creates issue through UI form | High | Functional | Chrome | Template | MAN-006 |
| GUI-008 | Issues | Issue form rejects invalid date range | High | Validation | Chrome | Template | MAN-007 |
| GUI-009 | Settings | Admin loads demo data from Settings page | High | Regression | Chrome | Template | MAN-008 |
| GUI-010 | Localization | User changes UI language to Spanish | Medium | Localization | Chrome, Firefox, Edge | Template | MAN-009 |

## GUI Case Detail Template

```md
## GUI-000 - Feature - Scenario

Priority:
Type:
Browser Scope:
Linked Manual Case:

Preconditions:
- SUT is running.
- Required user exists.
- Required data state is prepared.

Selectors:
- Primary selector:
- Supporting selectors:

Steps:
1.
2.
3.

Expected Result:

Evidence on Failure:
- Screenshot:
- Trace:
- Console/network notes:

Automation Status:
```

