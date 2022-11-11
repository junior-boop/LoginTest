import React, { useState, useReducer, useEffect } from 'react';

import './style.scss';
import LoginPage from './loginpage';
import Global_context from './context/global_context';
import connexion from './reduce/connexion_reducer';
import Accueil from './accueil';
import Reduce from './reduce/reducer';

export default function App() {
  const [Global_State_login, Global_Dispatch] = useReducer(
    connexion,
    'DECONNECTER'
  );

  const [etat, dispatch] = useReducer(Reduce, '');

  const [appState, setAppState] = useState(Global_State_login);

  useEffect(() => {
    setAppState(Global_State_login);
  }, [Global_State_login]);

  const Navigation = () => {
    if (appState === 'DECONNECTER') {
      return <LoginPage />;
    }

    if (appState === 'CONNEXION') {
      return <Accueil />;
    }

    if (appState === 'INSCRIPTION') {
      return <Accueil />;
    }
  };

  return (
    <div>
      <Global_context.Provider
        value={{
          Global_State_login,
          Global_Dispatch,
        }}
      >
        {Navigation()}
        {/* <Accueil /> */}
      </Global_context.Provider>
    </div>
  );
}
