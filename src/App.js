import React from 'react'
import { Switch, Route } from 'react-router';
import './App.scss';
import HeaderNav from './components/HeaderNav';
import FooterCom from './components/FooterCom';
import home from './pages/home';

function App() {

  return (
    <div className="App">
      <HeaderNav/>
      <Switch>
        <Route exact path="/" component={home} />
      </Switch>
      <FooterCom/>
    </div>
  );
}

export default App;

