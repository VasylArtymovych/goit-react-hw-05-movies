import { useLocation, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';
import routePaths from 'RouteSettings/Settings';
import { List, Icon, StyledLink } from './MoviesList.styled';

import defaultImg from '../../images/default.jpeg';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export default function MoviesList({ moviesArr }) {
  const location = useLocation();

  return (
    <List>
      {moviesArr.map(
        ({ id, title, original_name, backdrop_path, poster_path }) => {
          const movieLink = generatePath(routePaths.movie, {
            movieId: id,
          });
          const imgPath =
            backdrop_path || poster_path
              ? IMG_PATH + (backdrop_path ?? poster_path)
              : defaultImg;
          return (
            <li key={id}>
              <Icon />
              <StyledLink
                to={location.pathname === '/' ? movieLink : `${id}`}
                state={{ from: location }}
              >
                <img src={imgPath} alt="img" width="50" height="35" />
                <p>{title || original_name}</p>
              </StyledLink>
            </li>
          );
        }
      )}
    </List>
  );
}

MoviesList.propTypes = {
  moviesArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
