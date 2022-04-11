import { GreenField } from './Green.styled';

export default function Green({ text = 'no text' }) {
  return (
    <GreenField>
      <h2>I'm Green</h2>
      <p>{text}</p>
    </GreenField>
  );
}
