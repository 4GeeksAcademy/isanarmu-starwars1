import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Spinner } from "../components/Spinner.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const Starships = () => {

    const swapiHost = 'https://www.swapi.tech/api'
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();
    const [starships, setStarships] = useState([])

    const handleDetails = (ship) => {
        // Para grabar la nave en el store
        dispatch({
            type: 'starship_details',
            payload: ship
        })
        //navego al componente
        navigate('/StarshipsDetails')
    }

    const getStarships = async () => {
        let ships = JSON.parse(localStorage.getItem('starships'))
        console.log("LS starships:", ships);
        if (!ships) {
            const uri = `${swapiHost}/starships`
            const response = await fetch(uri)

            if (!response.ok) {
                console.log('Error:', response.status, response.statusText)
                return
            }
            const data = await response.json()
            console.log("API STARSHIPS:", data.results);
            localStorage.setItem('starships', JSON.stringify(data.results))
            ships = data.results
        }

        setStarships(ships)
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
    

    useEffect(() => {
        getStarships()
    }, [])

    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-5 neon-title">Starships</h1>

            <div id="galleryRoot" className="g-3 row row-cols-1 row-cols-md-3 row-cols-sm-2">
                {starships
                    ? starships.map((item) => (
                        <div className="col" key={item.uid}>
                            <div className="card shadow-sm neon-card-starships">
                                <img

                                    src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/starships/${item.uid}.jpg?raw=true`}
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

                                        <button className="btn btn-neon btn-sm d-flex align-items-center" onClick={() => handleToggleFavorite(item.name)} >
                                            <i className={ store.favorites.includes(item.name) ? 'fas fa-heart fa-sm text-warning' : "far fa-heart fa-sm"}></i>
                                        </button>
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







// export const Starships = () => {

//     return (
//         <div className="container">
//             <h1 className="text-center mb-5 mt-5 neon-title">Starships</h1>
//         </div>
//     )
// }