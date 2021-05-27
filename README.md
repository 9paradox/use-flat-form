# useFlatForm

[![NPM](https://img.shields.io/npm/v/use-flat-form.svg)](https://www.npmjs.com/package/use-flat-form)  ![NPM License](https://img.shields.io/npm/l/use-flat-form) ![minified size](https://img.shields.io/bundlephobia/min/use-flat-form)

A simple react form hook for multiple inputs. 

No need to create multiple useState hooks to manage your react form.

## Install

```bash
npm i use-flat-form
```

## Usage

```tsx
import * as React from 'react'

import useFlatForm from 'useFlatForm'

//your initial state
const initState = {
  name: '',
  age: 0,
};

//initialize useFlatForm which returns:-
//  'state' : with object structure of the initial state
//  'setInputState' : function to set input filed value, filed name should match state property
//  'setFormState' : function to set value for entire form state
const [state, setInputState, setFormState] = useFlatForm(initState);

//to use the state
<p>{state.name}</p>
<p>{state.age}</p>

//to set value to an input field (supports type hinting)
<input value={state.name} onChange={e => setInputState('name', e.target.value)} />
<input value={state.age} onChange={e => setInputState('age', e.target.value)} />

//to set value for the entire form
setFormState({ name: 'some name', age: 20 });
```

## Examples

1. [Simple useFlatForm react app example](https://github.com/9paradox/use-flat-form/blob/main/example/index.tsx) 

## License

[MIT](https://github.com/9paradox/use-flat-form/blob/main/LICENSE)