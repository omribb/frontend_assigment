import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  input {
    width: 100%;
    font-size: 24px;
    padding: 5px 10px;
    border: 1px solid gray;
    border-radius: ${(props): string => props.theme.borderRadius};
    outline: none;
    font-family: Assistant, Arial, Helvetica, sans-serif;
    font-weight: 300;
    &:focus {
      border: 1px solid ${(props): string => props.theme.colors.accentColor};
    }
  }
`;

export const BInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeHolder: string;
}> = (props) => {
  return (
    <Wrapper>
      <input
        type="text"
        value={props.value}
        onChange={(e): void => props.onChange(e.target.value)}
        placeholder={props.placeHolder}
      />
    </Wrapper>
  );
};
