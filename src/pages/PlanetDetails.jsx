import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"




export const PlanetDetails = () => {
    const { store } = useGlobalReducer();
    const [planetDetails, setPlanetDetails] = useState({})

    const getPlanetDetails = async () => {
        const response = await fetch(store.currentPlanet.url)
        if (!response.ok) {
            console.log('Error', response.status, response.statusText)
            return
        }
        const data = await response.json()
        console.log(data.result.properties)
        setPlanetDetails(data.result.properties)
    }

    useEffect(() => {
        getPlanetDetails()
    }, [])

    return (

        <div className="container mt-3 neon-page">
            <h1 className="text-center mb-4 neon-title">Planet details</h1>

            <div className="row align-items-center">

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <img
                        src={`https://raw.githubusercontent.com/weibenfalk/star_wars_visual_encyclopedia/refs/heads/master/public/images/planets/${store.currentPlanet.uid}.jpg`}
                        className="img-fluid neon-image-wrapper"
                        alt={planetDetails.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = store.errorImage
                        }}
                    />
                </div>
                <div className="col-12 col-md-8">
                    <p className="fw-bold mb-3 ">{store.currentPlanet.name}</p>
                    <ul className="list-group neon-list">
                        <li className="list-group-item text-light mb-1 ">Name: {planetDetails.name}</li>
                        <li className="list-group-item text-light mb-1 ">Climate: {planetDetails.climate}</li>
                        <li className="list-group-item text-light mb-1 ">Surface water: {planetDetails.surface_water}</li>
                        <li className="list-group-item text-light mb-1 ">Diameter: {planetDetails.diameter}</li>
                        <li className="list-group-item text-light mb-1 ">Rotation period: {planetDetails.rotation_period}</li>
                        <li className="list-group-item text-light mb-1 ">Terrain: {planetDetails.terrain}</li>
                        <li className="list-group-item text-light mb-1 ">Population: {planetDetails.population}</li>
                        <li className="list-group-item text-light mb-1 ">Gravity: {planetDetails.gravity}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}