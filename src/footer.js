import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <div class="social-container">
    
        <h3 class="social">Follow Us On</h3>
        <a href="https://www.youtube.com"  className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="5x" />
        </a>
        <a href="https://www.facebook.com"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="5x" />
        </a>
        <a href="https://www.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="5x" />
        </a>
        <a href="https://www.instagram.com"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="5x" />
        </a>
    
    </div>
  );
}
 






















// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//   },
//   footer: {
//     padding: theme.spacing(3, 2),
//     marginTop: 'auto',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
//   },
// }));

// export default function StickyFooter() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
      
//       <footer className={classes.footer}>
//         <Container maxWidth="sm">
//           <Typography variant="body1"> sticky </Typography>
//           <Copyright />
//         </Container>
//       </footer>
//     </div>
//   );
// }