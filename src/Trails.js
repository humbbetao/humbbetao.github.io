import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Slider from "./Slider";
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

export default function Trails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Label>Trilha recomendada </Label>
      <Spacing height={2} />
      <Paper classes={{ root: classes.rootPaper }} elevation={3}>
        <Button
          variant="contained"
          classes={{ root: classes.rootButton }}
          // backgroundColor="#9b51e0"
        >
          Primary
        </Button>
      </Paper>
      <Spacing height={4} />
      <Label> Similares a Engenheira Mecatrônica</Label>
      <Container>
        <Slider></Slider>
      </Container>
    </div>
  );
}
