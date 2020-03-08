import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TabsBottom from "./TabsBottom";
import SeuSaldo from "./SeuSaldo";
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
    justifyContent: "space-between"
  },
  rootPaper: {
    flexGrow: 1,
    background: "linear-gradient(110.73deg, #871AB0 2.42%, #E435F3 85.64%);",
    color: "#ffffff",
    border: "0"
  }
}));

export default function Home(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="#9b51e0">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor=""
          textColor="white"
          variant="fullWidth"
          backgroundColor="#9b51e0"
          aria-label="full width tabs example"
          classes={{ root: classes.rootPaper }}
        >
          <Tab label="Resgatados" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel p={3} value={value} index={0}>
        <SeuSaldo></SeuSaldo>
      </TabPanel>
      <TabsBottom />
    </div>
  );
}
