import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  ImgWraper,
  TextWraper,
  MovieTitle,
  StyledText,
  StyledSpan,
  List,
  GoBackBtn,
} from './MovieCard.styled';
import defaultImg from '../../images/default.jpeg';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie }) {
  const { backdrop_path, poster_path, title, overview, genres, vote_average } =
    movie;
  const navigate = useNavigate();
  const location = useLocation();

  const imgPath =
    backdrop_path || poster_path
      ? IMG_PATH + (backdrop_path ?? poster_path)
      : defaultImg;
  return (
    <>
      <GoBackBtn
        type="button"
        onClick={() => {
          // navigate(-1);
          navigate(location?.state?.from?.pathname ?? '/movies');
        }}
      >
        Go back
      </GoBackBtn>

      <Container>
        <ImgWraper>
          <img src={imgPath} alt={title} />
        </ImgWraper>
        <TextWraper>
          <MovieTitle>{title}</MovieTitle>
          <StyledText>
            <StyledSpan>User score:</StyledSpan> {Math.round(vote_average * 10)}
            %
          </StyledText>
          <StyledText>
            <StyledSpan>Overview:</StyledSpan> {overview}
          </StyledText>
          <StyledSpan>genres:</StyledSpan>
          <List>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </List>
        </TextWraper>
      </Container>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({}).isRequired,
};
