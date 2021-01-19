import React, {useState} from 'react';
import Article from './Article';

function App() {
  const [title] = useState([{titre: "Harry Potter"}, {titre: "Lord of the Rings"}, {titre: "Star Trek"}]);
  return (
    <div className="App">
      <Article titre={title}/>
    </div>
  );
};

export default App;