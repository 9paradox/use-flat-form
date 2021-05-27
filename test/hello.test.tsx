import * as React from 'react';
import * as ReactDOM from 'react-dom';

describe('it', () => {
  it('renders Hello without crashing', () => {
    const div = document.createElement('div');
    const Hello = () => { return <p>Hello</p>};
    ReactDOM.render(<Hello/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
