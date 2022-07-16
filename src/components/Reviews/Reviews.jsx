import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from '../../ServerAPI/ServerApi';
import { ReviewdList, ReviewdText } from './Reviews.styled';

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
