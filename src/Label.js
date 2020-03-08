import React from "react";
import styled from "styled-components";
const Label = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.fontSize || "20px"};
  line-height: 23px;
  color: ${props => props.color || "black"};
  width: ${props => props.width || "auto"};
  font-family: Roboto;
`;

export default Label;
