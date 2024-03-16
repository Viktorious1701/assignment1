import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { styled } from "styled-components"

const TimerWrapper = styled.div`
    margin-top: 30vh;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: #321;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px 0 #000;
    padding: 1rem 0;

    .stop-watch{
        font-size: 5rem;
    }
    label{
        margin-bottom: 0.5rem;
    }
    input{
        width: 100px;
        margin-right: 1rem;
        outline: none;
        border: none;
        font-size: 4.5rem;
        font-weight: bold;
        text-align: center;
        padding: 0 0.5rem;
    }
    input:hover{
        background-color: #fff;
        color: #000;
    }
`;
export default function Timer({ seconds, minutes, hours, changeSeconds, changeMinutes, changeHours}) {
    return (
        <TimerWrapper>
            <BsStopwatch className="stop-watch"/>
            <div className="d-flex flex-column">
                <label>hh</label>
                <input value={hours} onChange={changeHours}/>
            </div>
            <div className="d-flex flex-column">
                <label>mm</label>
                <input value={minutes} onChange={changeMinutes}/>
            </div>
            <div className="d-flex flex-column">
                <label>ss</label>
                <input value={seconds} onChange={changeSeconds} />
            </div>
        </TimerWrapper>
    );
}