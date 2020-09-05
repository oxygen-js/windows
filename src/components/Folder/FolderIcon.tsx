import React from 'react';

type ShowWindow = {
    editState: any
    showe: boolean
}

const FolderIcon:React.FC<ShowWindow> = (props) => {
    return(
        <div className="folder-icon" onDoubleClick={() => props.editState({show: !props.showe})}>
            <span className="folder-icon_img" />
            <span className="folder-icon_title">
                Project
            </span>
        </div>
    );
}

export default FolderIcon;