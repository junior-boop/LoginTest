import React, {useState, useContext} from 'react';
import Global_context from '../context/global_context'

export default function Connexion(){

  //connexion
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  const {Global_State_login, Global_Dispatch} = useContext(Global_context)

  return(
    <div className="content">
        <h2>Connexion</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          dignissimos?
        </p>
        <div className="champs">
          <label htmlFor="">E-mail Utilisateurs</label>
          <input
            className="name"
            type="mail"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="champs">
          <label htmlFor="">Mots de passe</label>
          <input
            className="name"
            type="password"
            onChange={({ target }) => setMdp(target.value)}
          />
        </div>
        <div className="champs">
          <button
            onClick={() =>
              Global_Dispatch({
                type: 'CONNEXION',
                payload: { email: email, password: mdp } 
              })
            }
          >
            Connecter
          </button>
        </div>
      </div>
  )
}