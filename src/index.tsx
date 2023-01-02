// import './styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import './styles.scss';

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<App />);

