import React, {useContext} from 'react'
import Global_context from './context/global_context'

export default function Accueil(){

  const value = useContext(Global_context)
  console.log(value)
  return(
    <div>Bonjour</div>
  )
}