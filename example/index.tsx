import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useFlatForm from '../.';

const initState = {
  name: '',
  age: 0,
};

const PersonDetails = ({ name, age }) => {
  return (
    <div>
      <p>
        <b>Person Details</b>
      </p>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  );
};

const App = () => {
  const [state, setInputState, setFormState] = useFlatForm(initState);

  React.useEffect(() => {
    setFormState({
      name: 'some name',
      age: 20,
    });
  }, []);

  return (
    <div>
      <h3>Simple multiple input filed state using useFlatForm</h3>
      <hr />
      <div>
        <p>
          <b>Form</b>
        </p>
        <input
          value={state.name}
          onChange={e => setInputState('name', e.target.value)}
          placeholder="enter you name"
        />
        <br />
        <input
          value={state.age}
          type="number"
          onChange={e => setInputState('age', e.target.value)}
          placeholder="enter your age"
        />
      </div>
      <hr />
      <PersonDetails name={state.name} age={state.age} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
