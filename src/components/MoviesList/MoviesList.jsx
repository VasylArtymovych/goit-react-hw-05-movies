import { useLocation, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';
import routePaths from 'RouteSettings/Settings';
import { List, Icon, StyledLink } from './MoviesList.styled';

export default function MoviesList({ moviesArr }) {
  const location = useLocation();

  return (
    <List>
      {moviesArr.map(({ id, title, original_name }) => {
        const movieLink = generatePath(routePaths.movie, {
          movieId: id,
        });

        return (
          <li key={id}>
            <Icon />
            <StyledLink
              to={location.pathname === '/' ? movieLink : `${id}`}
              state={{ from: location }}
            >
              {title || original_name}
            </StyledLink>
          </li>
        );
      })}
    </List>
  );
}

MoviesList.propTypes = {
  moviesArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
