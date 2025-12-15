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
            <h1 className="text-center mb-4 neon-title">Character details</h1>

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
                    <p className="fw-bold mb-3 ">{store.currentCharacter.name}</p>
                    <ul className="list-group neon-list">
                        <li className="list-group-item text-light mb-1 ">Name: {personDetails.name}</li>
                        <li className="list-group-item text-light mb-1 ">Eye color: {personDetails.eye_color}</li>
                        <li className="list-group-item text-light mb-1 ">Hair color: {personDetails.hair_color}</li>
                        <li className="list-group-item text-light mb-1 ">Skin color: {personDetails.skin_color}</li>
                        <li className="list-group-item text-light mb-1 ">Height: {personDetails.height}</li>
                        <li className="list-group-item text-light mb-1 ">Mass: {personDetails.mass}</li>
                        <li className="list-group-item text-light mb-1 ">Birth year: {personDetails.birth_year}</li>
                        <li className="list-group-item text-light mb-1 ">Vehicles: {personDetails.vehicles}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};