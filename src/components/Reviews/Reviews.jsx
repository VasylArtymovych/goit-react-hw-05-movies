import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'components/ServerAPI/ServerApi';

export default function Reviews() {
  const movieId = useOutletContext();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const reviewData = await fetchMovieReviews(movieId);
        setReview(reviewData);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

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
    movieId: PropTypes.string,
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
