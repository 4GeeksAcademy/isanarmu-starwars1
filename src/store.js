export const initialStore = () => {
  return {
    message: null,
    currentCharacter: {},
    currentShip: {},
    currentPlanet: {},
    currentFilm: {},
    errorImage: "https://res.cloudinary.com/dra2cr3uw/image/upload/v1765366742/IMAGEN_MUY_MUY_LEJANA_NO_DISPONIBLE_TEMPORALMENTE_pj0r6g.png"
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'character_details':
      return { ...store, currentCharacter: action.payload };

    case 'starship_details':
      return { ...store, currentShip: action.payload };

    case 'planet_details':
      return { ...store, currentPlanet: action.payload };

    case 'film_details':
      return {...store, currentFilm: action.payload };

    default:
      throw Error('Unknown action.');
  }
}
