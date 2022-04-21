import React, { createContext, useState } from 'react';

export const Fals = createContext()

export const CONT = ({ children }) => {
  const [isOpen, setIsopen] = useState(false)
  return <Fals.Provider value={[isOpen, setIsopen]}>
    {children}
  </Fals.Provider>
}

export default CONT