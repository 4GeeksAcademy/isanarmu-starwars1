import { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom"
import { Spinner } from "../components/Spinner.jsx";



export const Films = () => {

    const swapiHost = 'https://www.swapi.tech/api'
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();
    const [films, setFilms] = useState([]);

    const handleDetails = (film) => {

        dispatch({
            type: 'film_details',
            payload: film
        })

        navigate('/FilmsDetails')

    }

    const getFilms = async () => {
        let film = JSON.parse(localStorage.getItem('films'))
        if (!film) {

            const uri = `${swapiHost}/films`
            const response = await fetch(uri)
            if (!response.ok) {
                console.log('Error:', response.status, response.statusText)
                return
            }
            const data = await response.json()
            localStorage.setItem('films', JSON.stringify(data.result))
            film = data.result;
        }

        setFilms(film);
    }


    const handleToggleFavorite = (name) => {
        if (store.favorites.includes(name)){
            dispatch({
                type: 'delete_favorite',
                payload: name
            });
            return;
        }

        dispatch ({
            type: 'add_favorites',
            payload: name
        });
    };
    //esta funcion se esta ejecutando cada vez que muestre este componente
    useEffect(() => {
        getFilms()
    }, [])



    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-5 neon-title">Films</h1>
            <div id="galleryRoot" className="g-3 row row-cols-1 row-cols-md-3 row-cols-sm-2">
                {films
                    ? films.map((item) => (
                        <div className="col" key={item.uid}>
                            <div className="card shadow-sm neon-card">
                                <img
                                    src={`https://raw.githubusercontent.com/weibenfalk/star_wars_visual_encyclopedia/refs/heads/master/public/images/films/${item.uid}.jpg`}
                                    className="img-fluid"
                                    alt={item.title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://res.cloudinary.com/dra2cr3uw/image/upload/v1765366742/IMAGEN_MUY_MUY_LEJANA_NO_DISPONIBLE_TEMPORALMENTE_pj0r6g.png"
                                    }}
                                />
                                <div className="card-body">
                                    <p className="card-text mb-3">{item.properties.title} </p>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="btn btn-sm btn-neon d-flex justify-content-center align-items-center"
                                            onClick={() => handleDetails(item)}
                                        >Details</button>
                                        <button className="btn btn-neon btn-sm d-flex align-items-center" onClick={() => handleToggleFavorite(item.properties.title)} >
                                           <i className={ store.favorites.includes(item.properties.title) ? 'fas fa-heart fa-sm text-warning' : "far fa-heart fa-sm"}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : <Spinner />}
            </div>
        </div>

    )
}