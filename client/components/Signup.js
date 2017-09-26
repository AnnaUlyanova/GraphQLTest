import React from 'react';
import { Link } from 'react-router-dom'

export default function Signup () {

  return (
    <div>
      <h2>SignUp</h2>
      <Link to='/'> <p>Back Home</p></Link>
    </div>
  );
}

Signup.displayName = 'Signup';