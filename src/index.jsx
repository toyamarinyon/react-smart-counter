import React from 'react';
import { render } from 'react-dom';
import SmartCounter from '../es6/SmartCounter';

render(
  <SmartCounter max={5} min={0} step={0.5} suffix="以上" onChange={(value) => console.log(value)}/>,
  document.getElementById('root')
);

