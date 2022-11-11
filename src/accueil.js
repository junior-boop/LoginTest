import React, {useContext, useState, useEffect} from 'react'
import Global_context from './context/global_context'

export default function Accueil(){

  const [storage, setStorage] = useState({})


  useEffect(() => {
        if(typeof window !== 'undefined'){
          const appStorage = window.localStorage.getItem('appStorage')
          const JsonEncoder = JSON.parse(appStorage)
          console.log(JsonEncoder)
          setStorage(JsonEncoder)
      }
    }, [])


  console.log(storage)
  return(
      <div>
        <div className="container">
          
        </div>
      </div>
  )
}