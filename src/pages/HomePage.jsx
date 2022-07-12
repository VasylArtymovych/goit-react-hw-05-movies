import { fetchTrending } from 'components/ServerAPI/ServerApi';
// import { useState } from 'react';

export default function HomePage() {
  // const [movies, setMovies] = useState([]);
  fetchTrending().then(console.log);

  return <div>Home</div>;
}
