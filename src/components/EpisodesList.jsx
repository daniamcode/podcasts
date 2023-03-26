import { Link } from "react-router-dom";
import "../styles/Podcasts.css";

function EpisodesList({podcasts, podcastIndex, podcastId}) {
  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // months are zero-indexed
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="episodes-list-container">
      <div className="episodes-counter">
        {`Episodes: ${podcasts?.podcastsDetails[podcastIndex]?.response?.slice(1).length}`}
      </div>
      <div className='episodes-list'>
        <div className="episodes-list-header">
          <p className="trackname">
            Title
          </p>
          <div className="release-date">
            Date
          </div>
          <div>
            Duration
          </div>
        </div>

        {podcasts?.podcastsDetails[podcastIndex]?.response?.slice(1).map(episode => (
          <div className="episodes-list-item" key={episode.trackId}>
            <Link to={`/podcast/${podcastId}/episode/${episode.trackId}`} className="trackname">{episode.trackName}</Link>        
            <div className="release-date">
              {formatDate(episode.releaseDate)}
            </div>
            <div>
              {formatTime(episode.trackTimeMillis)}
            </div>
          </div>
        )
        )}      
      </div>
    </div>
  );
}

export default EpisodesList;
