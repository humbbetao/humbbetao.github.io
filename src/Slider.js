import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
const Plano = styled.div`
  border-radius: 4px;
  //   box-shadow: 0 0 8px 0 19;
  background-color: #fff;
  padding: 40px;
  width: auto;
  height: 480px;
`;
const PlanoMobile = styled(Plano)`
  height: 200px;
  padding: 16px;
  width: 200px;
  margin: 16px;

  box-sizing: border-box;
  background-color: #ccc;
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
    width: "calc(100% -  16px)",
    height: theme.spacing(16),
    display: "flex",
    alignItems: "flex-end",
    padding: "8px",
    margin: "16px",
    left: "16px",
    right: "16px",
    boxSizing: "border-box"
  },
  rootButton: {
    backgroundColor: "#9b51e0",
    color: "#fff",
    width: "100%"
  }
}));

export default function SimpleSlider() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1
  };

  return (
    <Slider {...settings}>
      <PlanoMobile classes={{ root: classes.rootPaper }} elevation={3}>
        teste1
      </PlanoMobile>
      <PlanoMobile classes={{ root: classes.rootPaper }} elevation={3}>
        teste2
      </PlanoMobile>
      <PlanoMobile classes={{ root: classes.rootPaper }} elevation={3}>
        teste3
      </PlanoMobile>
    </Slider>
  );
}
