import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { AnnotationContextProvider } from './AnnotationStore';

ReactDOM.render(
  <BrowserRouter>
    <AnnotationContextProvider>
      <App />
    </AnnotationContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);