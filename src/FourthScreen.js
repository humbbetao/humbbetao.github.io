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
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import Label from "./Label";
import Spacing from "./Spacing";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flex: "1",
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#8A1BB2",
    padding: "40px 32px",
    color: "#fff",
    textAlign: "center",
    boxSizing: "border-box"
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
    backgroundColor: "#8A1BB2",
    border: "1px solid #8A1BB2",
    color: "#fff",
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  formLabel: { color: "#fff", fontWeight: 500 }
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
      <Label fontSize="20px" color="white">
        Esse conteúdo foi útil para você?
      </Label>
      <Spacing height={20} />
      <Button
        onClick={() => history.push("./clicked3")}
        variant="contained"
        classes={{ root: classes.rootButton }}
        endIcon={<ThumbUp />}
      >
        Sim, gostei
      </Button>
      <Spacing height={2} />
      <Button
        onClick={() => history.push("./clicked3")}
        variant="contained"
        classes={{ root: classes.rootButton }}
        startIcon={<ThumbDown />}
      >
        Não gostei
      </Button>
    </div>
  );
}
