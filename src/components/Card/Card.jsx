import Box from 'components/Box';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export default function Card({ movie }) {
  const { backdrop_path, poster_path, title, overview, genres, vote_average } =
    movie;

  return (
    <>
      <button type="button">Go back</button>
      <Box display="flex">
        <div>
          <img src={IMG_PATH + (backdrop_path ?? poster_path)} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>
            <span>User score:</span> {Math.round(vote_average * 10)}%
          </p>
          <p>
            <span>Overview:</span> {overview}
          </p>
          <p>genres</p>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </Box>
    </>
  );
}
