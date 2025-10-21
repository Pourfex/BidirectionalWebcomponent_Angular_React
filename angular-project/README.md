# Angular Project with React Web Component

This project demonstrates how to integrate a React web component into an Angular application.

## Project Structure

```
angular-project/
├── src/                          # Angular application source
│   ├── app/
│   │   └── app.component.ts      # Main Angular component
│   ├── main.ts
│   └── index.html
├── react-webcomponent/           # React web component
│   ├── src/
│   │   ├── ReactGreeting.jsx     # React component
│   │   └── index.js              # Web component wrapper
│   ├── package.json
│   └── webpack.config.js
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will automatically install dependencies for both the Angular project and the React web component.

### 2. Build the React Web Component

```bash
npm run build:webcomponent
```

This builds the React component as a web component that can be used in Angular.

### 3. Run the Angular Application

```bash
npm start
```

The application will be available at `http://localhost:4200`

## How It Works

1. **React Web Component**: Located in `react-webcomponent/`, this folder contains a simple React component that is wrapped as a custom element (web component).

2. **Web Component Registration**: The React component is registered as `<react-greeting>` using the Custom Elements API.

3. **Angular Integration**: The Angular app includes `CUSTOM_ELEMENTS_SCHEMA` to allow using custom elements, and the web component script is loaded via `angular.json`.

## Development Workflow

1. Make changes to the React component in `react-webcomponent/src/`
2. Rebuild the web component: `npm run build:webcomponent`
3. The Angular app will automatically pick up the changes on reload

## Key Files

- `src/app/app.component.ts` - Main Angular component that uses the React web component
- `react-webcomponent/src/ReactGreeting.jsx` - The React component
- `react-webcomponent/src/index.js` - Wraps React component as a web component
- `angular.json` - Configured to include the web component script

## Learning Points

This template demonstrates:
- Creating web components from React
- Using custom elements in Angular
- Cross-framework integration
- Modern web component standards

