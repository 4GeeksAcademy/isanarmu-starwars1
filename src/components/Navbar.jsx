import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();


	const handleDelete = (item) => {

		dispatch({
			type: 'delete_favorite',
			payload: item
		})
	}



	return (
		<nav className="navbar navbar-expand-sm navbar-neon">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src="https://www.freeiconspng.com/uploads/logo-star-wars-png-4.png" className="navbar-logo" alt="Logo Star Wars PNG" />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="letters-navbar collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link neon-letters" aria-current="page" to="/Characters">
								Characters
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link neon-letters" to="/Starships">
								Starships
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link neon-letters" to="/Planets">
								Planets
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link neon-letters" to="/Films">
								Films
							</Link>
						</li>
					</ul>

					<div className="d-flex" role="search">
						<div className="dropdown">
							<button
								className="btn btn-sm btn-dropdown-neon dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								data-bs-auto-close="outside"
								aria-expanded="false"
							>
								Favorites
							</button>
							<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end neon-dropdown favorites-dropdown mt-2">
								{store.favorites.map((favorite, index) => (
									<li key={index} className="dropdown p-1 ">
										<div className="favorites-item d-flex justify-content-between align-items-center ">
											<span className="favorites-text ms-3">{favorite}</span>
											<button
												type="button"
												className="btn btn-sm"
												onClick={() => handleDelete(favorite)}
											>
												<i className="fa fa-trash ms-2" aria-hidden="true"></i>
											</button>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};