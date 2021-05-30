import {makeStyles} from '@material-ui/core/styles';
import { Block } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    nav:{
        position:'sticky'
    },
    navbar:{
        margin:10,
        color:'white',
    },

    
    cart:{
        position:"absolute",
        right:20,
        top:12.4,
    },
    sliderComp:{
        marginLeft:'10vw',    
        marginTop:'2vh',

    },
    cardGrid:{
        padding: '20px 0' 
    },
    card:{
        height:'100%',
        width:'100%',
        diplay:'flex',
        flexDirection:'columnn',
        backgroundColor:'#fff7f7',
        border:'2px solid red',
        borderRadius:'5%',
    },
    cardContent:{
        flexGrow:1,
    },
    CardHead:{
        color:'red',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:'2rem',
    },
    imageX:{
        width:'15vw',
        height:'12vw',
        paddingTop:'10px',
        display:'block',
        margin:'auto',
        borderRadius:'15%'
    },
    Grid:{
        marginTop:100,
        
    },
    foot:{
        
        backgroundColor:"#D3D3D3	",
    },
    footContent:{
        marginLeft:50,
        
    },
    mail:{
        marginLeft:50,  
    },
    mid1:{
        backgroundColor:'red'
    }
    
}));

export default useStyles;