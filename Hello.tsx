import React from 'react';
import Dropdown from './Dropdown';

export default ({ name }) => (

  <div><h1>Hello {name}!</h1>
  <Dropdown>
    {[1, 2, 3, 4, 5].map( i=>  <div>{i}</div>)}
  </Dropdown>
  </div>

);
