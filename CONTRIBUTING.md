# Contributing to DEEPSEA FINVEST

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and configure
4. Run development server: `npm run dev`

## Code Standards

### TypeScript
- Use strict TypeScript types
- Avoid `any` types when possible
- Export types from `src/types/index.ts`

### Code Style
- Run `npm run format` before committing
- Follow ESLint rules: `npm run lint`
- Use functional components with hooks
- Keep components under 200 lines

### Naming Conventions
- Components: PascalCase (e.g., `GlassButton.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case for non-components

## Commit Messages

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Tests
- `chore:` Maintenance

Example: `feat: add lead export functionality`

## Pull Request Process

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes
3. Run tests: `npm run type-check && npm run lint`
4. Commit with conventional commits
5. Push and create PR
6. Wait for review

## Questions?

Contact the maintainers or open an issue.
