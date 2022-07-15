import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import defaultImg from '../../images/default.jpeg';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie }) {
  const { backdrop_path, poster_path, title, overview, genres, vote_average } =
    movie;
  const navigate = useNavigate();
  // const location = useLocation();

  const imgPath =
    backdrop_path || poster_path
      ? IMG_PATH + (backdrop_path ?? poster_path)
      : defaultImg;
  return (
    <>
      <GoBackBtn
        type="button"
        onClick={() => {
          navigate(-1);
          // navigate(location?.state?.from?.pathname ?? '/movies');
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

// styled-components:
const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 20px;
    flex-direction: row;
  }
`;

const ImgWraper = styled('div')`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 40%;
  margin-right: 20px;
  & img {
    display: block;
    width: 100%;
    object-fit: fill;
  }
`;

const TextWraper = styled('div')`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const MovieTitle = styled('h2')`
  margin-bottom: 7px;
  color: ${p => p.theme.colors.white};
  font-size: 22px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  text-shadow: -1px -1px 0 rgb(16, 15, 60), 1px -1px 0 rgb(16, 15, 60),
    -1px 1px 0 rgb(16, 15, 60), 1px 1px 0 rgb(16, 15, 60);
`;

const StyledText = styled('p')`
  margin-bottom: 7px;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

const StyledSpan = styled('span')`
  color: rgb(16, 15, 60);
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const List = styled('ul')`
  list-style: none;
  display: flex;
  margin-bottom: 10px;
  li {
    margin-right: 5px;
    font-size: 14px;
  }
`;

const GoBackBtn = styled('button')`
  width: 65px;
  margin: 0 0 0 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  background: linear-gradient(to top right, rgb(16, 15, 60), rgb(85, 204, 225));
  &:hover {
    color: ${p => p.theme.colors.accent};
    background: linear-gradient(
      to top left,
      rgb(16, 15, 60),
      rgb(85, 204, 225)
    );
  }
  @media (min-width: 768px) {
    margin: 0 0 0 20px;
  }
`;
