import React from 'react';
import './style.css';

const FolderIcon:React.FC = () => {
    return(
        <div className="folder-icon">
            <span className="folder-icon_img" />
            <span className="folder-icon_title">
                Title
            </span>
        </div>
    );
}

export default FolderIcon;