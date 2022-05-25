import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:Country" index element={<Details />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
