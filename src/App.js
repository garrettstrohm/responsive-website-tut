import {Navbar, Footer} from './components'
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
