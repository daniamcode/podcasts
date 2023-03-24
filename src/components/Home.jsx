import "../styles/Home.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { loadPodcasts } from "../redux/actions/podcastActions";
import { Link } from "react-router-dom";


function Home() {
    const dispatch = useDispatch()
    const { podcasts, timer } = useSelector(state => state)
    const [mountedDate] = useState(Date.now())

  
    useEffect(()=> {
        // only dispatch the first time and then just if coming back after timer.period 
        if(!podcasts?.podcastsList?.response || (mountedDate > (timer.period + podcasts?.podcastsList?.timestamp))) {
          dispatch(loadPodcasts())
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [dispatch, mountedDate, JSON.stringify([timer.period, podcasts?.podcastsList?.response, podcasts?.podcastsList?.timestamp])])
    
    return (
        <div className='home'>
            {podcasts?.podcastsList?.isLoading 
                ? <h3>Is loading...</h3> 
                : podcasts?.podcastsList?.response?.map(pod=>
                    <Link to={`/podcast/${pod.id.attributes['im:id']}`} key={pod.id.attributes['im:id']}>{pod.title.label}</Link>)
            }
        </div>
    )
}

export default Home
