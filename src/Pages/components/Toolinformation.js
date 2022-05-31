import React from 'react'
import Button from './Button'
import logoBackground from './images/Background.png';

const Toolinformation = ({addbtn, toolname}) => {
  return (
    <div className='toolInformation'>
        <img src={logoBackground}></img>
        <div className='headerInfo'> 
          <h1 className='toolInformationText1'>Overzicht</h1>
          <h1 className='toolInformationText2'>{toolname}</h1>
          <Button className="add-button" title={'reparatie aanmaken'}/>
        </div>
    </div>
  )
}

export default Toolinformation
