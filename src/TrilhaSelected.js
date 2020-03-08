import React from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Slider from "./Slider";
import PieChart from "./PieChart";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Divider from "@material-ui/core/Divider";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import TabPanel from './TabPanel'
import NovaTela1 from './NovaTela1'
import NovaTela2 from './NovaTela2'

const StyledToggleButtonGroup = withStyles(theme => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    padding: theme.spacing(0, 1),
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius
    }
  }
}))(ToggleButtonGroup);

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

// export default function Started() {
//   const classes = useStyles();
//   return (
//     <div>
//       <Label> Similares a Engenheira Mecatrônica</Label>
//       <Container>
//         <Slider></Slider>
//       </Container>
//       <PieChart></PieChart>
//     </div>
//   );
// }

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => ["italic"]);
  const [value, setValue] = React.useState(1);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

      const classes = useStyles();

  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            onClick={() => setValue(1)}
            value="left"
            aria-label="left aligned"
          >
            Lições
          </ToggleButton>
          <ToggleButton
            onClick={() => setValue(2)}
            value="center"
            aria-label="centered"
          >
            Progresso
          </ToggleButton>
        </StyledToggleButtonGroup>
        <TabPanel p={3} value={value} index={1}>
          <NovaTela1></NovaTela1>
        </TabPanel>
        <TabPanel p={3} value={value} index={2}>
          <NovaTela2></NovaTela2>
        </TabPanel>
      </Paper>
    </div>
  );
}
