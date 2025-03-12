import React, { createContext, useState, useContext, ReactNode } from 'react';

type SystemContextType = {
  confirmExit: boolean;
  setConfirmExit: React.Dispatch<React.SetStateAction<boolean>>;
};

const SystemContext = createContext<SystemContextType | undefined>(undefined);

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [confirmExit, setConfirmExit] = useState(false);

  return (
    <SystemContext.Provider value={{ confirmExit, setConfirmExit }}>
      {children}
    </SystemContext.Provider>
  );
};

export const useSystemContext = () => {
  const context = useContext(SystemContext);
  if (context === undefined) {
    throw new Error('useSystemContext must be used within a SystemProvider');
  }
  return context;
};