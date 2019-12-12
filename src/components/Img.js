import React from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Image = styled.img`
    width: 95%;
    box-shadow: 0px 0px 8px 1px #111111;
`;

const ImgDiv = styled.div`
    // border: 1px solid yellow;
    
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const useStyles = makeStyles(theme => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));
  
//   const Img = (props) => {
    // const classes = useStyles();
    // const [checked, setChecked] = React.useState(false);
  
    // const handleChange = () => {
    //   setChecked(prev => !prev);

    // return(<ImgDiv>
    //     <FormControlLabel
    //     control={<Switch  checked={checked} onChange={handleChange}/>}
    //     label="Show"
    //     />
    //     <div className={classes.container}>
    //     <Fade in={checked}>
    //         <Paper elevation={4} className={classes.paper}>
    //         <svg className={classes.svg}>
    //             <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
    //         </svg>
    //         </Paper>
    //     </Fade>
    //     </div>
    //     </ImgDiv>);







// }

const Img = (props) => {
    const {imgState} = props;
    return (
        <ImgDiv>
            <Image src={imgState}></Image>
        </ImgDiv>


        
    );




    };


export default Img;