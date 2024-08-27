import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import HomePage from './views/HomePage';
import { GlobalProvider } from './component/checkSomeThing';
import SignUp1 from './views/SignUp1';
import SignIn from './views/SignIn';
import ViewBook2 from './views/ViewBook2';
import AsideCategory from './component/AsideCategory';
import CheckOut from './views/Checkout';
import Games from './views/Games';
const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>,
  },
  {
    path:"/viewbook",
    element:<ViewBook2 />,
  },
  {
    path: "/sign-up",
    element:<SignUp1/>,
  },
  {
    path:'/sign-in', 
    element: <SignIn/>,
  },
  {
    path:'/category', 
    element:<AsideCategory/>, 
  },
  {
    path:'/check-out', 
    element:<CheckOut/>,
  },
  {
    path:'/games', 
    element:<Games/>,
  }
]);
function App () {

  return (
   <GlobalProvider>
     <RouterProvider router={router}/>
    </GlobalProvider>
  );
};

export default App;
