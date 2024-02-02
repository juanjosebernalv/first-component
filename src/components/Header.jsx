import React from 'react';

export default function Header({ title, onAlgo }) {
  return (
    <header>
      <h1>{title}</h1>
      <button onClick={onAlgo}>Clic</button>
    </header>
  );
}

