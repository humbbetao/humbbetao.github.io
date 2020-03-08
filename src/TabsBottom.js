import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    bottom: 0
  }
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
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="icon label tabs example"
    >
      <Tab
        onClick={() => history.push("./")}
        icon={<PhoneIcon />}
        label="Trilhas"
      />
      <Tab
        onClick={() => history.push("./favoritos")}
        icon={<FavoriteIcon />}
        label="Favoritos"
      />
      <Tab
        onClick={() => history.push("./resgatados")}
        icon={<PersonPinIcon />}
        label="Resgates"
      />
    </Tabs>
    // </Paper>
  );
}
