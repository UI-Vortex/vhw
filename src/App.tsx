import React, { FC, createContext } from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: 'Walker',
    age: 20,
    country: 'America'
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <Person name='Walker' age={20} email='uivortex2@gmail.com' hairColor={HairColor.Pink} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
