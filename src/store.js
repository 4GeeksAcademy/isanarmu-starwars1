export const initialStore=()=>{
  return{
    message: null,
    currentCharacter:{},
    currentShip: {}
  };
};

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'character_details':
      return {...store, currentCharacter: action.payload};

    case 'starship_details':
      return{...store, currentShip: action.payload};  

    
    default:
      throw Error('Unknown action.');
  }    
}
