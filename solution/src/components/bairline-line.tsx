import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IAirlineSearchResponse } from "../models/IAirlineSearchResponse";

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: ${(props): string => props.theme.borderRadius};
  cursor: pointer;
  user-select: none;
  text-align: start;
  &:hover {
    background-color: lightgrey;
  }
`;

export const BAirlineLine: React.FC<{ data: IAirlineSearchResponse }> = (
  props
) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={(): void => navigate("/airline/" + props.data.code)}>
      <div style={{ width: "50px" }}>
        <img src={props.data.logo} alt="" style={{ height: "22px" }} />
      </div>
      <div style={{ width: "calc(100% - 50px)" }}>
        {props.data.code}&nbsp;{"-"}&nbsp;{props.data.name}
      </div>
    </Wrapper>
  );
};
