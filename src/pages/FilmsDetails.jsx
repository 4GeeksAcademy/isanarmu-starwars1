import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export const FilmsDetails = () => {
    const { store } = useGlobalReducer();
    const [filmDetails, setFilmDetails] = useState({})

    const getFilmDetails = async () => {
        const response = await fetch(store.currentFilm.url)
        if (!response.ok) {
            console.log('Error', response.status, response.statusText)
            return
        }
        const data = await response.json()
        console.log(data.result.properties)
        setFilmDetails(data.result.properties)
    }

    useEffect(() => {
        getFilmDetails()
    }, [])

    return (
        <div className="container mt-3 neon-page">
            <h1 className="text-center mb-4 neon-title">Film details</h1>

            <div className="row align-items-center">

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <img
                        src={`https://raw.githubusercontent.com/weibenfalk/star_wars_visual_encyclopedia/refs/heads/master/public/images/films/${store.currentFilm.uid}.jpg`}
                        className="img-fluid neon-image-wrapper"
                        alt={filmDetails.title}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = store.errorImage;
                        }}
                    />
                </div>

                <div className="col-12 col-md-8">
                    <p className="fw-bold mb-3 ">{store.currentFilm.title}</p>
                    <ul className="list-group neon-list">
                        <li className="list-group-item text-light mb-1 ">Title: {filmDetails.title}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};