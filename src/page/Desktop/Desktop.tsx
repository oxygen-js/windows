import React, {useState} from 'react';
import ProgramTime from './Programm/ProgramTime';
import StartMenu from './StartMenu/StartMenu'
import Folder from '../../components/Folder/Folder';
import {IShowWindow} from '../interfaces'
import './style.css';

const Desktop:React.FC = () => {

    const [state, setState] = useState<IShowWindow>({show: false});

    return(
        <div className="desktop">
            <div className="desktop_grid">
                <Folder />
            </div>
            <div className="desktop-start-block">
                <StartMenu showe={state.show} />
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
