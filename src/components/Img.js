import React from 'react'

// const Img = (props) => {
//     const {imgState} = props;
//     return (
//         <div>
//             <img src={imgState}></img>
//         </div>
//     )
// }



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const useStyles = makeStyles({
  card: {
    maxWidth: 900,
  },
});

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Img = (props) => {
    const {descState, titleState, imgState} = props;
  const classes = useStyles();
  console.log(titleState);

  return (
    <Container>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="NASA Photo of the day"
        //   height="140"
          image="https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"
          title={titleState}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titleState}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descState}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Container>
  );
}

export default Img;