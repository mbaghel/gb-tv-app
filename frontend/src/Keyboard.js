import React, { useState } from "react";
import styled from "styled-components/macro";

const LetterDiv = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 25vw;
  height: 25vw;
  justify-content: space-between;
`;

const KeyButton = styled.button`
  width: 16%;
  height: 16%;
  font-size: inherit;
  color: inherit;
  background-color: black;
  border: none;
`;

const Keyboard = props => {
  const [isShifted, setIsShifted] = useState(false);

  const listAlphabet = () => {
    const keys = [];
    const aCode = isShifted ? 65 : 97;
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(aCode + i);
      keys.push(
        <KeyButton onClick={props.handleLetters} key={char}>
          {char}
        </KeyButton>
      );
    }
    return keys;
  };

  return (
    <>
      <LetterDiv>
        {listAlphabet()}
        <KeyButton onClick={props.handleLetters}>1</KeyButton>
        <KeyButton onClick={props.handleLetters}>2</KeyButton>
        <KeyButton onClick={props.handleLetters}>3</KeyButton>
        <KeyButton onClick={props.handleLetters}>4</KeyButton>
        <KeyButton onClick={props.handleLetters}>5</KeyButton>
        <KeyButton onClick={props.handleLetters}>6</KeyButton>
        <KeyButton onClick={props.handleLetters}>7</KeyButton>
        <KeyButton onClick={props.handleLetters}>8</KeyButton>
        <KeyButton onClick={props.handleLetters}>9</KeyButton>
        <KeyButton onClick={props.handleLetters}>0</KeyButton>
      </LetterDiv>
      <KeyButton onClick={() => setIsShifted(!isShifted)}>{"^"}</KeyButton>
      <KeyButton onClick={props.backSpace}>{"<-"}</KeyButton>
      <KeyButton onClick={props.clear}>Cl</KeyButton>
    </>
  );
};

export default Keyboard;
