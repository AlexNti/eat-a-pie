import React from 'react';
import { Link, navigate } from 'gatsby';

export default function Home() {
  setTimeout(() => {
    navigate('/app/login');
  }, 20);
  return <Link to="/app/login" />;
}
