import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AnnotationContextProvider } from './AnnotationStore'

ReactDOM.render(
  <AnnotationContextProvider>
    <App />
  </AnnotationContextProvider>,
  document.getElementById('root')
);