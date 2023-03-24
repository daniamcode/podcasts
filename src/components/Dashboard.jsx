import {Link} from 'react-router-dom'
import "../styles/Dashboard.css"

function Dashboard({podcastId, podcasts, podcastIndex, children}) {
  return (
    <div className='dashboard'>
      <div className='sidebar'>
        <Link to={`/podcast/${podcastId}`} >
          <img src={podcasts?.podcastsDetails[podcastIndex]?.response[0]?.artworkUrl100} alt={podcasts?.podcastsDetails[podcastIndex]?.response?.collectionName} className='podcast-cover'></img>
        </Link>
        <p>
        {podcasts?.podcastsDetails[podcastIndex]?.response[0]?.collectionName}
        </p>
        <p>
          {`by ${podcasts?.podcastsDetails[podcastIndex]?.response[0]?.artistName}`}
        </p>
      </div>
      {children}
    </div>
  );
}

export default Dashboard;
