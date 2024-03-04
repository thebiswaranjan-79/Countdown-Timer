import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSound from 'use-sound';
import pipSound from './pip.mp3'; // Path to your audio file
import tiktik from './tiktik.mp3';

const Countdown = () => {
    const[target,setTarget] = useState(null);
    const[diff, setDiff] = useState(0);
    const id = useRef(0);
    const [play] = useSound(pipSound);


    function handleSubmit(){
        id.current = setInterval(()=>{
            setDiff(new Date(target) - new Date());
        }, 1000);   
    }
    useEffect(() => {
        if(diff < 0){
            clearInterval(id.current);
            setDiff(0);
            toast.success('Countdown completed!');
            play(); // Play the pip sound
        }
    }, [diff, play]);

    const getDays = () => {
        return Math.floor(diff/(1000*60*60*24));
    }
    const getHours = () => {
        const hoursMiliSec = diff%(1000*60*60*24)
        return Math.floor(hoursMiliSec/(1000*60*60));
    }
    const getMin = () => {
        const MinmiliSec = diff % (1000*60*60);
     
        return Math.floor(MinmiliSec/(1000*60));

    }

    const getSeconds = () => {
        const secondsMiliSec = diff % (1000 * 60);
        return Math.floor(secondsMiliSec / 1000);
    };

    return (
        <div>
            <h1>CountDown Timer App</h1>
            <div id='input'>
                <input type="datetime-local" id='datetime'
                onChange={(e) => setTarget(e.target.value)}/>

                <button id='submit' onClick={handleSubmit}>Start</button>
            </div>

            <div id='display'>
                <ul>
                    <li><span id='days'>{getDays()}</span>Days</li>
                    <li><span id='hours'>{getHours()}</span>hr.</li>
                    <li><span id='minutes'>{getMin()}</span>min.</li>
                    <li><span id='seconds'>{getSeconds()}</span>sec.</li>
                </ul>
            </div>
        </div>
    );
}

export default Countdown;
