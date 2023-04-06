import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'servise/Api';
import { Loader } from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink/BackLink';
import { Suspense } from 'react';
import {
  Container,
  Information,
  AddInfo,
  Info,
  Text,
  Span,
  Item,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? `/movie`;
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(responseMovieId => {
      setMovieDetails(responseMovieId);
    });
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <BackLink to={backLinkHref} />
      <Container>
        <Information>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width={300}
            />
          ) : (
            <Loader />
          )}
          <Info>
            <h1>{title}</h1>
            <Text>
              User Score: <Span>{vote_average?.toFixed(1)}</Span>
            </Text>
            <Text>Overview</Text>
            <Span>{overview}</Span>
            <Text>Genres</Text>
            {genres && (
              <Span>{genres.map(genre => genre.name).join(' | ')}</Span>
            )}
          </Info>
        </Information>
        <AddInfo>
          <Text>Additional information</Text>
          <Item>
            <InfoLink to="cast" state={{ ...location.state }}>
              cast
            </InfoLink>
          </Item>
          <Item>
            <InfoLink to="reviews" state={{ ...location.state }}>
              reviews
            </InfoLink>
          </Item>
        </AddInfo>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;
