import React from 'react';
import './App.css';
import Heading from '../components/Heading';
import Content from '../components/Content';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Heading/>
        <Content/>
      <Footer />  
    </div>
  );
}

export default App;
