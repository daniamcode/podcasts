import Filter from "./Filter"
import ListElement from "./ListElement"
import "../styles/Home.css";
import { useEffect, useState } from "react";

function HomeContent({podcasts}) {
    const [filter, setFilter] = useState('')
    const [results, setResults] = useState(0)
    const handleSearchChange = (event) => {
        setFilter((event.target.value).toLowerCase())
    }
    
    useEffect(()=> {
        const filteredPodcasts = podcasts?.podcastsList?.response?.filter(podcast => (
            podcast?.title?.label.toLowerCase().includes(filter) || podcast['im:artist'].label.toLowerCase().includes(filter)
        ))
        setResults(filteredPodcasts?.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[JSON.stringify([podcasts, filter])])

    return(
        <div className="home-content">
            <Filter handleSearchChange={handleSearchChange} results={results}/>
            <div className="home-list">
                {podcasts?.podcastsList?.response?.map(podcast => {
                    return (
                        <ListElement 
                            podcast={podcast} 
                            filter={filter}
                        />
                    )}
                )}
            </div>
        </div>
    )
}

export default HomeContent