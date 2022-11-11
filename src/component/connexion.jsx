import React, { useState, useContext, useRef, useEffect } from 'react';
import Global_context from '../context/global_context';

export default function Connexion() {
  const ref = useRef();
  //connexion
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  const obj = {
    mail : email,
    password : mdp
  }

  const { etat, dispatch } = useContext(Global_context);

  useEffect(() => {
    console.log(etat);
  }, [etat]);

  return (
    <div ref={ref} className="content">
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
            dispatch({
              type: 'CONNEXION',
              payload: obj
            })
          }
        >
          Connecter
        </button>
      </div>
    </div>
  );
}
