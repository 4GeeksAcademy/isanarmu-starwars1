import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"



export const CharactersDetails = () => {
    const { store } = useGlobalReducer();
    const [personDetails, setPersonDetails] = useState({})

    const getCharactersDetails = async () => {
        const response = await fetch(store.currentCharacter.url)
        if (!response.ok) {
            console.log('Error', response.status, response.statusText)
            return
        }
        const data = await response.json()
        console.log(data.result.properties)
        setPersonDetails(data.result.properties)
    }

    useEffect(() => {
        getCharactersDetails()
    }, [])

    return (
        <div className="container mt-3 neon-page">
            <h1 className="text-center mb-4 color-text text-uppercase">Character details</h1>

            <div className="row align-items-center">

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <img
                        src={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${store.currentCharacter.uid}.jpg`}
                        className="img-fluid neon-image-wrapper"
                        alt={personDetails.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = store.errorImage;
                        }}
                    />
                </div>

                <div className="col-12 col-md-8">
                    <p className="mb-4 color-text text-uppercase fs-5 ">{store.currentCharacter.name}</p>
                    <ul className="list-group neon-list">
                        <li className="list-group-item text-light mb-1 ">
                            <span className="color-text">Name:</span> <span>{personDetails.name}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Eye color:</span> <span>{personDetails.eye_color}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Hair color:</span> <span>{personDetails.hair_color}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Skin color:</span> <span>{personDetails.skin_color}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Height:</span> <span>{personDetails.height}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Mass:</span> <span>{personDetails.mass}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Birth year:</span> <span>{personDetails.birth_year}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Vehicles:</span> <span>{personDetails.vehicles}</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};