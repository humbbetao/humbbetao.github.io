import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Label from "./Label";
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
  // background-color: #ccc;
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
    // backgroundColor: "#ccc",
    // margin: theme.spacing(1),
    width: "calc(100% -  16px)",
    height: theme.spacing(16),
    display: "flex",
    alignItems: "flex-end",
    padding: "8px",
    margin: "16px",
    left: "16px",
    right: "16px",
    boxSizing: "border-box",
    position: "absolute",
    // width:'100%',
    height: "200px"
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
        <img
          src={require("./Rectangle 2.png")}
          style={{ position: "relative", width: "280px", height: "170px" }}
        ></img>
        <div
          style={{
            color: "#fff",
            zIndex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            position: "relative",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Engenharia da eletrônica
        </div>
      </PlanoMobile>{" "}
      <PlanoMobile classes={{ root: classes.rootPaper }} elevation={3}>
        <img
          src={require("./Rectangle 2.png")}
          style={{ position: "absolute", width: "280px", height: "170px" }}
        ></img>
        <div
          style={{
            color: "#fff",
            zIndex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            position: "relative",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Engenharia da Mecânica
        </div>
      </PlanoMobile>
      <PlanoMobile classes={{ root: classes.rootPaper }} elevation={3}>
        <img
          src={require("./Rectangle 2.png")}
          style={{ position: "absolute", width: "280px", height: "170px" }}
        ></img>
        <div
          style={{
            color: "#fff",
            zIndex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            position: "relative",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Engenharia da Mecânica
        </div>
      </PlanoMobile>
    </Slider>
  );
}
