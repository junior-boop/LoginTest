import React, {useState, useReducer, useEffect } from 'react';
import LoginPage from './loginpage';
import Global_context from './context/global_context';
import connexion from './reduce/connexion_reducer';
import Accueil from './accueil'
import Reduce from './reduce/reducer'

export default function App() {
  const [Global_State_login, Global_Dispatch] = useReducer(
    connexion,
    'DECONNECTER'
  );

  const [etat, dispatch] = useReducer(Reduce, '')

  const [appState, setAppState] = useState(Global_State_login)

  useEffect(() => {
    setAppState(Global_State_login);
  }, [Global_State_login]);

  return (
    <div>
      <Global_context.Provider
        value={{
          etat, 
          dispatch
        }}
      >
        <Accueil />
        <LoginPage />
      </Global_context.Provider>
    </div>
  );
}
