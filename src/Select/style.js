import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 30%;
  background: ${(props) => props.bg};
  border: 1px solid #ccc;
  outline: ${(props) => props.outline && "2px solid #2684ff"};
  border-radius: 4px;
  text-align: left;

  input {
    display: inline-block;
    width: 100%;
    font-size: 16px;
    padding: 8px 40px 8px 10px;
    border: none;
    background: red;
    outline: none;
  }
`;

export const OptionsContainer = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  top: calc(100% + 5px);
  width: 100%;
`;

export const SingleOption = styled.div`
  background-color: #000;
  padding: 8px 10px;
  box-sizing: border-box;
  color: white;
`;
