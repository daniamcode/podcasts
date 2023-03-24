import {useParams} from 'react-router-dom'

function Podcasts() {
  const { podcastId } = useParams();
  
  return (
    <div>
      <h1>{podcastId}</h1>      
    </div>
  );
}

export default Podcasts;
