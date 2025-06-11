import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomeScreen from './screens/HomeScreen';
import ArtisteScreen from './screens/ArtisteScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen/>} exact />
          <Route path='/artiste/:id' element={<ArtisteScreen/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
