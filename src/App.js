import './App.css';
import HomePage from './components/HomePage';
import MoviesInformation from './components/MoviesInformation';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-information/:id" element={<MoviesInformation />} />
      </Routes>

    </div>
  );
}

export default App;
