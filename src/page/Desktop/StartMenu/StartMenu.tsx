import React from 'react';

import ShutdownBtn from '../../../assets/img/desktop/shutdown-btn.png'
import LogOff from '../../../assets/img/desktop/log_off.png'
import { NavLink } from 'react-router-dom';

type showeState = {
    showe: boolean
}

const StartMenu:React.FC<showeState> = (props) => {

    return(
        <div 
        className='desktop-start-block_content'
        style={props.showe ? {display: 'flex'} : {display: 'none'}}>
            <div className='desktop-start-block_content_top'>
                USER
            </div>
            <div className='desktop-start-block_content_main'>
                CONTENT BLOCK
            </div>
            <div className='desktop-start-block_content_bottom'>
                <NavLink to='/'>
                    <img src={LogOff} width='30' height='30' alt="Power OFF" />
                    Log Off
                </NavLink>
                <span>
                    <img src={ShutdownBtn} width='40' height='40' alt="Power OFF" />
                    Turn off Computer
                </span>
            </div>
        </div>
    );
}

export default StartMenu;

