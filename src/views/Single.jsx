import { useParams } from 'react-router-dom';

export default function Single() {
  console.log(useParams());
  const { id } = useParams();
  return <h1>Single page. ID from useParams: {id}</h1>;
}
