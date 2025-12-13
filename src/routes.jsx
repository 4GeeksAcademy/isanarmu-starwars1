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
import { Contacts } from "./pages/Contacts.jsx";

 
export const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/Characters" element={<Characters/>} />
        <Route path="/Starships" element={<Starships/>} />
        <Route path="/Planets" element={<Planets/>} />
        <Route path="/Contacts" element={<Contacts/>} />
      </Route>
    )
);