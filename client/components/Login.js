import React from 'react';
import { Link } from 'react-router-dom'

export default function Login () {

  return (
    <div>
      <h2>Login</h2>
       <Link to='/'> <p>Back Home</p></Link>
    </div>
  );
}

Login.displayName = 'Login';