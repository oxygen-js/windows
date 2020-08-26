import React from 'react';
import './style.css';

const Authorization:React.FC = () => {
    return(
        <div className="window-authorization">
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">
                        Log On to Windows
                    </div>
                </div>
                <div className="window-authorization_bg" />
                <div className="window-body">
                    <form className="field-row-stacked window-authorization__form">
                        <span>
                            <span>
                                User name:
                            </span>
                            <input id="text22" type="text" />
                        </span>
                        <span>
                            <span>
                                Password:
                            </span>
                            <input id="text223" type="password" />
                        </span>
                    </form>
                    <div className="window-authorization__btns">
                        <button className="focused">
                            Ok
                        </button>
                        <button>
                            Cancel
                        </button>
                        <button>
                            Options
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Authorization;