import React, {useState} from 'react';

interface Time {
    hourse: number
    minutes: number
    seconds: number
}

const ProgramTime:React.FC = () => {
    let [time, setTime] = useState<Time>({
        hourse: 0,
        minutes: 0,
        seconds: 0
    });
    
    let date = new Date();
    setTimeout(() => {
        setTime({
            hourse: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        })
    })

    return(
        <div className="desktop-panel_programm">
            { time.hourse } : { time.minutes } : { time.seconds }
        </div>
    );
}

export default ProgramTime;