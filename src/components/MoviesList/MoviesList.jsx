import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function MoviesList({ moviesArr }) {
  const location = useLocation();

  return (
    <List>
      {moviesArr.map(({ id, title, original_name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title || original_name}
          </Link>
        </li>
      ))}
    </List>
  );
}

const List = styled('ul')`
  list-style-position: inside;
  padding: 20px 20px;
`;
