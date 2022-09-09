import css from './app.module.css';
import { StyledLink } from './StyledLink/StyledLink';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./component/Home/Home.js'));
const Movies = lazy(() => import('./component/Movies/Movies.js'));
const NotFound = lazy(() => import('./component/NotFound/NotFound.js'));
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
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />}></Route>
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
