import React, { useReducer, useEffect } from 'react';
import LoginPage from './loginpage';
import Global_context from './context/global_context';
import connexion from './reduce/connexion_reducer';

export default function App() {
  const [Global_State_login, Global_Dispatch] = useReducer(
    connexion,
    'DECONNECTER'
  );

  useEffect(() => {
    console.log(Global_State_login);
  }, [Global_State_login]);

  return (
    <div>
      <Global_context.Provider
        value={{
          Global_State_login,
          Global_Dispatch,
        }}
      >
        <LoginPage />
      </Global_context.Provider>
    </div>
  );
}
