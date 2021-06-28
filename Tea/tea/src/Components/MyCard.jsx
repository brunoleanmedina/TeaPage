import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '30%',
    minWidth: '30%',
    margin: '1.6%'
  },
  media: {
    height: 140,
    backgroundColor: "purple"  
  },
  limiter: {
    width: '80%',
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  }

});

function MyCard({title, description}) {
    const classes = useStyles();
    
    return (
      <Fragment>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            </CardActionArea>
  
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography className= {classes.limiter} variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
              
          <CardActions>
            <Button size="small">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Fragment>
    );
  }
  
  export default MyCard;