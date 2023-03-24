import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function ListElement({podcast}) {
    return(
        <div className="list-element" key={podcast.id.attributes['im:id']}>
            <Link to={`/podcast/${podcast.id.attributes['im:id']}`} >
                <img src={podcast['im:image'][0].label} alt={podcast.title.label} className='list-element-cover'></img>
            </Link>
            <p className="list-element-label">{podcast?.title?.label?.toUpperCase()}</p>
            <p className="list-element-author">Author: {podcast['im:artist'].label}</p>
        </div>
    )
}

