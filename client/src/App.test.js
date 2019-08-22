import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      For Testing Purpose Only!
    </div>
  )
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
