import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Slider from "./Slider";
import { useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { ReactComponent as Icon } from "./icon.svg";
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
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "60px 32px"
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
  },
  rootButtonColor: {
    color: "#fff",
    color: "#9b51e0",
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function Trails(props) {
  const classes = useStyles();
  let history = useHistory();
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      Preimiação
      <Icon></Icon>
      <Label>Você agora é um entusiasta</Label>
      <Label fontSize="14px" color="#ccc">
        Você está a um passo mais próximo de realizar o seu sonho, sabia? Por
        isso gostaríamos te recompensar com R$ 2,00. Acreditamos no seu futuro,
        boa sorte!
      </Label>
      <Button
        onClick={() => history.push("./clicked6")}
        variant="contained"
        classes={{ root: classes.rootButton }}
      >
        Continuar aprendendo
      </Button>
      <Button
        variant="text"
        onClick={() => {
          if (navigator.share) {
            navigator
              .share({
                title: "web.dev",
                text: "Check out web.dev.",
                url: "https://web.dev/"
              })
              .then(() => console.log("Successful share"))
              .catch(error => console.log("Error sharing", error));
          }
        }}
        variant="contained"
        classes={{ root: classes.rootButtonColor }}
      >
        Compartilhar
      </Button>
    </div>
  );
}
