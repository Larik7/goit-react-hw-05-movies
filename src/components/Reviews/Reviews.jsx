import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servise/Api';
import { Autor, Text } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(responseMovieReviews => {
      setMovieReview(responseMovieReviews.results);
    });
  }, [movieId]);

  return (
    <>
      {movieReviews > 0 ? (
        movieReviews.map(({ id, author, content }) => {
          return (
            <ul key={id}>
              <Autor>{author}</Autor>
              <Text>{content}</Text>
            </ul>
          );
        })
      ) : (
        <Text>Sorry, we dont have any review for this movie :(</Text>
      )}
    </>
  );
};

export default Reviews;