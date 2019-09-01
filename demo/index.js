import React from 'react';
import ReactDOM from 'react-dom';
import Flipclock from '../src/flipclock';

const App = (
  <div style={{ width: 200, height: 260 }}>
    <Flipclock />
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
