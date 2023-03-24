import "../styles/Home.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { loadPodcasts } from "../redux/actions/podcastActions";
import { Link } from "react-router-dom";


function Home() {
    const dispatch = useDispatch()
    const { podcasts } = useSelector(state=>state)
  
    useEffect(()=> {
    dispatch(loadPodcasts())
    },[dispatch])
    
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
