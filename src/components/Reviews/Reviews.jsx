import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';

export default function Reviews() {
  const { reviews } = useOutletContext();
  if (reviews) {
    animateScroll.scrollMore(250);
  }

  return (
    <>
      {reviews &&
        (reviews.results.length > 0 ? (
          <ReviewdList>
            {reviews.results.map(({ id, author, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p> {content}</p>
              </li>
            ))}
          </ReviewdList>
        ) : (
          <ReviewdText>No rewiews</ReviewdText>
        ))}
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.shape({
    results: PropTypes.array.isRequired,
  }),
};

const ReviewdList = styled('ul')`
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
const ReviewdText = styled('p')`
  font-size: 34px;
  text-align: center;
  padding-bottom: 20px;
  color: ${p => p.theme.colors.accent};
`;
