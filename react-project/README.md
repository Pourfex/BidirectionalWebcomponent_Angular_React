# React Project with Angular Web Component

This project demonstrates how to integrate an Angular web component into a React application.

## Project Structure

```
react-project/
├── src/                          # React application source
│   ├── App.js                    # Main React component
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── angular-webcomponent/         # Angular web component
│   ├── src/
│   │   ├── app/
│   │   │   └── greeting.component.ts  # Angular component
│   │   └── main.ts               # Web component registration
│   ├── angular.json
│   ├── tsconfig.json
│   └── package.json
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will automatically install dependencies for both the React project and the Angular web component.

### 2. Build the Angular Web Component

```bash
npm run build:webcomponent
```

This builds the Angular component as a web component that can be used in React.

### 3. Run the React Application

```bash
npm start
```

The application will be available at `http://localhost:3000`

## How It Works

1. **Angular Web Component**: Located in `angular-webcomponent/`, this folder contains a simple Angular component that is exported as a custom element using `@angular/elements`.

2. **Web Component Registration**: The Angular component is registered as `<angular-greeting>` using Angular Elements.

3. **Bundling**: The build process combines `runtime.js`, `polyfills.js`, and `main.js` into a single file for easy integration.

4. **React Integration**: The React app loads the bundled web component script in the HTML head, making the custom element available throughout the application.

## Development Workflow

1. Make changes to the Angular component in `angular-webcomponent/src/app/`
2. Rebuild the web component: `npm run build:webcomponent`
3. The React app will automatically pick up the changes on reload

## Key Files

- `src/App.js` - Main React component that uses the Angular web component
- `angular-webcomponent/src/app/greeting.component.ts` - The Angular component
- `angular-webcomponent/src/main.ts` - Registers Angular component as web component
- `public/index.html` - Includes the web component script

## Communication Between Frameworks

This template demonstrates **bi-directional communication** between React and the Angular web component:

### 1. Parent to Web Component (React → Angular)
- **Input Field in React**: Type a message in the input field using React state
- **Property Binding**: React uses a `ref` and `useEffect` to set the attribute on the web component when state changes
- **Web Component Receives**: Angular Elements automatically exposes `@Input()` properties as attributes
- **Real-time Update**: The message appears instantly in the Angular web component

### 2. Web Component to Parent (Angular → React)
- **Button in Web Component**: Click "Send to Main App" button in the Angular web component
- **Custom Event**: The web component emits a custom event `imageSent` with the image path
- **Event Listener**: React listens for the event using `addEventListener` in a `useEffect` hook
- **Display in Parent**: The image is received and displayed in the main React application

## Learning Points

This template demonstrates:
- Creating web components from Angular using Angular Elements
- Using custom elements in React
- Cross-framework integration
- Modern web component standards
- Angular standalone components
- **Passing data from parent to web component** using attributes and refs
- Angular `@Input()` decorator for web component properties
- **Angular `@Output()` and EventEmitter** for emitting custom events
- **Listening to custom events** in React using `addEventListener`
- **Bi-directional communication** between frameworks
- Handling images and assets in Angular web components

