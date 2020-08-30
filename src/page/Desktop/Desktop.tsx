import React, {useState} from 'react';
import ProgramTime from './Programm/PragramTime';
import FolderIcon from '../../components/Folder/FolderIcon';
import {IShowWindow} from '../interfaces'
import './style.css';

import ShutdownBtn from '../../assets/img/desktop/shutdown-btn.png'
import LogOff from '../../assets/img/desktop/log_off.png'
import { NavLink } from 'react-router-dom';

const Desktop:React.FC = () => {

    const [state, setState] = useState<IShowWindow>({show: false});

    return(
        <div className="desktop">
            <div className="desktop_grid">
                <FolderIcon />
            </div>
            <div className="desktop-start-block">
                <div 
                className='desktop-start-block_content'
                style={state.show ? {display: 'flex'} : {display: 'none'}}>
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
                <div className="desktop-panel">
                    <div className="desktop-panel_start"  onClick={() => setState({show: !state.show})}>
                        <span className="desktop-panel_start_icon"/>
                        start
                    </div>
                    <ProgramTime />
                </div>
            </div>
        </div>
    );
}

export default Desktop;


// Redux
// import { useSelector, useDispatch } from "react-redux";
// import {showWindow} from '../../redux/actions/action';
// import {IWindowState} from '../../redux/reducer/reducer'


// const showing = useSelector<IWindowState>(
//     (state) => state.show
// );

// const dispatch = useDispatch();
// const showingThisWindow = () => {
//     dispatch(showWindow());
// };
