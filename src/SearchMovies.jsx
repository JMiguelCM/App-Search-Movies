import "./styles/styles.css";
import { useGetMovies } from "./helper/useGetMovies";

export const SearchMovies = () => {
  
  const { search, peliculas, handleInputChange, handleSubmit } = useGetMovies();

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

      <div className="movie-list">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
            />

            <h2>{pelicula.title}</h2>
            <p>{pelicula.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
