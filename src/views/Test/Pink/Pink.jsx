import { PinkField } from './Pink.styled';
import { useNavigate, useParams } from 'react-router-dom';

export default function Pink() {
  const navigate = useNavigate();
  const params = useParams();
  console.log('PARAMS: ', params.path);

  return (
    <PinkField>
      <h2>I'm Pink</h2>
      <h4>Let's navigate</h4>
      <button onClick={() => navigate('/params')}>On Params</button>
      <button onClick={() => navigate('/test/green-2')}>On Green-2</button>
    </PinkField>
  );
}
