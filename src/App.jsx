import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import HomePage from '../views/HomePage';
const App = () => {

  return (
   <>
     <Router>
      <div>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
      
        </Routes>

        <Footer/>
      </div>
    </Router>
   </>
  );
};

export default App;
