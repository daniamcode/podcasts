import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Episodes.css";
import Linkify from 'react-linkify';

function EpisodesDetail({podcasts, podcastIndex}) {

  const { episodeId } = useParams();
  const [selectedEpisode, setSelectedEpisode] = useState(null)

  useEffect(()=> {
      const episode = podcasts?.podcastsDetails[podcastIndex]?.response?.find(el=>el.trackId.toString() === episodeId)
      setSelectedEpisode(episode)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify([episodeId, podcastIndex, podcasts?.podcastsDetails[podcastIndex]])])

  return (
    <div className='episodes-detail'>
      <div className="episodes-detail-trackname">
        {selectedEpisode?.trackName}
      </div>
      <div className='episodes-detail-description'>
        <Linkify>{selectedEpisode?.description}</Linkify>
      </div>
      <audio src={selectedEpisode?.episodeUrl} controls className="episodes-detail-audio">
      Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default EpisodesDetail;
