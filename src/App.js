import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import Construction from './pages/Construction';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/construction' element={<Construction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
