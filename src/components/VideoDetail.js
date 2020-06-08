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
                <Alert severity="info" style={{ fontSize: "20px" }}>
                    <AlertTitle style={{ fontSize: "25px" }}>Page Under Devlopment</AlertTitle>
                    {`There may be some server error please Try Again Later ${errorMessasge}`}
                </Alert>
            </div>
        )
    }
    const pusblishTime = video.snippet.publishTime.substr(0, 10)

    return (
        <Grid style={{ height: '100%' }}>
            <iframe width='100%' height='100%' src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div style={{ padding: '5px', fontSize: '25px' }}>
                <Typography style={{ fontSize: '25px' }}> {video.snippet.title} </Typography>
                <Card style={{ marginBottom: "30px" }} >
                    <CardContent >
                        <Typography gutterBottom variant="h4" component="h4">
                            Description:
                   </Typography>
                        <Typography> {video.snippet.description} </Typography>
                        <Typography variant="h5" component="h4"> Channel: {video.snippet.channelTitle} </Typography>
                        <Typography variant="h5" component="h4"> Published on: {pusblishTime} </Typography>

                    </CardContent>
                </Card>
            </div>
        </Grid>





    )
}

export default VideoDetail