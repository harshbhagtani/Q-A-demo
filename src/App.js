import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './Components/Test';
import WelcomePage from './Components/WelcomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/test/" element={<TestPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
