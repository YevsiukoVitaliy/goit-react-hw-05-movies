import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeFetch } from 'services';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();
  useEffect(() => {
    HomeFetch().then(({ results }) => setTrending(results));
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trending.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
