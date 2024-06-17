import React from 'react';
import './GuideStyle.css'
const Guide = () => {
  return (<div className='guide-style'> 
    <h2> This is a guidance for using the apps</h2> 
    <h4> This apps is intended for scan apps</h4>
    <ul>
        <li>Scan using your phone camera</li>
        <li>Make sure the target is QR CODE, else it doesn't work</li>
    </ul> 
</div>)
};

export default Guide;