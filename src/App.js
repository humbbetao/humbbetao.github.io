import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Trails from "./Trails";
import Started from "./Started";
import TabsBottom from "./TabsBottom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FourthScreen from "./FourthScreen";
import FifthScreen from "./FifthScreen";
import SixthScreen from "./SixthScreen";
import SeventhScreen from "./SeventhScreen";
import Eigth from "./Eigth";
import NineScreen from "./NineScreen";
import Favorties from "./Favorties";
import Resgatados from "./Resgatados";

function TabPanel(props) {
  const { children, value, index, p, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={p}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between"
  },
  rootPaper: {
    flexGrow: 1,
    backgroundColor: "#9b51e0",
    color: "#ffffff",
    border: "0"
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route path="/clicked">
            <SecondScreen />
          </Route>
          <Route path="/clicked2">
            <ThirdScreen />
          </Route>
          <Route path="/clicked3">
            <FourthScreen />
          </Route>
          <Route path="/clicked4">
            <FifthScreen />
          </Route>
          <Route path="/clicked5">
            <SixthScreen />
          </Route>
          <Route path="/clicked6">
            <SeventhScreen />
          </Route>
          <Route path="/clicked7">
            <Eigth />
          </Route>
          <Route path="/clicked8">
            <NineScreen />
          </Route>
          <Route path="/favoritos">
            <Favorties />
          </Route>
          <Route path="/resgatados">
            <Resgatados />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
