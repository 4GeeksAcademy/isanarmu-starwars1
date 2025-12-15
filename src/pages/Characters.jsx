import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Spinner } from "../components/Spinner.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Characters = () => {

    const swapiHost = 'https://www.swapi.tech/api'
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();
    const [characters, setCharacters] = useState([])

    const handleDetails = (person) => {
        // Para grabar el personaje en el store
        dispatch({
            type: 'character_details',
            payload: person
        })

        //navego al componente

        navigate('/CharactersDetails')
    }

    const getCharacters = async () => {
        let person = JSON.parse(localStorage.getItem('characters'))
        if (!person) {
            const uri = `${swapiHost}/people`
            const response = await fetch(uri)

            if (!response.ok) {
                console.log('Error:', response.status, response.statusText)
                return
            }
            const data = await response.json()
            localStorage.setItem('characters', JSON.stringify(data.results))
            person = data.results
        }

        setCharacters(person)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-5 neon-title">Characters</h1>

            <div id="galleryRoot" className="g-3 row row-cols-1 row-cols-md-3 row-cols-sm-2">
                {characters
                    ? characters.map((item) => (
                        <div className="col" key={item.uid}>
                            <div className="card shadow-sm neon-card">
                                <img
                                    src={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${item.uid}.jpg`}
                                    className="img-fluid"
                                    alt={item.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://res.cloudinary.com/dra2cr3uw/image/upload/v1765366742/IMAGEN_MUY_MUY_LEJANA_NO_DISPONIBLE_TEMPORALMENTE_pj0r6g.png"
                                    }}
                                />
                                <div className="card-body">
                                    <p className="card-text mb-3">{item.name}</p>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="btn btn-sm btn-neon d-flex justify-content-center align-items-center"
                                            onClick={() => handleDetails(item)}
                                        >
                                            Details
                                        </button>

                                        <Link className="btn btn-neon btn-sm d-flex align-items-center" to="/Characters">
                                            <i className="far fa-heart fa-sm"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : <Spinner />}
            </div>
        </div>
    );

}