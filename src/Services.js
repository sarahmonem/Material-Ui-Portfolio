import React from "react";
import { Grid, Typography, Collapse, Divider } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";
import GetWindowpostion from "./GetWindowpostion";

const useStyle = makeStyles(theme => {
  return {
    cardmedia: {
      height: 250
    },
    root: {
      minHeight: "50vh",
      marginTop: 50
    },
    icon: {
      background: "#000000c4",
      padding: theme.spacing(3),
      margin: "0 auto",
      borderRadius: "50px",
      fontSize: "35px",
      color: "#d18a31",

      "&:hover": {
        transition: "all .5s"
      }
    },
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
     
    },
    text: {
      color: "white",
      padding: theme.spacing(2),
      textAlign: "center"
    },
    divider: {
        
        width: "500px",
        background: "#d18a31",
        margin: "50px auto"
    }
  };
});

function Services() {
  const classes = useStyle();

  const checked = GetWindowpostion("services");
  return (
    <div className={classes.root} id="services">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={40}
      >
        <Grid container>
          <Grid item md={4} className={classes.container}>
            <AcUnitIcon classes={{ root: classes.icon }} />
            <Typography variant="h5" className={classes.text}>
              Lorem ipsum dolor sit
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
            </Typography>
          </Grid>

          <Grid item md={4} className={classes.container}>
            <AcUnitIcon classes={{ root: classes.icon }} />
            <Typography variant="h5" className={classes.text}>
              Lorem ipsum dolor sit
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
            </Typography>
          </Grid>
          <Grid item md={4} className={classes.container}>
            <AcUnitIcon classes={{ root: classes.icon }} />
            <Typography variant="h5" className={classes.text}>
              Lorem ipsum dolor sit
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
            </Typography>
          </Grid>
        </Grid>
        <Divider  classes={{ root: classes.divider }} />
      </Collapse>
    </div>
  );
}

export default Services;
