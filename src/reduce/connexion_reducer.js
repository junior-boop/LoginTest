function IdGenerator(){
  let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_"
  let id = ''
  for(let i = 0; i < 8; i++){
    const random = Math.round(Math.random * 100 * 0.63)
    id += letter[random]
  }

  return id
}
function TokenGenerator(){
  let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_"
  let token = ''
  for(let i = 0; i < 62; i++){
    const random = Math.round(Math.random * 100 * 0.63)
    token += letter[random]
  }
  return token
}

export default function connexion(etat, action){
  switch (action.type){
    case "CONNEXION":
      const object = {
        email : action.payload.email,
        password : action.payload.password
      }

      return "CONNEXION"
    case "INSCRIPTION":
      const object = {
        nom : action.payload.nom,
        prenom : action.payload.prenom,
        email : action.payload.email,
        password : action.payload.password,
        id : IdGenerator(),
        token : TokenGenerator()
      }

      console.log(object)

      return "INSCRIPTION"
  }
}