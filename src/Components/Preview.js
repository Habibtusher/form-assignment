import { Container, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  text: {
  
    paddingLeft: 0,
    color: "black",
    fontSize: "15px",
  },
  paper: {
    marginTop: "15px",
    padding: "20px",
  },
  title: {
    padding: "15px",
  },
  sub: {
      paddingBottom:'4px',
    fontWeight: 500,
    fontSize: "18px",
   
  },
});

const Preview = ({data}) => {
    console.log(data);
  const classes = useStyles();
  return (
    <Container
      maxWidth="sm"
      style={{ backgroundColor: "#cfe8fc", height: "1600px" }}
    >
      <Paper className={classes.paper} variant="outlined">
        <Typography
          className={classes.title}
          variant="h5"
          color="textSecondary"
          gutterBottom
        >
          TechsBiz Remote Job Candidate Details
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub} color="textSecondary">
          Full Name *
        </Typography>
        <br></br>
        <Typography className={classes.text} color="primary">
         {data.fullName}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
          Current City *
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
         {data.currentCity}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
        Are you comfortable in working full time remote *
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
         {data.fullTimeRemote}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
        Current job title
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
          {data.currentJobTitle}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
        Current Company
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
       {data.currentCompany}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
        Your Current CTC (INR)
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
         {data.currentCTC}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
        Your expected CTC (INR) *
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
         {data.expectedCTC}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
        Notice Period
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
         {data.noticePeriod}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
        Summary of skills *
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
          {data.summaryOfSkills}
        </Typography>
      </Paper>

      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
        Total Years of experience in relevant field *
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
        {data.experience}
        </Typography>
      </Paper>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.sub}  color="textSecondary">
       CV *
        </Typography>
        <br></br>
        <Typography className={classes.text}  color="primary">
         {data.cv.name}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Preview;
