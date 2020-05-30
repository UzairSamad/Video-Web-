import React from 'react'
import { Grid, CardHeader } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
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

        <div>
            <iframe width="800" height="400" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography style={{ padding: '5px', fontSize: '25px' }}> {video.snippet.title} </Typography>
            <Grid item style={{ marginBottom: '10px', border: '2px' }}>
                <Card  style={{width:'70%'}}>

                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h3">
                            Description:
                         </Typography>
                        <Typography> {video.snippet.description} </Typography>
                    </CardContent>
                </Card>

            </Grid>
            <Grid style={{ marginBottom: '5px' }}>
                <Typography  variant="h5" component="h4"> Channel: {video.snippet.channelTitle} </Typography>
            </Grid>
            <Grid>
                <Typography  variant="h5" component="h4"> Published on: {pusblishTime} </Typography>
            </Grid>

        </div>



    )
}

export default VideoDetail