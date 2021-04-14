import './App.css';
import HomeData from './Components/HomeData/HomeData';
import NavBar from './Components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Search from './Components/Search/Search';
import ShowData from './Components/ShowData/ShowData';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <HomeData></HomeData>
          </Route>
          <Route exact path="/">
            <HomeData></HomeData>
          </Route>
          <PrivateRoute path="/search/:id">
            <Search></Search>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/showdata">
            <ShowData></ShowData>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
