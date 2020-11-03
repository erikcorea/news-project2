import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import News from './components/News/News';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Route path="/" component={Weather} />
        <Route path="/" exact component={News} />
        <Route path="/about" component={About} />
      </main>
    </div>
  );
}

export default App;
