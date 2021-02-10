import React from 'react';
import { Link, navigate } from 'gatsby';

export default function Home() {
  setTimeout(() => {
    navigate('/app/login');
  }, 100);
  return <Link to="/app/login">Login</Link>;
}
