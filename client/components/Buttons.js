import React from 'react';
import { Link } from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';

export default function Buttons () {

  return (
    <div>
      <Link to='/signup'><RaisedButton label='Signup' /></Link>
      <Link to='/login'><RaisedButton label='Login' /></Link>
    </div>
  );
}

Buttons.displayName = 'Buttons';