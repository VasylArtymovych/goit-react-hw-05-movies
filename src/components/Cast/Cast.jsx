import { useOutletContext } from 'react-router-dom';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
  const { cast } = useOutletContext();

  return (
    <>
      {cast && (
        <ul>
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
        </ul>
      )}
    </>
  );
}
