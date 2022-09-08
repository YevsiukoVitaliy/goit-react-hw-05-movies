import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=d8a03c709b4adc0e172e0837e1f73c29`
    )
      .then(response => response.json())
      .then(({ results }) => setTrending(results));
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trending.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`movies/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
