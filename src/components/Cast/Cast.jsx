import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
  const { cast } = useOutletContext();
  if (cast) {
    animateScroll.scrollMore(250);
  }
  return (
    <>
      {cast && (
        <CasList>
          {cast.map(
            ({ cast_id, name, profile_path, character }) =>
              profile_path && (
                <li key={cast_id}>
                  <img
                    src={IMG_PATH + profile_path}
                    alt={name}
                    width="55"
                    height="75"
                  />
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              )
          )}
        </CasList>
      )}
    </>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({})),
};

const CasList = styled('ul')`
  list-style: none;
  padding: 0px 20px 20px;
  font-size: ${p => p.theme.fontSizes.m}px;
  & li {
    padding: ${p => p.theme.space[2]}px;
  }
  & li:nth-child(odd) {
    background: rgb(222, 208, 172);
  }
`;
