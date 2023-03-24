import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Header.css";

function EpisodesDetail({podcasts, podcastIndex}) {

  const { episodeId } = useParams();
  const [selectedEpisode, setSelectedEpisode] = useState(null)

  console.log(selectedEpisode)

  useEffect(()=> {
      const episode = podcasts?.podcastsDetails[podcastIndex]?.response?.find(el=>el.episodeGuid === episodeId)
      setSelectedEpisode(episode)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify([episodeId, podcastIndex, podcasts?.podcastsDetails[podcastIndex]])])

  return (
    <div className='episodes-detail'>
      {selectedEpisode?.trackName}
      {selectedEpisode?.description}
      <audio src={selectedEpisode?.episodeUrl} controls>
      Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default EpisodesDetail;
