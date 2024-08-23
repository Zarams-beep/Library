import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../component/Footer';
import HomePage from '../views/HomePage';
import ViewBook from '../views/ViewBook';
import { GlobalProvider } from '../component/checkSomeThing';
const App = () => {

  return (
   <>
   <GlobalProvider>
     <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/viewbook" element={<ViewBook />}/>
      
        </Routes>

        <Footer/>
      </div>
    </Router>
    </GlobalProvider>
   </>
  );
};

export default App;
