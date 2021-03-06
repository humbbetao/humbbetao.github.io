import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Slider from "./Slider";
import { useHistory } from "react-router-dom";
import Label from "./Label";

const Spacing = styled.div`
  width: 100%;
  height: ${props => `${props.height * 8}px`};
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flex: "1",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  rootPaper: {
    backgroundColor: "#ccc",
    // margin: theme.spacing(1),
    width: "100%",
    height: theme.spacing(16),
    display: "flex",
    alignItems: "flex-end"
  },
  rootButton: {
    // backgroundColor: "#9b51e0",/
    background: "linear-gradient(110.73deg, #871AB0 2.42%, #E435F3 85.64%);",
    color: "#fff",
    width: "100%"
  }
}));

// #E435F3
// #8A1BB2

export default function Trails(props) {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
     
      <Spacing height={4} />
      <Label> Engenharia Mecatrônica</Label>
      <Container>
        <Slider></Slider>
      </Container>
      <Spacing height={2} />
      <Label> Engenharia de Dados</Label>
      <Container>
        <Slider></Slider>
      </Container>
      <Spacing height={2} />
      <Label> Engenharia da Computação</Label>
      <Container>
        <Slider></Slider>
      </Container>
    </div>
  );
}
