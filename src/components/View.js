import React, { useEffect, useState } from 'react';

import icon from '../images/free-code-camp.svg'

const Pad = (props) => {

    const [state] = useState("")


    const keyDownHandler = (e) => {

        if(e.keyCode === props.pad.keycode) {
          const sound = document.getElementById(props.pad.id);
          sound.volume = props.value.state.volume / 100;
          sound.play()

          props.value.setSoundName(props.pad.keyName)
        }
    }


    useEffect(() => {
        if (props.value.state.isOn) {
            document.addEventListener('keydown', keyDownHandler)

        }
            return () => {document.removeEventListener('keydown', keyDownHandler)}
    })

    const className = props.value.state.isOn ? `drum-pad activeDrumPad ${state}`:  "drum-pad" ;

    return (
        <button
            className= {className}
            onClick={props.value.padClickHandler}
            name={props.pad.keyName}
        >
            {props.children}
            <audio src={props.pad.path} id={props.pad.id} className="clip"></audio>
        </button>
    );
};

export const View = ({value}) => {

    const pads = value.sounds.map(item => <Pad key={item.id} value= {value} pad={item}>{item.id}</Pad>)
    const soundVolume = value.state.isOn ? "sound-volume" : undefined;

    return (
        <>
            <div id="drum-machine" className="container">
                <section id="display">
                    <div style={{height: `${value.state.volume}%`}} id={soundVolume}></div>
                    <span>{value.state.soundName}</span>
                </section>
                <section id="volumes">
                    <div className="volume"><input type="range" min="0" max="80" value={value.state.volume} onChange={value.volumeHandler} /></div>
                    <div className="volume"><input type="range" disabled></input></div>
                </section>
                <section id="buttons">
                    <button onClick={value.powerHandker}>Power</button>
                    <span> FFC <img src={icon} alt="freeCoCamp logo"/></span>
                </section>
                <section id="pads">
                    {pads}
                </section>
            </div>
        </>
    );
};