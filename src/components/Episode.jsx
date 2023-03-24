import { useParams } from 'react-router-dom';

function Episode() {
  const { episodeId } = useParams();
  
  return (
      <h1>{episodeId}</h1>
  );
}

export default Episode;
