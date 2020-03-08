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
    backgroundColor: "#9b51e0",
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
      <Label fontSize="28px" color="white">
        Quiz:
      </Label>
      <Label fontSize="16px" color="white">
        Nível 1
      </Label>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.formLabel}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Option 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Option 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Option 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Option 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.formLabel}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Option 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Option 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Option 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Option 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.formLabel}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Option 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Option 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Option 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Option 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </RadioGroup>
      </FormControl>

      <Button
        onClick={() => history.push("./clicked3")}
        variant="contained"
        classes={{ root: classes.rootButton }}
      >
        Click
      </Button>
    </div>
  );
}
