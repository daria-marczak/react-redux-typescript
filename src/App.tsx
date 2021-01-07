import React from 'react';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

import About from 'pages/About';
import Home from 'pages/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <div className="menu">
        <Link exact to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
