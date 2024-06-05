import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/*' element={<Navigate to={'/'} replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
