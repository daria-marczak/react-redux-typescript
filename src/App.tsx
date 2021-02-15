import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

import 'style.scss';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));

const App: React.FC = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <HashRouter>
      <div className="app">
        <nav>
          <Link exact to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>

        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    </HashRouter>
  </Suspense>
);

export default App;
