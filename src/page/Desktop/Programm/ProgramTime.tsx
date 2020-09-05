import React from 'react';
import {connect} from 'react-redux';

type propsProgramTime = {
    getTime: any
    currentTime:{
        current: string
    }
}

const ProgramTime:React.FC<propsProgramTime> = (props) => {  

    setInterval(() => {
        let time: string = new Date().toLocaleTimeString();
        props.getTime(time);
    }, 1000)

    return(
        <div className="desktop-panel_programm">
            {props.currentTime.current}
        </div>
    );
}

const mapStateToProps = (state:any) => {
    console.log(state);
    return {
        current: state.currentTime.current
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        getTime: (time:string) => dispatch({type: 'CURRENT_TIME', time})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramTime);