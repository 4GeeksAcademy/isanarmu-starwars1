import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-neon">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					StarWars
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
							<Link className="nav-link" aria-current="page" to="/Characters">
								Characters
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Starships">
								Starships
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Planets">
								Planets
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Films">
								Films
							</Link>
						</li>
					</ul>

					<form className="d-flex" role="search">
						<div className="dropdown">
							<button
								className="btn btn-sm btn-dropdown-neon dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</button>
							<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end neon-dropdown">
								<li><button className="dropdown-item" type="button">Action</button></li>
								<li><button className="dropdown-item" type="button">Another action</button></li>
								<li><button className="dropdown-item" type="button">Something else here</button></li>
							</ul>
						</div>
					</form>
				</div>
			</div>
		</nav>
	);
};