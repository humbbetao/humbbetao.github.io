import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { useHistory } from "react-router-dom";

import {ReactComponent as Icon1} from "./Heart.svg";
import {ReactComponent as Icon2} from "./Heart.svg";
import {ReactComponent as Icon3} from "./ShoppingCart.svg";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    bottom: 0,
    position:'fixed',
    backgroundColor: 'white'
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let history = useHistory();

  return (
    // <Paper square className={classes.root}>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="#9b51e0"
      textColor="#9b51e0"
      variant="fullWidth"
      backgroundColor="#9b51e0"
      aria-label="icon label tabs example"
      classes={{ root: classes.root }}
    >
      <Tab
      classes={{root: classes.rootMovile}}
        onClick={() => history.push("./")}
        icon={<Icon1 />}
        label="Trilhas"
        indicatorColor="#9b51e0"
        textColor="white"
        variant="fullWidth"
        backgroundColor="#9b51e0"
      />
      <Tab
       classes={{root: classes.rootMovile}}
        onClick={() => history.push("./favoritos")}
        icon={<Icon2 />}
        label="Favoritos"
        indicatorColor=""
        textColor="white"
        variant="fullWidth"
        backgroundColor="#9b51e0"
      />
      <Tab
       classes={{root: classes.rootMovile}}
        onClick={() => history.push("./resgatados")}
        icon={<Icon3 />}
        label="Resgates"
        indicatorColor=""
        textColor="white"
        variant="fullWidth"
        backgroundColor="#9b51e0"
      />
    </Tabs>
    // </Paper>
  );
}
