import React from 'react';
import './style.css';

const Authorization:React.FC = () => {
    return(
        <div className="window-authorization">
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Authorization</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <div className="field-row-stacked">
                        <input id="text22" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Authorization;