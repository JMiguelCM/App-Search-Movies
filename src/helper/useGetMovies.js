import { useState } from "react";

export const useGetMovies = () => {
  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = import.meta.env.VITE_APIKEY;

  const [search, setSearch] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${search}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setPeliculas(data.results); // Assuming data.results is the array of movies from the API response
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };
  return {
    search,
    peliculas,
    handleInputChange,
    handleSubmit
  };
};
