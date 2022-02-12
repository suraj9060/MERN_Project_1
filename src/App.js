
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/all" component={AllUser} />
        <Route exact path="/add" component={AddUser} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
