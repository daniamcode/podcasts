import {Link, useParams} from 'react-router-dom'

function Podcasts() {
  const { podcastId } = useParams();
  const episodeId = 44
  
  return (
    <div>
      <Link to={`/podcast/${podcastId}/episode/${episodeId}`}>{podcastId}</Link>      
    </div>
  );
}

export default Podcasts;
