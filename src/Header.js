import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { blue } from "@material-ui/core/colors";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Collapse from '@material-ui/core/Collapse';
import {useState , useEffect} from 'react'
import { Link as Scroll } from 'react-scroll'

import {
  Container,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Grid,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh"
    },
    slider: {
      background: "gray",
      width: "100%",
      height: "500px"
    },
    title: {
      flexGrow: 1
    },
    appbar: {
      background: "#0202023d"
    },
    list: {
      display: "flex",
      justifyContent: "center",
      padding :"5px"
    },
    toolbar: {
      width: "80%",
      margin: "0 auto"
    },
    text: {
      fontWeight: 600,
      color: "white",
      marginBottom:"50px"
    },
    maintext:{
      textAlign: "center",
      
    },
    godown:{
      color:"#d28800" ,
      fontSize: "4rem",
      background: "#0000008c",
      borderRadius: "50%",
     
      
    },
    listbottom:{
      background: "#d28800",
      borderRadius: "10px",
      margin : "10px",
      "&:hover" :{
        background: "#b17302"
      }
    },
    divider:{
      color: "#d28800",
      border: "solid 1px",
      height: "45px"
    }
  };
});

function Header() {
  const classes = useStyles();
  const [checked , setchecked] = useState(false)

  useEffect(() => {
   setchecked(true)
  }, [])
  return (
    <div className={classes.root} id="header">
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title}>
            sara.
          </Typography>

          <List className={classes.list}>
          <Divider classes={{ root : classes.divider}} />
            <ListItem button >
              <ListItemText primary="About" />
            </ListItem>
            <Divider classes={{ root : classes.divider}}/>
            <ListItem button >
              <ListItemText primary="Services" />
            </ListItem>
            <Divider classes={{ root : classes.divider}}/>
            <ListItem button >
              <ListItemText primary="FAQs" />
            </ListItem>
            <Divider classes={{ root : classes.divider}}/>
            <ListItem button >
              <ListItemText primary="Contact" />
            </ListItem>
            <Divider classes={{ root : classes.divider}}/>
          </List>
        </Toolbar>
      </AppBar>
      
      <div className={classes.maintext}>
      <Collapse in={checked}
      {...(checked? {timeout:1000} : {})}
      collapsedHeight={40}>
        <Typography variant="h1" align="center" className={classes.text}>
          Welocme <br />
          To My World
        </Typography>
        </Collapse>
       <Scroll to="section-one" smooth={true}>
        <IconButton>
        <KeyboardArrowDownIcon  className={classes.godown} />
        </IconButton>
        </Scroll>
      </div>
     
    </div>
  );
}

export default Header;
