// src/components/TabContent.js
import React from 'react';
import Home from './home/Home';
import Contact from './contact/Contact';
import About from './about/About';
import Guide from './guide/Guide';
import QrScanner from './scan_qrcode/ScanQRCode';


const TabContent = ({activeTab}) => {
  switch (activeTab) {
    case 'Home':
      console.log("ac", activeTab)
      return <Home />
    case 'Contact':
      console.log("ac", activeTab)
      return <Contact/>
    case 'About':
      console.log("ac", activeTab)
        return <About/>
    case 'Guide':
      console.log("ac", activeTab)
        return <Guide/>
    case 'Scan':
      console.log("ac", activeTab)
        return  <QrScanner/>
    default:
      return null;
  }
};

export default TabContent;
