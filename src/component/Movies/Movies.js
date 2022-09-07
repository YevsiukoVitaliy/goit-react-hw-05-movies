import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const query = searchParams.get('query');
  const handleSubmit = e => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US&query=${query}&page=1&include_adult=false`
    ).then(response =>
      response.json().then(({ results }) => {
        setResults(results);
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      {query && (
        <ul>
          {results.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
