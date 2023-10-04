import { useState } from "react";
import "./styles/styles.css";

export const SearchMovies = () => {
  const urlBase = "";
  const API_KEY = "";

  const [search, setSearch] = useState("");
  const [peliculas, setPeliculas] = useState([""]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch();
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };

  return (
    <div className="container">
      <h1>Buscador de peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="busca una pelicula"
          value={search}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </div>
  );
};
