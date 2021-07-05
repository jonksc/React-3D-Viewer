import React, { useState, useEffect } from 'react'

const AnnotationContext = React.createContext()

export const AnnotationContextProvider = ({children}) => {
  const [annotation, setAnnotation] = useState('')

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.title)
  //       setAnnotation(data.title)
  //     })

  //     return () => {
  //       setAnnotation('')
  //     }
  // }, [])

  const value = {
    annotation,
    setAnnotation,
  }

  return (
    <AnnotationContext.Provider value={value}>
      {children}
    </AnnotationContext.Provider>
  )
}

export const useAnno = () => React.useContext(AnnotationContext)


