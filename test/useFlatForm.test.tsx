import * as React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('it', () => {
  it('say hello', () => {
    function Component() {
      return <div>Hey everyone!</div>;
    }
    const tree = Enzyme.shallow(<Component />);
    expect(tree.text()).toBe('Hey everyone!');
  });
});
