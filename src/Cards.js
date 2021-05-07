import React from "react";
import { makeStyles, Typography, Container, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Carditems from "./Carditems";
import GetWindowpostion from "./GetWindowpostion";

const useStyle = makeStyles(theme => {
  return {
    cardmedia: {
      height: 250
    },
    root: {
      minHeight: "100vh",
      marginTop: 50
    }
  };
});
function Cards() {
  const classes = useStyle();
  const checked = GetWindowpostion("header");
  return (
    <div className={classes.root} id="section-one">
      <Carditems checked={checked} />
    </div>
  );
}

export default Cards;
