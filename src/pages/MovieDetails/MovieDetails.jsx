// const { useState, useEffect } = require("react");
// const { useParams } = require("react-router-dom");
// import { fetchMovieDetails } from 'servise/Api';
import { Container } from './MovieDetails.styled';

const MovieDetails = () => {
  // const [movieDetails, setMovieDetails] = useState([]);
  // const [Loader, setLoader] = useState(false);

  // const {movieId} = useParams;

  // useEffect(() => {
  //     fetchMovieDetails(movieId).then(responseMovieId => {
  //       setMovieDetail(responseMovieId);
  //     });
  // }, [movieId]);

  return (
    <>
      <button>back</button>
      <Container>
        <div>
          <img src="" alt="" />
          <div>
            <h1>Title</h1>
            <p>
              rank: <span>7</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              soluta eos nihil corrupti quo ipsam aliquid aut ipsum fugit sint
              molestias recusandae accusamus veritatis officia, impedit earum
              cum voluptatem perferendis.
            </p>
            <p>Genres</p>
          </div>
          <ul>
            <li>cast</li>
            <li>Reviews</li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default MovieDetails;
