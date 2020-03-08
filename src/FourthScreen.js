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
    flexWrap: "wrap",
    backgroundColor: "#8A1BB2"
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
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function Trails(props) {
  console.log(props);
  const classes = useStyles();
  let history = useHistory();
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Label fontSize="20px">Esse conteúdo foi útil para você? </Label>
      <Button
        onClick={() => history.push("./clicked4")}
        variant="contained"
        classes={{ root: classes.rootButton }}
      >
        Primary
      </Button>
      <Button
        onClick={() => history.push("./clicked4")}
        variant="contained"
        classes={{ root: classes.rootButton }}
      >
        Primary
      </Button>
    </div>
  );
}
