import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Slider from "./Slider";
import PieChart from "./PieChart";
import Label from "./Label";
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
  height: 250px;
  border: ;
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

export default function Started() {
  return (
    <div>
      <Label> Seu Saldo</Label>
      <Label fontSize="28px" color="#871AB0">
        R$ 28,50
      </Label>
      <Container>
        <Label fontSize="14px" color="#871AB0">
          Compartilhe e ganhe
        </Label>
        <Label>
          Para cada recomendação, você recebe <b>10 reais</b> e o seu amigo
          também.
        </Label>
        <Label fontSize="14px" color="#871AB0">
          Convidar amigos
        </Label>
      </Container>
      <Label>O que resgatar</Label>
      <Ifood />
      <Sympla />
      <Udemy />
      <Amazon />
      <Usp />
      <Linkedin />
    </div>
  );
}
