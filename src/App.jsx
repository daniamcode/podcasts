import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          </Routes>
    </BrowserRouter>
  )
}

export default App;
