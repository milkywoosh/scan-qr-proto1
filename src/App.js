// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import TabContent from './components/TabContents';
import './App.css';
 
const App = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState();
 
  const openTab = (tabName) => {

    if (!tabs.includes(tabName)) {
      console.log("exists !")
      setTabs([...tabs, tabName]);
    }

    setActiveTab(tabName);   
  }; 

  

  const closeTab = (tabName) => {
    if (tabs.length === 1) return; // Prevent closing the last tab
 
    const newTabs = tabs.filter((tab, i) => tab !== tabName);
    setTabs([...newTabs]);
    setActiveTab(activeTab)
  };
  

  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink onClick={()=> openTab('Home')} to="/home">Home</NavLink>
          <NavLink onClick={()=> openTab('About')} to="/about">About</NavLink>
          <NavLink onClick={()=> openTab('Contact')} to="/contact">Contact</NavLink>
          <NavLink onClick={()=> openTab('Guide')} to="/guide">Guide</NavLink>
          <NavLink onClick={()=> openTab('Scan')} to="/scan">Scan</NavLink>
        </nav>
        
        <div className="tab-navigation">
          {tabs.map((tab,index, arr) => {
              return (<div key={index} className={`tab ${tab === activeTab ? 'active' : ''}`} >
                {/* permasalahan closure, saat "v" di click, dia sekaligus hit setActiveTab(), ini berbahaya ! */}
                <button className='button-close' onClick={()=> closeTab(tab)}>x</button>
                <div onClick={()=> setActiveTab(tab)}> {tab}</div>  
                {/* ketika close dipanggil, disaat yg bersamaan jg  hit setActiveTab(), ini berbahaya!*/}
              </div>)
          })}
        </div>
        <div className="tab-content">
              <TabContent activeTab={activeTab} />
            </div>
      </div>
    </Router>
  );
};

export default App;
