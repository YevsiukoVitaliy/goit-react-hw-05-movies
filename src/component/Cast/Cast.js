import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [castPlus, setCastPlus] = useState(2);
  const [pathImg] = useState('https://image.tmdb.org/t/p/original');
  const { id } = useParams('');

  const castMore = () => {
    setCastPlus(castPlus + 10);
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US`
    ).then(response =>
      response.json().then(({ cast }) => {
        setCast(cast);
      })
    );
  }, [id]);
  return (
    <ul>
      {cast
        .slice(0, castPlus)
        .map(({ cast_id, character, original_name, profile_path }) => (
          <li key={cast_id}>
            <img
              width={100}
              height={150}
              src={
                profile_path
                  ? pathImg + profile_path
                  : 'https://via.placeholder.com/100x150'
              }
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      {cast.length > castPlus && (
        <button onClick={() => castMore()}>More</button>
      )}
    </ul>
  );
};

export default Cast;
