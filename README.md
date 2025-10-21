# Web Component Integration Examples

This repository contains two example projects demonstrating cross-framework integration using Web Components.

## Projects

### 1. Angular Project with React Web Component
**Location**: `angular-project/`

An Angular application that integrates a React component as a web component.
- Main app: Angular
- Web component: React

### 2. React Project with Angular Web Component
**Location**: `react-project/`

A React application that integrates an Angular component as a web component.
- Main app: React
- Web component: Angular

## Quick Start

### Angular Project
```bash
cd angular-project
npm install
npm run build:webcomponent
npm start
```

Visit `http://localhost:4200`

### React Project
```bash
cd react-project
npm install
npm run build:webcomponent
npm start
```

Visit `http://localhost:3000`

## What You'll Learn

These templates demonstrate:
- ✅ Cross-framework integration using Web Components
- ✅ Creating custom elements from React
- ✅ Creating custom elements from Angular using Angular Elements
- ✅ Best practices for framework-agnostic components
- ✅ Build configuration for web components

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## Use Case

These templates are perfect for:
- Learning web component basics
- Understanding cross-framework integration
- Building micro-frontends
- Creating reusable components across different frameworks
- Teaching students modern web development patterns

## Architecture

Both projects follow a similar pattern:
1. Main application (Angular or React)
2. Subdirectory containing the web component (opposite framework)
3. Build process that compiles the web component
4. Integration in the main app using custom element tags

## Notes

- Web components are framework-agnostic and can be used in any JavaScript environment
- Each web component has its own build process and dependencies
- The main app loads the compiled web component as a standard script
- Custom elements must be defined before they're used in the DOM

## Further Reading

- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Angular Elements](https://angular.io/guide/elements)
- [React and Web Components](https://react.dev/reference/react-dom/components#custom-html-elements)

