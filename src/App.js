import React from 'react';
import './App.css';
import Feed from './feed/Feed';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className='app__body'>
        <SideBar />
        <Feed />
        {/* Widgets */}
      </div>
      
    </div>
  );
}

export default App;
