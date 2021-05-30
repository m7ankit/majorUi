import './App.css';
import {Typography,Toolbar, AppBar,CssBaseline, Container, CardMedia,Card,Grid,CardContent} from '@material-ui/core';
import {ShoppingCart,ContactPhone,ContactMailRounded,HomeOutlined} from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import useStyles from './styles';
import Main1 from './Main1';
import Footer from './footer';

import Slider from './Slider';
import NewNav from './newNav';
const App=()=>{
  const classes= useStyles();
  const hm = ()=>{      
    alert('hello');
  };
  
  const cards=[1,2,3]
  return (
    <>
      <CssBaseline/>
      <AppBar color="transparent"  className='nav' position="relative">
        <Toolbar>
          <Typography variant='h5' className={classes.navbar}
            
          >
            <Link href="#" className={classes.navbar}
              style={{textDecoration:'none'}}
            >
              Home
            </Link>
          </Typography>
          <Typography variant='h5' className={classes.navbar}>
          <Link href="#" className={classes.navbar}
              style={{textDecoration:'none'}}
          >
            Scanner
          </Link>

          </Typography>
          <Link href="#" className={classes.navbar}>
            <ShoppingCart className = {classes.cart}/>

          </Link>
          
        </Toolbar>

      </AppBar> 
      <div   className={classes.sliderComp}>
        <Slider/>
      </div>
      <main >
        <Main1/>
        
      </main>
      <hr/>
      <Footer/>
    </>  
  );



}

export default App;
