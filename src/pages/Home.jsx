import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 neon-title">Star Wars Encyclopedia</h1>
      <div className="row row-cols-1 row-cols-md-4">
        <div className="col">
          <p className="text-center neon-title mt-5 fs-5  " >Characters</p>
          <Link to="/Characters" className="text-decoration-none">
            <div className="card neon-card home-card">
              <img
                src="https://raw.githubusercontent.com/weibenfalk/star_wars_visual_encyclopedia/refs/heads/master/public/images/people/11.jpg"
                className="card-img-top"
                alt="Characters"
              />
            </div>
          </Link>
        </div>
        <div className="col">
          <p className="text-center neon-title fs-5 mt-5 " >Films</p>
          <Link to="/Films" className="text-decoration-none">
            <div className="card neon-card home-card">
              <img
                src="https://raw.githubusercontent.com/weibenfalk/star_wars_visual_encyclopedia/refs/heads/master/public/images/films/2.jpg"
                className="card-img-top"
                alt="Films"
              />
            </div>
          </Link>
        </div>
        <div className="col">
          <p className="text-center neon-title fs-5 mt-5 " >Planets</p>
          <Link to="/Planets" className="text-decoration-none">
            <div className="card neon-card home-card">
              <img
                src="https://i.pinimg.com/736x/f0/d8/ce/f0d8ce1ce46766a24d2317890e364890.jpg"
                className="card-img-top"
                alt="Planets"
              />
            </div>
          </Link>
        </div>
        <div className="col">
          <p className="text-center neon-title fs-5 mt-5 " >Starships</p>
          <Link to="/Starships" className="text-decoration-none">
            <div className="card neon-card home-card">
              <img
                src="https://w0.peakpx.com/wallpaper/758/264/HD-wallpaper-spaceship-aircraft-spacecraft-star-wars.jpg"
                className="card-img-top"
                alt="Starships"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
