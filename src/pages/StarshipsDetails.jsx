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

            <div className="row">

                <div className="col-12 col-md-4 text-center">
                    <img
                        src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/starships/${store.currentShip.uid}.jpg?raw=true`}
                        className="img-fluid neon-image-wrapper"
                        alt={shipDetails.name}
                    />
                </div>

                <div className="col-12 col-md-8">
                    <p className="fw-bold mb-3 ">{store.currentShip.name}</p>                    
                    <ul className="list-group neon-list">
                        <li className="list-group-item text-light mb-1 ">Name: {shipDetails.name}</li>

                        <li className="list-group-item text-light mb-1 ">Mass: {shipDetails.mass}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};