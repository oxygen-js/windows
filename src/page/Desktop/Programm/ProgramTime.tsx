import React from 'react';
import {connect} from 'react-redux';

interface propsProgramTime {
    getTime():void;
    current?:string
}

const ProgramTime:React.FC<propsProgramTime> = (props) => {  

    setTimeout(() => {
        props.getTime();
    }, 1000)

    return(
        <div className="desktop-panel_programm">
           {props.current}
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        current: state.currentTime.current
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        getTime: () => dispatch({type: 'CURRENT_TIME', time: new Date().toLocaleTimeString()})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramTime);