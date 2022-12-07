import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './Components/Test';
import TestFinish from './Components/TestFinish';
import WelcomePage from './Components/WelcomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="/finish" element={<TestFinish />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
