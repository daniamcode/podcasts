import "../styles/Home.css";

function Filter({ handleSearchChange, results }) {
    return(
        <div className="filter-container">
            <div className="podcasts-number">
                {results}
            </div>
            <input
                placeholder="Filter podcasts..."
                className="filter"
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Filter