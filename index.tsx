import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Navbar from './Navbar';
import 'tailwindcss/dist/tailwind.min.css';


function App(props){
  return(
    <div>
      <Navbar/>
     <Hello name={'All'}/>
    </div>
  )
}

render(<App />, document.getElementById('root'));
