export default function Reduce(etat, action){
  if(action.type === "Bonjour"){
    return "Bonjour"
  }
  if (action.type === "Bonsoir"){
    return "Bonsoir"
  }
}