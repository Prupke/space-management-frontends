import React from 'react'
import Button from './Button'
import logoBackground from './images/Background.png';

const Toolinformation = ({addbtn, toolname}) => {
  return (
    <div className='toolInformation'>
        <img src={logoBackground}></img>
        <h1 className='toolInformationText1'>Overzicht</h1>
        <h1 className='toolInformationText2'>{toolname}</h1>
      <Button title={addbtn}/>
    </div>
  )
}

export default Toolinformation
