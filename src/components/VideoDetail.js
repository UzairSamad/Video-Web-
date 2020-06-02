import React from 'react'
import { Grid, CardHeader } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const VideoDetail = ({ video, errorMessasge }) => {
    const classes = useStyles();
    console.log(errorMessasge, 'details')
    if (!video) {
        return (
            <div className={classes.root}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {errorMessasge} <strong>check it out!</strong>
                </Alert>
            </div>
        )
    }
    const pusblishTime = video.snippet.publishTime.substr(0, 10)

    return (
        <div className={classes.root}>

            <Grid container  >
               <Grid item sm={12} md={12}>
               <iframe width='100%'height='250%' src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <Typography style={{ padding: '5px', fontSize: '25px' }}> {video.snippet.title} </Typography>
               </Grid>
                    
      
                <Grid item md={12} style={{ marginBottom: '10px', border: '2px' }}>
                    <Card style={{ width: '100%' ,height:'150%' }}>

                        <CardContent >
                            <Typography gutterBottom variant="h4" component="h4">
                                Description:
                   </Typography>
                            <Typography> {video.snippet.description} </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid style={{ marginBottom: '5px' }}>
                    <Typography variant="h5" component="h4"> Channel: {video.snippet.channelTitle} </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5" component="h4"> Published on: {pusblishTime} </Typography>
                </Grid>
            </Grid>
        </div>




    )
}

export default VideoDetail