import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Episode from './components/Episode';
import Header from './components/Header';
import Home from './components/Home'
import Podcasts from './components/Podcasts';

function App() {
  return(
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/podcast/:podcastId" element={<Podcasts />} />
            <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App;
