import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../views/HomePage';
import { GlobalProvider } from '../component/checkSomeThing';
import SignUp1 from '../views/SignUp1';
import SignIn from '../views/SignIn';
import ViewBook2 from '../views/ViewBook2';
import AsideCategory from '../component/AsideCategory';
import CheckOut from '../views/Checkout';
import Games from '../views/Games';
const App = () => {

  return (
   <>
   <GlobalProvider>
     <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/viewbook2" element={<ViewBook2 />}/>
          <Route path="/SignUp1" element={<SignUp1/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/category' element={<AsideCategory/>}/>
          <Route path='/CheckOut' element={<CheckOut/>}/>
          <Route path='/games' element={<Games/>}/>
        </Routes>
      </div>
    </Router>
    </GlobalProvider>
   </>
  );
};

export default App;
