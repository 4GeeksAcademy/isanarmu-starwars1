import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from "react";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(() => {

  }, [])

	return (
		<div className="text-center mt-5">
			<h1 className="display-4" >STAR WARS</h1>
		</div>
	);
}; 