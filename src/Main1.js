import {
  Typography,
  Toolbar,
  AppBar,
  CssBaseline,
  Container,
  CardMedia,
  Card,
  Grid,
  CardContent,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Link from "@material-ui/core/Link";

import useStyles from "./styles";

const Main1=({box1})=>{
  const classes= useStyles();
  const cards=[1,2,3]
  
  return (
    
      <Container className={classes.cardGrid} maxwidth="md">
        <Grid container spacing={4}>
          {/* {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://cdn.pixabay.com/photo/2019/05/05/18/58/girl-4181395__340.jpg"
                  title="Image"
                />
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom varian="h5"> {box1.children}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))} */}
          <Grid item  xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                >
                  <img className={classes.imageX} src={'https://cdn.pixabay.com/photo/2013/07/13/10/11/qr-code-156717__340.png'}/>                  
                </CardMedia>
                  
                <CardContent className={classes.CardContent}>
                <Typography className={classes.CardHead} variant="h3">Scan</Typography>
                  <Typography style={{textAlign:'center'}} gutterBottom variant="h6"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis dolorum numquam. 
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
          <Grid item  xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  
                >
                  <img className={classes.imageX} src={'https://cdn.pixabay.com/photo/2018/08/17/19/52/shopping-3613689__340.png'}/>                  
                </CardMedia>
                <CardContent className={classes.CardContent}>
                <Typography className={classes.CardHead} variant="h3" >Add To Cart</Typography>
                  <Typography style={{textAlign:'center'}} gutterBottom variant="h6"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis dolorum numquam. 
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                >
                    <img className={classes.imageX} src={'https://cdn.pixabay.com/photo/2020/12/10/12/33/laptop-5820171__340.png'}/>                  
                </CardMedia>
                <CardContent className={classes.CardContent}>
                  <Typography className={classes.CardHead} variant="h3">Checkout</Typography>
                  <Typography style={{textAlign:'center'}} gutterBottom variant="h6"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis dolorum numquam. 
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
      </Container>
      
  );
}

export default Main1;
