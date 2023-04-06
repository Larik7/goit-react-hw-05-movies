import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieContainer } from './Movie.styled';
import { fetchSearchMovies } from 'servise/Api';
import { SearchBox } from 'components/Searchbox/Searchbox';
import { MovieList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!nameMovie) {
      return;
    }
    setMovies([]);
    setLoading(true);

    fetchSearchMovies(nameMovie)
      .then(responseMovies => {
        setMovies(responseMovies.results);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [nameMovie]);

  const handelSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <MovieContainer>
      {error && <h2>{error.message}</h2>}
      <SearchBox onSubmit={handelSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
    </MovieContainer>
  );
};

export default Movies;
