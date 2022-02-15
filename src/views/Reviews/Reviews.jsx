import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';

import { getReviews } from '../../service/apiService';

import { Wrap, ReviewsList, AuthorName } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  // const getReviews = async movieId => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a3ec7c1621ade0b1491e66cd43b88745`
  //   );
  //   console.log('getReviews response:', response.data.results);
  //   return response.data.results;
  // };

  useEffect(() => {
    getReviews(movieId)
      .then(response => response.results)
      .then(setReviews);
  }, [movieId]);

  // console.log('reviews from State:', reviews);
  // console.log('useParams:', useParams());

  // let time = new Date.now();
  return (
    <>
      {reviews && (
        <Wrap>
          {/* {console.log(time)} */}
          {/* <h1>Reviews</h1> */}
          {reviews.length > 0 && (
            <ReviewsList>
              {reviews.map(review => (
                <li key={review.id}>
                  <AuthorName>Author: {review.author}</AuthorName>
                  <p>{review.content}</p>
                </li>
              ))}
            </ReviewsList>
          )}
          {reviews.length === 0 && (
            <p>We don't have any reviews for this movie</p>
          )}
        </Wrap>
      )}
    </>
  );
}
