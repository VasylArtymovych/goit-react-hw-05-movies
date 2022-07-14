import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

MoviesList.propTypes = {
  moviesArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const List = styled('ul')`
  list-style-position: inside;
  padding: 10px 20px;
  font-size: ${p => p.theme.fontSizes.m}px;
  & li {
    padding: ${p => p.theme.space[2]}px;
  }
  & li:nth-child(odd) {
    background: rgb(222, 208, 172);
  }
`;
