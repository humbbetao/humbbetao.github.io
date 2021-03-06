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
    // backgroundColor: "#ccc",
    // margin: theme.spacing(1),
    width: "296px",
    height: "100px",
    display: "flex",
    alignItems: "flex-end"
  },
  rootButton: {
    backgroundColor: "#9b51e0",
    color: "#fff",
    width: "100%"
  }
}));

const Money = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: right;

  /* roxo1 */

  color: #8a1bb2;
`;

export default function Trails(props) {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <Label fontSize="20px">Trilha recomendada </Label>
      <Spacing height={1} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%,",
          flex: 1
        }}
      >
        <Label fontSize="16px">Nível 1</Label>
        <Money> Recompensa R$ 2,00</Money>
      </div>
      <Spacing height={2} />
      <Paper
        onClick={() => {
          history.push("/clicked2");
        }}
        classes={{ root: classes.rootPaper }}
        elevation={0}
      >
        <img src={require("./Group 34.png")} width="100%" height="100%"></img>
      </Paper>

      <Spacing height={1} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%,",
          flex: 1
        }}
      >
        <Label fontSize="16px">Nível 2</Label>
        <Money> bloqueado</Money>
      </div>
      <Spacing height={2} />
      <Paper
        onClick={() => {
          history.push("/clicked2");
        }}
        classes={{ root: classes.rootPaper }}
        elevation={0}
      >
        <img src={require("./Group 35.png")} width="100%" height="100%"></img>
      </Paper>

      <Spacing height={2} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%,",
          flex: 1
        }}
      >
        <Label fontSize="16px">Nível 3</Label>
        <Money> bloqueado</Money>
      </div>
      <Spacing height={2} />
      <Paper
        onClick={() => {
          history.push("/clicked2");
        }}
        classes={{ root: classes.rootPaper }}
        elevation={0}
      >
        <img src={require("./Group 35.png")} width="100%" height="100%"></img>
      </Paper>
    </div>
  );
}
