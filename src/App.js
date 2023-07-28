import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/index.js';
import ShareAnExp from './pages/share-an-exp/ShareAnExp';
import AllExperience from './pages/all-experience/AllExperience';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="all-experiances" element={<AllExperience />} />
      <Route path="share-an-experience" element={<ShareAnExp />} />
    </Routes>
  );
}

export default App;
