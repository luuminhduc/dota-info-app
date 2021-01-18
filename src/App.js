import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Heros from './pages/Heros';
import Items from './pages/Items';
import Header from './components/Header';
import SingleHero from './pages/SingleHero';
import SingleItem from './pages/SingleItem';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Header/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/heros">
            <Heros/>
          </Route>
          <Route exact path="/items">
            <Items/>
          </Route>
          <Route exact path="/heros/:name">
            <SingleHero/>
          </Route>
          <Route exact path="/items/:itemName">
            <SingleItem/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
 
export default App;