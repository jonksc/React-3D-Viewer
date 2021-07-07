/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const AnnotationContext = React.createContext();

export const AnnotationContextProvider = ({ children }) => {
  const [annotation, setAnnotation] = useState('');

  const value = {
    annotation,
    setAnnotation
  };

  return (
    <AnnotationContext.Provider value={value}>
      {children}
    </AnnotationContext.Provider>
  );
};

export const useAnno = () => React.useContext(AnnotationContext);