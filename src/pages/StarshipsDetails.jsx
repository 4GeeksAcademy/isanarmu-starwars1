import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"



export const StarshipsDetails = () => {
    const { store } = useGlobalReducer();
    const [shipDetails, setShipDetails] = useState({})

    const getStarshipsDetails = async () => {
        const response = await fetch(store.currentShip.url)
        if (!response.ok) {
            console.log('Error', response.status, response.statusText)
            return
        }
        const data = await response.json()
        console.log(data.result.properties)
        setShipDetails(data.result.properties)
    }

    useEffect(() => {
        getStarshipsDetails()
    }, [])

    return (
        <div className="container mt-3 neon-page">
            <h1 className="text-center mb-4 neon-title">Starship details</h1>

            <div className="row align-items-center">

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <img
                        src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/starships/${store.currentShip.uid}.jpg?raw=true`}
                        className="img-fluid neon-image-wrapper"
                        alt={shipDetails.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = store.errorImage
                        }}
                    />
                </div>

                <div className="col-12 col-md-8">
                    <p className=" mb-4 color-text text-uppercase fs-5 ">{store.currentShip.name}</p>
                    <ul className="list-group neon-list">
                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Name:</span> <span>{shipDetails.name}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Cargo capacity:</span> <span>{shipDetails.cargo_capacity}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Passengers:</span> <span>{shipDetails.passengers}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Max atmospheric speed:</span> <span>{shipDetails.max_atmosphering_speed}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Crew:</span> <span>{shipDetails.crew}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Model:</span> <span>{shipDetails.model}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Pilots:</span> <span>{shipDetails.pilots}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Starship class:</span> <span>{shipDetails.starship_class}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Manufacturer:</span> <span>{shipDetails.manufacturer}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};