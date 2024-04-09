import React, { useState } from 'react';
import './App.css';

import { View } from './components/View';

const sounds = [
  {
      id: 'Q',
      keyName: 'Heater 1',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      keycode: 81,
  },
  {
      id: 'W',
      keyName: 'Heater 2',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      keycode: 87,
  },
  {
      id: 'E',
      keyName: 'Heater 3',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      keycode: 69,
  },
  {
      id: 'A',
      keyName: 'Heater 4',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      keycode: 65,
  },
  {
      id: 'S',
      keyName: 'Clap',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      keycode: 83,
  },
  {
      id: 'D',
      keyName: 'Open-HH',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      keycode: 68,
  },
  {
      id: 'Z',
      keyName: 'Kick-n\'-Hat',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      keycode: 90,
  },
  {
      id: 'X',
      keyName: 'Kick',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      keycode: 88,
  },
  {
      id: 'C',
      keyName: 'Closed-HH',
      path: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      keycode: 67,
  }
];

function App() {

  const [state, setState] = useState({
    isOn: false,
    keyName: '',
    volume: 50,
    soundName: '',
  });


  const powerHandker = ({target}) => {
    setState(prevState => ({...prevState, isOn:!state.isOn}))

    if (!state.isOn) {
      target.classList.add("activeBtn");
    } else {
      target.classList.remove("activeBtn");
    }
  }


  const volumeHandler = ({target}) => {
    setState(prevState => ({...prevState, volume:target.value}));
  }


  const setSoundName =(name) => {
    setState(prevState => ({...prevState, soundName:name}))
    setTimeout(() => {
      setState(prevState => ({...prevState, soundName:''}))
    }, 1500)
    };



  const padClickHandler = ({target}) => {
    if (state.isOn) {
    const sound = target.firstElementChild;
    sound.volume = state.volume / 100;
    sound.play();

    setSoundName(target.name);
    }
}

  return (
    <React.Fragment>
      <View value={{padClickHandler, sounds, powerHandker, volumeHandler, state, setSoundName}} />
    </React.Fragment>
  );
}

export default App;
