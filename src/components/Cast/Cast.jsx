import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'servise/Api';
import { CiImageOff } from 'react-icons/ci';
import { CastContainer, Container } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(responceMovieCast => {
      setMovieCast(responceMovieCast.cast);
    });
  }, [movieId]);

  return (
    <CastContainer>
      {movieCast.length > 0 ? (
        movieCast.map(({ id, profile_path, name, character }) => (
          <Container key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                width={100}
              />
            ) : (
              <CiImageOff size={125} />
            )}
            <p>
              <b>{name}</b>
            </p>
            <p> Character: {character}</p>
          </Container>
        ))
      ) : (
        <p>Sorry, there isn't any info</p>
      )}
    </CastContainer>
  );
};

export default Cast;