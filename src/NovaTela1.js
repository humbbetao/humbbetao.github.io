import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Slider from "./Slider";
import { useHistory } from "react-router-dom";
const Label = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.fontSize || "20px"};
  line-height: 23px;
`;

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
  console.log(props);
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <Label>Trilha recomendada </Label>
      <Label> Similares a Engenheira Mecatrônica</Label>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Label fontSize="19px">Nível 1</Label>
        <Money> R$ 2,00</Money>
      </div>
      <Spacing height={2} />
      <Paper onClick={()=>{history.push("/clicked2")}}classes={{ root: classes.rootPaper }} elevation={3}></Paper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Label fontSize="19px">Nível 1</Label>
        <Money> R$ 2,00</Money>
      </div>
      <Spacing height={2} />
      <Paper classes={{ root: classes.rootPaper }} elevation={3}></Paper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Label fontSize="19px">Nível 2</Label>
        <Money> bloqueado</Money>
      </div>
      <Spacing height={2} />
      <Paper classes={{ root: classes.rootPaper }} elevation={3}></Paper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Label fontSize="19px">Nível 2</Label>
        <Money> bloqueado</Money>
      </div>
      <Spacing height={2} />
      <Paper classes={{ root: classes.rootPaper }} elevation={3}></Paper>
    </div>
  );
}
