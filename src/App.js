
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pageone" element={<PageOne />} />
        <Route path="pagetwo" element={<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;
