import * as React from 'react';
import './style.scss';

import Header from 'components/Header/Header';
import { Paragraph } from 'components/Paragraph/Paragraph';

const App: React.FC = () => (
  <div className="app">
    <Header />
    <Paragraph>jwneg</Paragraph>
  </div>
);

export default App;
