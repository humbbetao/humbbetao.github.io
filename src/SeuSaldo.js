import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Slider from "./Slider";
import PieChart from "./PieChart";
import Label from "./Label";
import Share from "@material-ui/icons/Share";
import { ReactComponent as Ifood } from "./ifood.svg";
import { ReactComponent as Sympla } from "./sympla.svg";
import { ReactComponent as Udemy } from "./udemy.svg";
import { ReactComponent as Amazon } from "./amazon.svg";
import { ReactComponent as Usp } from "./usp.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";

const Spacing = styled.div`
  width: 100%;
  height: ${props => `${props.height * 8}px`};
`;

const Container = styled.div`
  width: 100%;
  height: 160px;
  border: 1px solid #9b51e0;
  padding: 8px;
  box-sizing: border-box;
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flex: "1",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    height: "100%"
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

export default function Started() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Label> Seu Saldo</Label>
      <Spacing height={3}></Spacing>
      <Label fontSize="28px" color="#871AB0">
        R$ 28,50
      </Label>
      <Spacing height={1}></Spacing>
      <Container>
        <Label fontSize="14px" color="#871AB0">
          Compartilhe e ganhe
        </Label>
        <Spacing height={1}></Spacing>
        <Label fontSize="14px" color="#828282">
          Para cada recomendação, você recebe <b>10 reais</b> e o seu amigo
          também.
        </Label>
        <Spacing height={1}></Spacing>
        <Button
          // onClick={() => history.push("./clicked4")}
          classes={{ root: { color: "#871AB0" } }}
          startIcon={<Share />}
          variant="text"
        >
          Convidar amigos
        </Button>
        <Label fontSize="14px" color="#871AB0"></Label>
      </Container>
      <Spacing height={1}></Spacing>

      <Label>O que resgatar</Label>
      <Spacing height={1}></Spacing>
      <img src={require("./iconreward01.png")} width="50px" height="50px"></img>
      <img src={require("./iconreward02.png")} width="50px" height="50px"></img>
      <img src={require("./iconreward03.png")} width="50px" height="50px"></img>
      <img src={require("./iconreward04.png")} width="50px" height="50px"></img>
      <img src={require("./iconreward05.png")} width="50px" height="50px"></img>
    </div>
  );
}
