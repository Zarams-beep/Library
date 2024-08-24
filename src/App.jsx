import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../views/HomePage';
import ViewBook from '../views/ViewBook';
import { GlobalProvider } from '../component/checkSomeThing';
import SignUp1 from '../views/SignUp1';
import SignIn from '../component/SignIn';
import ViewBook2 from '../views/ViewBook2';
const App = () => {

  return (
   <>
   <GlobalProvider>
     <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/viewbook" element={<ViewBook />}/>
          <Route path="/viewbook2" element={<ViewBook2 />}/>
          <Route path="/SignUp1" element={<SignUp1/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
        </Routes>
      </div>
    </Router>
    </GlobalProvider>
   </>
  );
};

export default App;
