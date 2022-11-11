export default function Reduce(etat, action) {
  if (action.type === 'CONNEXION') {
    const obj = {
      email: action.payload.mail,
      password: action.payload.password,
    };

    console.log(window, obj);

    const JsonEncoder = JSON.stringify(obj)

    if(localStorage.getItem('appStorage') === null){
      localStorage.setItem('appStorage', JsonEncoder)
    } else {
      localStorage.setItem('appStorage', JsonEncoder)
    }

    return 'CONNEXION';
  }
  if (action.type === 'DECONNEXION') {
    return 'DECONNEXION';
  }
}
