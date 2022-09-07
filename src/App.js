import css from './app.module.css';
import { StyledLink } from './StyledLink/StyledLink';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Movies from './component/Movies/Movies';
import NotFound from './component/NotFound/NotFound';
import { Suspense, lazy } from 'react';
const MovieDetails = lazy(() =>
  import('./component/MovieDetails/MovieDetails.js')
);
const Cast = lazy(() => import('./component/Cast/Cast.js'));
const Reviews = lazy(() => import('./component/Reviews/Reviews.js'));

function App() {
  return (
    <div className="App">
      <nav className={css.nav}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
