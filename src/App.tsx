import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));

const App: React.FC = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <HashRouter>
      <div>
        <div>
          <Link exact to="/">
            Home
          </Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </HashRouter>
  </Suspense>
);

export default App;
