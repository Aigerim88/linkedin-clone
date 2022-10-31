import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className='app__body'>
        <SideBar />
        {/* SideBar */}
        {/* Feed */}
        {/* Widgets */}
      </div>
      
    </div>
  );
}

export default App;
