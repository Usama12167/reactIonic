import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Provider } from "react-redux";
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container!);
defineCustomElements(window);
console.log("container");

root.render(
  <React.StrictMode>
    <App />
   </React.StrictMode>
);