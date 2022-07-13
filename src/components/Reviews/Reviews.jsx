import { useOutletContext } from 'react-router-dom';

export default function Reviews() {
  const { reviews } = useOutletContext();
  console.log(reviews);
  return (
    <>
      {reviews &&
        (reviews.results.length !== 0 ? (
          <ul>
            {reviews.results.map(({ id, author, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p> {content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No rewiews</p>
        ))}
    </>
  );
}
