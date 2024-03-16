import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import { BsFillPlayFill, BsFillPauseFill, BsFillStopFill } from "react-icons/bs"
export default function CountdownTimer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [isRunning, setIsRunning] = useState(null);

    //Clean up function here 
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);

                } else if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);

                } else if (hours > 0) {
                    setHours((hours) => hours - 1);
                    setMinutes(59);
                    setSeconds(59);

                }
            }, 1000);

        }

        return () => clearInterval(interval);
    }, [seconds, minutes, hours, isRunning]);
    //Start, pause and stop timer
    //start
    function startTimer() {
        if (hours !== 0 || minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
        } else {
            window.alert("Please enter a valid time");
        }

    }
    //pause
    function pauseTimer() {
        setIsRunning(false);
    }
    function stopTimer() {
        setIsRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);

    }

    // handlers
    const changeSeconds = (e) => {
        setSeconds(e.target.value);
    }
    const changeMinutes = (e) => {
        setMinutes(e.target.value);
    }
    const changeHours = (e) => {
        setHours(e.target.value);
    }
    return <div>
        <h1 className="title">Assignment 1: Create a Timer</h1>
        <Timer
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            changeSeconds={changeSeconds}
            changeMinutes={changeMinutes}
            changeHours={changeHours} />
        <br />

        {!isRunning && (
            <button className="btn btn-success" onClick={startTimer}><BsFillPlayFill /></button>
        )}
        {isRunning && (
            <button className="btn btn-warning" onClick={pauseTimer}><BsFillPauseFill /></button>
        )}
        {(
            <button className="btn btn-danger" onClick={stopTimer}><BsFillStopFill /></button>
        )}
    </div>

}