export default function tiroir_reducer(etat, action) {
  switch (action.type) {
    case 'OPEN':
      return true;
    case 'CLOSE':
      return false;
    default:
      throw new Error("Ce type n'est pas defini");
  }
}
