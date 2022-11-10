import React, {useState, useContext} from 'react';
import Global_context from '../context/global_context'

export default function Inscription(){
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setMail] = useState('')
  const [mdp, setMdp] = useState('')
  const {Global_State_login, Global_Dispatch} = useContext(Global_context)

  return(
    <div className="content">
            <h2>Inscription</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              dignissimos?
            </p>
            <div className="champs">
              <label htmlFor="">Nom</label>
              <input className="name" type="text" onChange = {({target}) => setNom(target.value)} />
            </div>
            <div className="champs">
              <label htmlFor="">Prenom</label>
              <input className="name" type="text" onChange = {({target}) => setPrenom(target.value)}/>
            </div>
            <div className="champs">
              <label htmlFor="">E-mail</label>
              <input className="name" type="mail" onChange = {({target}) => setMail(target.value)}/>
            </div>
            <div className="champs">
              <label htmlFor="">Mots de passe</label>
              <input className="name" type="password" onChange = {({target}) => setMdp(target.value)}/>
            </div>
            <div className="champs">
              <button  onClick={() =>
                  Global_Dispatch({
                    type: 'INSCRIPTION',
                    payload: {nom, prenom, email: email, password: mdp } 
                  })
                }>Inscription</button>
            </div>
          </div>
  )
}
