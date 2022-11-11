export default function Reduce(etat, action){
  if(action.type === "CONNEXION"){
    return "CONNEXION"
  }
  if (action.type === "DECONNEXION"){
    return "DECONNEXION"
  }
}