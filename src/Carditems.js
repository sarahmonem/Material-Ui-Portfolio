import React from "react";
import { makeStyles, Typography, Container, Grid, Paper, Collapse } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


const useStyle = makeStyles(theme => {
  return {
    cardmedia: {
      height: 250
    },

    card:{
      background: "#ffffff33",
      boxShadow: "inset 0 0 20px #ffffff85",
        color: "#d6d6d6"
    },
    cardaction:{
      display: "flex",
      justifyContent : "center"

    },
    cardbutton:{
      background:"#d28800",
      marginBottom: "16px",
      "&:hover" : {
        background:"#b17302",
      }
    }
   
  };
});
function Carditems({checked}) {
  const classes = useStyle();

  const cards = [{
      media : "/images/card1.jpeg" , 
      title : "text1" ,
      body : " Lizards are a widespread group of squamate reptiles, with over ranging across all continents except Antarctica"
  } ,
  {
    media : "/images/card2.jpeg" , 
    title : "text2" ,
    body : " Lizards are a widespread group of squamate reptiles, with over ranging across all continents except Antarctica"
}]
  return (
    <div className={classes.root}>
      <Container>
      <Grid container spacing={5} className={classes.cardcontainer}>
      
      
     
      {cards.map(card =>(
          
        <Grid item md={6} xs={12} 
        backgroundColor={false}
        classes = {{paper : classes.root}}
       >
       <Collapse in={checked}
          {...(checked? {timeout:1500} : {})}
         >
          <Card className={classes.card}>
            
              <CardMedia
                className={classes.cardmedia}
                image={card.media}
              />
              <CardContent className={classes.cardpaper}>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                 {card.title}
                </Typography>
                <Typography variant="body2" component="p" align="center">
                  {card.body}
                </Typography>
              </CardContent>
              <CardActions className={classes.cardaction}>
        <Button size="medium"  className={classes.cardbutton}>
          Learn More
        </Button>
       
      </CardActions>
          </Card>
          </Collapse>
        </Grid>
        

      ))}
    
    
      </Grid>
      </Container>
    </div>
  );
}

export default Carditems;
