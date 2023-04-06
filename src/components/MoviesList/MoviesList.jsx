import PropTypes from 'prop-types';
import { MovieLink, List } from './MoviesList.styled';
import { Outlet, useLocation } from 'react-router-dom';
import { Item } from './MoviesList.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title }) => {
          return (
            <Item key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </Item>
          );
        })}
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};