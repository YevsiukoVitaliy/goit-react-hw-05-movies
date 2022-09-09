import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { MoviesFetch } from 'services';

const Movies = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    MoviesFetch(query).then(response =>
      response.json().then(({ results }) => {
        setResults(results);
      })
    );
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    MoviesFetch(query).then(response =>
      response.json().then(({ results }) => {
        setResults(results);
      })
    );
  };
  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => changeQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {query && (
        <ul>
          {results.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
