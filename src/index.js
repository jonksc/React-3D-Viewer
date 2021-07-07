import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AnnotationContextProvider } from './AnnotationStore';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <AnnotationContextProvider>
      <App />
    </AnnotationContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);