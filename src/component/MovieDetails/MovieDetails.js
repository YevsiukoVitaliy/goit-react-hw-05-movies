import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReplyAll } from '@fortawesome/free-solid-svg-icons';
import { StyledLink } from '../../StyledLink/StyledLink';
import css from './MovieDetails.module.css';
import { MovieDetailsFetch } from 'services';

const MovieDetails = () => {
  const [original_title, setOriginal_title] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster_path, setPoster_path] = useState(
    'https://via.placeholder.com/200x300'
  );
  const [vote_average, setVote_average] = useState();
  const [overview, setOverview] = useState('');
  const [release_date, setRelease_date] = useState('');
  const [status, setStatus] = useState(false);
  const { id } = useParams('');
  const location = useLocation();
  console.log(location);
  const backLinkHref = location.state?.from;

  useEffect(() => {
    MovieDetailsFetch(id).then(response =>
      response
        .json()
        .then(
          ({
            genres,
            poster_path,
            vote_average,
            overview,
            original_title,
            release_date,
          }) => {
            setStatus(response.ok);
            setGenres(genres);
            setPoster_path(`https://image.tmdb.org/t/p/original${poster_path}`);
            setVote_average(Math.ceil(vote_average * 10));
            setOverview(overview);
            setOriginal_title(original_title);
            setRelease_date(release_date.slice(0, 4));
          }
        )
    );
  }, [id]);
  return (
    <div>
      {status && (
        <div>
          <Link to={backLinkHref}>
            <FontAwesomeIcon icon={faReplyAll} />
            Go back
          </Link>
          <div className={css.containerMain}>
            <img src={poster_path} alt="" width="200px" height="300px" />
            <div className={css.movieInformation}>
              <h2>
                {original_title} ({release_date})
              </h2>
              <p>User Scope: {vote_average}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul className={css.genresList}>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <StyledLink
                to="cast"
                state={{ from: location.state?.from ?? '/' }}
              >
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="reviews"
                state={{ from: location.state?.from ?? '/' }}
              >
                Reviews
              </StyledLink>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
