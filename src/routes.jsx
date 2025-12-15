import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Demo } from "./pages/Demo";
import { Characters } from "./pages/Characters.jsx";
import { Starships } from "./pages/Starships.jsx";
import { Planets } from "./pages/Planets.jsx";
import { Films } from "./pages/Films.jsx";
import { CharactersDetails } from "./pages/CharactersDetails.jsx";
import { StarshipsDetails } from "./pages/StarshipsDetails.jsx";
import { PlanetDetails } from "./pages/PlanetDetails.jsx";
import { FilmsDetails } from "./pages/FilmsDetails.jsx";

 
export const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/Characters" element={<Characters/>} />
        <Route path="/Starships" element={<Starships/>} />
        <Route path="/Planets" element={<Planets/>} />
        <Route path="/Films" element={<Films/>} />
        <Route path="/CharactersDetails" element={<CharactersDetails/>} />
        <Route path="/StarshipsDetails" element={<StarshipsDetails/>} />
        <Route path="/PlanetDetails" element={<PlanetDetails/>} />
        <Route path="/FilmsDetails" element={<FilmsDetails/>} />
      </Route>
    )
);