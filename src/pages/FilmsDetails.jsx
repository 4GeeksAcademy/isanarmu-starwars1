import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export const FilmsDetails = () => {
    const { store } = useGlobalReducer();
    const [filmDetails, setFilmDetails] = useState({})

    const getFilmDetails = async () => {

        const response = await fetch(store.currentFilm.properties.url)
        if (!response.ok) {
            console.log('Error', response.status, response.statusText)
            return
        }

        const data = await response.json()
        console.log(data)
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
                        // alt={filmDetails.properties.title}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = store.errorImage;
                        }}
                    />
                </div>

                <div className="col-12 col-md-8">
                    <p className="mb-4 color-text text-uppercase fs-5 ">{store.currentFilm.properties.title}</p>
                    <ul className="list-group neon-list">
                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Title:</span> <span>{filmDetails.title}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Episode:</span> <span>{filmDetails.episode_id}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Director:</span> <span>{filmDetails.director}</span>
                        </li>

                        <li className="list-group-item text-light mb-1">
                            <span className="color-text">Opening crawl:</span> <span>{filmDetails.opening_crawl}</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};