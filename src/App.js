import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Cpost from './Components/Cpost/Cpost';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JsPost from './Components/JsPost/JsPost';
import Footer from './Components/Footer/Footer';
import NodeJs from './Pages/Node.js/NodeJs';
import ExpressJs from './Pages/Express.js/ExpressJs';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import JsDetails from './Pages/JsDetails/JsDetails';
import NodeJsDetails from './Pages/Node.js/NodeJsDetails/NodeJsDetails';
import ExpressDetails from './Pages/Express.js/ExpressDetails/ExpressDetails';
import CDetails from './Pages/CDetails/CDetails';
import SignUp from './Pages/SignUp/SignUp';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PriveateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>        
      <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <PrivateRoute path='/javascript/:postId'>
              <JsDetails/>
            </PrivateRoute>
            <Route path='/javascript' component={JsPost}/>
            <PrivateRoute path='/c/:postId' >
              <CDetails/>
            </PrivateRoute>
            <Route path='/c' component={Cpost}/>
            <PrivateRoute path='/node/:postId'>
              <NodeJsDetails/>
            </PrivateRoute>
            <Route path='/node' component={NodeJs}/>
            <PrivateRoute path='/express/:postId'>
              <ExpressDetails/>
            </PrivateRoute>
            <Route path='/express' component={ExpressJs}/>
            <Route path='/blogs'>
              <Blogs isLocation={true} />
            </Route>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='*' component={NotFound}/>
          </Switch>
          <Footer/>
      </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
