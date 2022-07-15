import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'components/ServerAPI/ServerApi';
import defaultPhoto from '../../images/default.jpeg';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
  const movieId = useOutletContext();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        toast(error.message);
      }
    })();
  }, [movieId]);

  if (cast) {
    animateScroll.scrollMore(250);
  }

  return (
    <>
      {cast && (
        <CasList>
          {cast.map(({ cast_id, name, profile_path, character }) => {
            const imgPath = profile_path
              ? IMG_PATH + profile_path
              : defaultPhoto;
            return (
              <li key={cast_id}>
                <img src={imgPath} alt={name} width="55" height="75" />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </CasList>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
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
