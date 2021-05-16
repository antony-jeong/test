import React, { useEffect } from "react";
import "./App.css";
import styled from 'styled-components';
import AudioPlayer from "./audio-parts/AudioPlayer";

const ButtonWrapper = styled.div `
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: fit-content;
  margin: 0px;
  padding: 10px;
  border: 5px solid pink;
`

function App() {
  
  const audioPlayer1 = AudioPlayer();
  const audioPlayer2 = AudioPlayer();
  const audioPlayer3 = AudioPlayer();
  const audioPlayer4 = AudioPlayer();
  const audioPlayer5 = AudioPlayer();
  const audioPlayer1s = AudioPlayer();
  const audioPlayer2s = AudioPlayer();
  const audioPlayer4s = AudioPlayer();

  useEffect(() => {
    audioPlayer1.setInstrument("acoustic_grand_piano");
    audioPlayer2.setInstrument("acoustic_grand_piano");
    audioPlayer3.setInstrument("acoustic_grand_piano");
    audioPlayer4.setInstrument("acoustic_grand_piano");
    audioPlayer5.setInstrument("acoustic_grand_piano");
    audioPlayer1s.setInstrument("acoustic_grand_piano");
    audioPlayer2s.setInstrument("acoustic_grand_piano");
    audioPlayer4s.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick1 = () => {audioPlayer1.playNote("C4");};
  const handleClick2 = () => {audioPlayer2.playNote("D4");};
  const handleClick3 = () => {audioPlayer3.playNote("E4");};
  const handleClick4 = () => {audioPlayer4.playNote("F4");};
  const handleClick5 = () => {audioPlayer5.playNote("G4");};
  const handleClick1s = () => {audioPlayer1s.playNote("C#4");};
  const handleClick2s = () => {audioPlayer2s.playNote("D#4");};
  const handleClick4s = () => {audioPlayer4s.playNote("F#4");};

  return (
    <div className={"app-container"}>
      <ButtonWrapper>
        <div className={"piano-key"} onMouseDown={handleClick1} onMouseUp={audioPlayer1.stopNote} onMouseOut={audioPlayer1.stopNote}>
          <div className={"piano-key-text"}>R</div>
        </div>
        <div className={"piano-black-key-wrapper"}>
        <div className={"piano-black-key"} onMouseDown={handleClick1s} onMouseUp={audioPlayer1s.stopNote} onMouseOut={audioPlayer1s.stopNote}>
          <div className={"piano-key-text"}>5</div>
        </div></div>
        <div className={"piano-key"} onMouseDown={handleClick2} onMouseUp={audioPlayer2.stopNote} onMouseOut={audioPlayer2.stopNote}>
          <div className={"piano-key-text"}>T</div>
        </div>
        <div className={"piano-black-key-wrapper"}>
        <div className={"piano-black-key"} onMouseDown={handleClick2s} onMouseUp={audioPlayer2s.stopNote} onMouseOut={audioPlayer2s.stopNote}>
          <div className={"piano-key-text"}>6</div>
        </div></div>
        <div className={"piano-key"} onMouseDown={handleClick3} onMouseUp={audioPlayer3.stopNote} onMouseOut={audioPlayer3.stopNote}>
          <div className={"piano-key-text"}>Y</div>
        </div>
        <div className={"piano-key"} onMouseDown={handleClick4} onMouseUp={audioPlayer4.stopNote} onMouseOut={audioPlayer4.stopNote}>
          <div className={"piano-key-text"}>U</div>
        </div>
        <div className={"piano-black-key-wrapper"}>
        <div className={"piano-black-key"} onMouseDown={handleClick4s} onMouseUp={audioPlayer4s.stopNote} onMouseOut={audioPlayer4s.stopNote}>
          <div className={"piano-key-text"}>8</div>
        </div></div>
        <div className={"piano-key"} onMouseDown={handleClick5} onMouseUp={audioPlayer5.stopNote} onMouseOut={audioPlayer5.stopNote}>
          <div className={"piano-key-text"}>I</div>
        </div>
      </ButtonWrapper>
    </div>
  );
}

export default App;
