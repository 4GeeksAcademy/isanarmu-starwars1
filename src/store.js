export const initialStore = () => {
  return {
    message: null,
    currentCharacter: {},
    currentShip: {},
    currentPlanet: {},
    currentFilm: {},
    favorites: [],

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
      return { ...store, currentFilm: action.payload };

    case 'add_favorites':
      if (store.favorites.includes(action.payload)) {
        return store;
      }
      return { ...store, favorites: [...store.favorites, action.payload] };
      
    case 'delete_favorite':
      return { ...store, favorites: store.favorites.filter((fav) => fav !== action.payload) }


    default:
      throw Error('Unknown action.');
  }
}
