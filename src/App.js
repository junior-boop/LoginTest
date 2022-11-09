import React, { useReducer } from "react";
import LoginPage from './loginpage'
import Global_context from './context/global_context'
import connexion from './reduce/connexion_reducer'


export default function App() {

  

  return (
    <div>
      <Global_context.Provider value = {}>
        <LoginPage />
      </Global_context.Provider>
    </div>
  );
}
