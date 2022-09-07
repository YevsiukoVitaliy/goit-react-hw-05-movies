import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [results, setResults] = useState([]);
  const { id } = useParams('');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US&page=1`
    ).then(response =>
      response.json().then(({ results }) => {
        setResults(results);
      })
    );
  }, [id]);

  return (
    <ul>
      {results.map(({ id, author, content }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
