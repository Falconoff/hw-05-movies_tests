import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';

import { getActors } from '../../service/apiService';

import { CastWrap, ActorCard, CastList, NoPhoto } from './Cast.styled';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  // const getActors = async movieId => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a3ec7c1621ade0b1491e66cd43b88745`
  //   );
  //   console.log('getActors response:', response.data.cast);
  //   return response.data.cast;
  // };

  useEffect(() => {
    getActors(movieId)
      .then(response => response.cast)
      .then(setActors);
  }, [movieId]);
  console.log('actors from State:', actors);
  // console.log('useParams:', useParams());

  return (
    <>
      {actors && (
        <CastWrap>
          {actors.length === 0 && <p>No info</p>}
          {actors.length > 0 && (
            <>
              {/* <h1>Cast</h1> */}

              <CastList>
                {actors.map(actor => (
                  <li key={actor.id}>
                    <ActorCard>
                      {actor.profile_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`}
                          alt={actor.name}
                        />
                      )}
                      {/* if there is NO photo */}
                      {!actor.profile_path && <NoPhoto>NO PHOTO</NoPhoto>}
                      <div>
                        <p>Actor/actress: {actor.name}</p>
                        <p>Character: {actor.character}</p>
                      </div>
                    </ActorCard>
                  </li>
                ))}
              </CastList>
            </>
          )}
        </CastWrap>
      )}
    </>
  );
}
