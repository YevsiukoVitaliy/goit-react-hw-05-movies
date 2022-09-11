import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsFetch } from 'services';

const Reviews = () => {
  const [results, setResults] = useState([]);
  const { id } = useParams('');

  useEffect(() => {
    ReviewsFetch(id).then(({ results }) => {
      setResults(results);
    });
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
