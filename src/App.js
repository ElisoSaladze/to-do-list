import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from './components/TodoPage';
function App() {
  return (
  <div className="App">
    <Router>
        <Routes>
          <Route path="/to-do-list/" element={<Header />} />
          <Route path="/TodoPage" element={<TodoPage />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
