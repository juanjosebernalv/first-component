import React from 'react';

export const Main = ({ children }) => {
  return (
    <main>
      <pre>
        {children.map(item => item)}
      </pre>
    </main>
  );
};
