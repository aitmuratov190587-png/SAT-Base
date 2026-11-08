## 2026-11-07T18:33:50Z
Implement a production-grade universal in-app AI assistant ("Cosmo") for SATBase capable of answering student inquiries across all platform features and SAT subjects, accompanied by an interactive animated Cosmo mascot.

Working directory: f:\Batyrbaev\SAT-Base
Integrity mode: development

## Requirements

### R1. Universal In-App AI Assistant (Cosmo)
Cosmo must serve as a comprehensive assistant capable of answering questions across all SATBase domains—including SAT Math, SAT Reading & Writing, test strategies, score analysis, and platform navigation/features—providing helpful, accurate, and context-aware responses.

### R2. Interactive Animated Cosmo Mascot
Provide an interactive, animated visual mascot representation of Cosmo within the UI that visually reacts to user interactions (such as state changes, hovering, thinking/answering, or idle states) to give Cosmo an engaging personality.

### R3. Platform & UI Integration
Cosmo and its mascot must be seamlessly integrated into the SATBase dashboard layout and navigation, allowing students to access Cosmo from any view while preserving existing study workflows and responsive layouts (desktop and mobile).

## Acceptance Criteria

### Functional Capabilities
- [ ] Cosmo assistant accurately handles general platform feature queries and SAT subject questions (Math, Reading & Writing, test strategies).
- [ ] The Cosmo mascot renders with smooth interactive animations reflecting assistant states (e.g., idle, active/talking, thinking).
- [ ] Cosmo is accessible across dashboard views and functions properly on both desktop and mobile viewports without layout collisions.

### Quality & Verification
- [ ] Existing project build (`npm run build`) and TypeScript typecheck pass with zero errors.
- [ ] Automated tests cover the assistant logic/interactions and mascot component rendering, passing cleanly in the test suite (`npm test`).
