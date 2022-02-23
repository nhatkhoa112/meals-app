import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import RandomMeal from './components/RandomMeal/RandomMeal';
import Categories from './components/Categories/Categories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/categories" exact element={<Categories />} />
          <Route path="/random" exact element={<RandomMeal />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
