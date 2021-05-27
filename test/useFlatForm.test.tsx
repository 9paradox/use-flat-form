import * as React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import useFlatForm from './../src/';

Enzyme.configure({ adapter: new Adapter() });

describe('it', () => {
  it('say hello', () => {
    function Component() {
      return <div>Hey everyone!</div>;
    }
    const tree = Enzyme.shallow(<Component />);
    expect(tree.text()).toBe('Hey everyone!');
  });

  it('say hello using flat form', () => {
    function Component() {
      const initState = {
        text: 'Hello useFlatForm',
      };
      const [myState] = useFlatForm(initState);
      return <div>{myState.text}</div>;
    }
    const tree = Enzyme.shallow(<Component />);
    expect(tree.text()).toBe('Hello useFlatForm');
  });
});
