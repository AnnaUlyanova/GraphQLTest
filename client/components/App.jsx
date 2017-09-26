import React from 'react'
import { Link } from 'react-router-dom'

import Buttons from './Buttons'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function App () {

  return (
    <div>
      <Link to='/'> <h1>GraphQL Test</h1></Link>
      <MuiThemeProvider>
        <Buttons />
      </MuiThemeProvider>
    </div>
  );
}