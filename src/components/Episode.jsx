import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setFlag } from '../redux/actions/flagActions';
import { loadPodcastsDetails } from '../redux/actions/podcastActions';
import Dashboard from './Dashboard';
import EpisodesDetail from './EpisodesDetail';

function Episode() {
  const { podcastId } = useParams();

  const dispatch = useDispatch()
  const { podcasts, timer } = useSelector(state=>state)
  const [mountedDate] = useState(Date.now())
  const [podcastIndex, setPodcastIndex] = useState(null)

  useEffect(() => {
    dispatch(setFlag(false))
    return ()=> {
      // we add 500ms because the transition is so fast that is difficult to see the flag change
        setTimeout(()=> {
            dispatch(setFlag(true))
        }, 500)
    }
}, [dispatch]);

  useEffect(()=> {
    setPodcastIndex(podcasts?.podcastsDetails?.findIndex(el => el?.id === podcastId))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId, JSON.stringify(podcasts?.podcastsDetails)])

  useEffect(()=> {
    // only dispatch the first time and then just if coming back after timer.period 
    if(podcastIndex === -1 || (mountedDate > (timer.period + podcasts?.podcastsDetails[podcastIndex]?.timestamp))) {
      dispatch(loadPodcastsDetails({podcastId}))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, mountedDate, podcastIndex, JSON.stringify([timer.period, podcasts?.podcastsDetails[podcastIndex]?.response, podcasts?.podcastsDetails[podcastIndex]?.timestamp])])

  return (
    <div className='podcasts'>
      <Dashboard
        podcastId={podcastId}
        podcasts={podcasts} 
        podcastIndex={podcastIndex}
        >
        <EpisodesDetail
          podcasts={podcasts} 
          podcastIndex={podcastIndex}
        />
      </Dashboard>
    </div>
  );
}

export default Episode;
