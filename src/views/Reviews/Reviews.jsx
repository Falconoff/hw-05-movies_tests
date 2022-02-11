import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Wrap, ReviewsList, AuthorName } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const getReviews = async movieId => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a3ec7c1621ade0b1491e66cd43b88745`
    );
    // console.log('response:', response);
    return response.data.results;
  };

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  console.log('reviews:', reviews);
  // console.log('useParams:', useParams());

  return (
    <>
      <Wrap>
        {/* <h1>Reviews</h1> */}
        {reviews && (
          <ReviewsList>
            {reviews.map(review => (
              <li key={review.id}>
                <AuthorName>Author: {review.author}</AuthorName>
                <p>{review.content}</p>
              </li>
            ))}
          </ReviewsList>
        )}
        {reviews.length === 0 && <p>No reviews ((</p>}
      </Wrap>
    </>
  );
}
