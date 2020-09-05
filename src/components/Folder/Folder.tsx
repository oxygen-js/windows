import React, {useState} from 'react';
import FolderIcon from './FolderIcon';
import FolderContent from './FolderContent';
import {IShowWindow} from '../../page/interfaces'
import './style.css';

const Folder:React.FC = () => {
    const [state, setState] = useState<IShowWindow>({show: false});
    return(
        <div className="folder">
           <FolderIcon editState={setState} showe={state.show}/>
           <FolderContent showe={state.show} editState={setState}/>
        </div>
    );
}

export default Folder;