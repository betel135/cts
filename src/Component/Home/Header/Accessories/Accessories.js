import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    
    <div>
      <div>
    <div class="row">

<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://nordace.com/wp-content/uploads/2019/07/Nordace_Siena_Red_31.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
      120$
          </Typography>
        
        <Button size="small" color="primary">
         <del style={{color:"red"}}>150$</del>
        </Button>
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.lululemon.com/is/image/lululemon/LU9AFAS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HOKA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h6" component="h2">
          200$
          </Typography>
   <del style={{color:"red"}}>150$</del>
       
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://nordace.com/wp-content/uploads/2019/07/Nordace_Siena_Green_24-828x828.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
          130$
          </Typography>
   <del style={{color:"red"}}>180$</del>
      </CardActions>
    </Card></div>
</div> 
</div>
<div class="row">

<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.lululemon.com/is/image/lululemon/LW9DSCS_022159_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
      120$
          </Typography>
        
        <Button size="small" color="primary">
         <del style={{color:"red"}}>150$</del>
        </Button>
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.lululemon.com/is/image/lululemon/LW9DNMS_048176_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HOKA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h6" component="h2">
          200$
          </Typography>
   <del style={{color:"red"}}>150$</del>
       
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.lululemon.com/is/image/lululemon/LW9DHWS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
          130$
          </Typography>
   <del style={{color:"red"}}>180$</del>
      </CardActions>
    </Card></div>
</div>
<div class="row">

<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://eddiebauer.scene7.com/is/image/EddieBauer/D0230168_487C1?$328V1$"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
      120$
          </Typography>
        
        <Button size="small" color="primary">
         <del style={{color:"red"}}>150$</del>
        </Button>
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://imgcdn.carhartt.com/is/image/Carhartt/520302BBLK?$pdp-primary-image-static$"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HOKA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h6" component="h2">
          200$
          </Typography>
   <del style={{color:"red"}}>150$</del>
       
      </CardActions>
    </Card></div>
<div class="col s4"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://eddiebauer.scene7.com/is/image/EddieBauer/D0230073_231C1?$328V1$"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          NIKE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
          130$
          </Typography>
   <del style={{color:"red"}}>180$</del>
      </CardActions>
    </Card></div>
</div> 
</div>


    
  );
}




















































































































/*import react from 'react'
class Access extends react.Component{
    render(){
        return(
        <div>
        
        </div>
        )
    }
}
export default Access*/