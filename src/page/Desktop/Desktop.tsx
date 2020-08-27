import React from 'react';
import ProgramTime from './Programm/PragramTime'
import FolderIcon from '../../components/Folder/FolderIcon'
import './style.css'

const Desktop:React.FC = () => {
    return(
        <div className="desktop">
            <div className="desktop_grid">
                <FolderIcon />
            </div>
            <div className="desktop-panel">
                <div className="desktop-panel_start">
                    <span className="desktop-panel_start_icon"/>
                    start
                </div>
                <ProgramTime />
            </div>
        </div>
    );
}

export default Desktop;