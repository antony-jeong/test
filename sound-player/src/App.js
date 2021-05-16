import React, { useEffect } from "react";
import "./App.css";
import styled from 'styled-components';
import AudioPlayer from "./components/AudioPlayer";

const ButtonWrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "C4 E4 G4";
  height: 90vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
`

function App() {
  const audioPlayer1 = AudioPlayer();
  const audioPlayer2 = AudioPlayer();
  const audioPlayer3 = AudioPlayer();

  useEffect(() => {
    audioPlayer1.setInstrument("acoustic_grand_piano");
    audioPlayer2.setInstrument("acoustic_grand_piano");
    audioPlayer3.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick1 = () => {
    audioPlayer1.playNote("C4");
  };

  const handleClick2 = () => {
    audioPlayer2.playNote("E4");
  };

  const handleClick3 = () => {
    audioPlayer3.playNote("G4");
  };

  return (
    <div className={"app-container"} style={{margin: "0px", padding: "0px"}}>
      <ButtonWrapper>
        <button className={"playButton"} onClick={handleClick1}>C4</button>
        <button className={"playButton"} onClick={handleClick2}>E4</button>
        <button className={"playButton"} onClick={handleClick3}>G4</button>
      </ButtonWrapper>
    </div>
  );
}

export default App;
