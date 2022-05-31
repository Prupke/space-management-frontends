import React from 'react';
import waiting from './images/filterOptions/waiting.png';
import inproces from './images/filterOptions/inproces.png';
import letter from './images/filterOptions/new.png';
import check from './images/filterOptions/check.png';


const ScrollMenu = ({scrollTitle, }) => {
  return (
    <div className='scrollMenu'>
        <h1 className="scrollHeader">{scrollTitle}</h1>
        <div className='reparaties'>
            <img className="smallStatus" src={waiting} />
            <img className="smallStatus" src={inproces} />
            <img className="smallStatus" src={check} /> 
            <img className="smallStatus" src={letter} />
        </div>
    </div>
  )
}

export default ScrollMenu