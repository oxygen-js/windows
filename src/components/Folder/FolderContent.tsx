import React from 'react';

type ShowWindow = {
    editState: any
    showe: boolean
}


const FolderContent:React.FC<ShowWindow> = (props) => {
    return(
        <div 
        className="folder-content window"
        style={props.showe ? {display: 'block'} : {display: 'none'}}
        >
            <div className="title-bar">
                <div className="title-bar-text">
                    Project
                </div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close" onClick={() => props.editState({show: !props.showe})}></button>
                </div>
            </div>
        </div>
    );
}

export default FolderContent;