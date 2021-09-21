import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom'
import './css/App.css'
import Workspace from './components/Workspace';
import BuySharePage from './components/Pages/BuySharePage';
import HistoryPage from './components/Pages/HistoryPage';
import PayoutsPage from './components/Pages/Payouts';



const App = (props) => {
  const routes = (
    <Switch>
      <Route path="/stock-payment" exact component={BuySharePage} />
      <Route path="/history" exact component={HistoryPage} />
      <Route path="/payouts" exact component={PayoutsPage} />
    </Switch>
  );

  return (
    <div className="App">
      <Header />
      <Workspace routes={routes} />
    </div>
  );

}

export default App;