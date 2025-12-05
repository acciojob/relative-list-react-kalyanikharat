import React from 'react';
import RelativeList from './Relativelist';   // import your component

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <h1>Diwali Shopping Visits</h1>
      <p>Here are the relatives I plan to visit:</p>
      <RelativeList />   {/* render the list here */}
    </div>
  );
};

export default App;
