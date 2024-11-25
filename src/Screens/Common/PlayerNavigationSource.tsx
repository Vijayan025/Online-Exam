import {createContext, useContext, useState} from 'react';

const NavigationContext = createContext();

export const PlayerNavigationProvider = ({children}: any) => {
  const [navigationPlayerSource, setPlayerNavigationSource] = useState(null);

  return (
    <NavigationContext.Provider
      value={{navigationPlayerSource, setPlayerNavigationSource}}>
      {children}
    </NavigationContext.Provider>
  );
};

export const usePlayerNavigationSource = () => useContext(NavigationContext);
