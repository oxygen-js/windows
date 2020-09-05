import React from 'react';

interface Time {
    date: string 
}

let time: any = setInterval(() => new Date().toLocaleTimeString(), 1000)

const ProgramTime:React.FC = () => {  

    return(
        <div className="desktop-panel_programm">
            { time }
        </div>
    );
}
export default ProgramTime;