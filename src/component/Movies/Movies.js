import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { MoviesFetch } from 'services';

const Movies = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') ?? '';
  const [quer, setQuer] = useState(() => {
    return JSON.parse(localStorage.getItem('quer'));
  });

  const handleSubmit = e => {
    e.preventDefault();
    MoviesFetch(query).then(({ results }) => {
      setResults(results);
    });
    setQuer(query);
  };

  useEffect(() => {
    if (quer) {
      localStorage.setItem('quer', JSON.stringify(quer));
      MoviesFetch(quer).then(({ results }) => {
          setResults(results);
        })
    }
  }, [quer]);
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
