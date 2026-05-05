# protoCommerce
 
E2E test automation suite for [ProtoCommerce](https://www.protocommerce.com/) built with **Playwright + TypeScript**.
 
## What this project covers
 
ProtoCommerce is a demo e-commerce platform. This suite validates key UI components and form interactions:
 
| Test file | Scenarios covered |
|---|---|
| `header.spec.ts` | Header navigation, links, and visual consistency |
| `formularioContacto.spec.ts` | Contact form submission, field validation, and error states |
 
## Tech stack
 
- [Playwright](https://playwright.dev/) — E2E framework
- TypeScript — strongly-typed test code
- **Page Object Model (POM)** — pages and components encapsulated under `Pages/`
- **Validator utilities** — custom validation helpers under `utils/Validator/` for reusable assertion logic
- **GitHub Actions** — CI pipeline runs on every push
## Project structure
 
```
├── .github/workflows/        # CI pipeline
├── Pages/                    # Page Object Model
│   ├── Component/            # Reusable UI component classes
│   └── FormPage.ts           # Contact form page object
├── tests/                    # Spec files
│   ├── header.spec.ts
│   └── formularioContacto.spec.ts
├── utils/
│   └── Validator/
│       ├── formSubmissionValidator.ts   # Form validation helpers
│       └── headerValidator.ts           # Header assertion helpers
└── playwright.config.ts
```
 
## How to run
 
```bash
# Install dependencies
npm install
 
# Install browsers
npx playwright install
 
# Run all tests
npx playwright test
 
# Run with UI mode
npx playwright test --ui
 
# Run a specific test file
npx playwright test tests/formularioContacto.spec.ts
```
 
## CI
 
Tests run automatically on every push via GitHub Actions. See `.github/workflows/` for the pipeline configuration.
