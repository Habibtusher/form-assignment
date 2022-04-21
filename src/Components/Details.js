import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useState } from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 25,
  },
  field: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "block",
  },
});

const initialSelf = {
  fullName: "",
  currentCity: "",
  fullTimeRemote: "",
  currentJobTitle: "",
  currentCompany: "",
  currentCTC: "",
  expectedCTC: "",
  noticePeriod: "",
  summaryOfSkills: "",
  experience: "",
  cv: null,
};

const Details = ({ setData }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [self, setSelf] = useState(initialSelf);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [nameError, setNameError] = useState(false);
  const [isExpectedCTC, setIsExpectedCTC] = useState(false);
  const [isSummaryOfSkills, setIsSummaryOfSkills] = useState(false);
  const [isCurrentCity, setISCurrentCity] = useState(false);
  const [isCv, setIsCv] = useState(false);
  const [isExperience,setIsExperience] =useState(false);
const [cvHelperText,setCvHelperText] =useState('')


  const handleRadioChange = (e) => {
    setSelf({ ...self, currentCity: e.target.value });
    setHelperText(" ");
    setError(false);
  };

  const handleUpload = (e) => {
    setSelf({ ...self, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setISCurrentCity(false)
    setError(false);
    setIsExpectedCTC(false);
    setIsSummaryOfSkills(false)
    setIsExperience(false)
    setIsCv(false);


    if (!self.fullName) {
      setNameError(true);
    } else if (!self.currentCity) {
    setISCurrentCity(true)
    } else if (!self.fullTimeRemote) {
      setHelperText("Please select an option.");
      setError(true);
    } else if (!self.expectedCTC) {
      setIsExpectedCTC(true);
    } else if (!self.summaryOfSkills) {
      setIsSummaryOfSkills(true)
    } else if (!self.experience) {
     setIsExperience(true);
    } 
    else if (!self.cv) {
      setCvHelperText("please upload your cv")
      setIsCv(true);
     }else {
      setData(self);
      navigate(`/preview`);
    }
  };
  return (
    <Container
      maxWidth="sm"
      style={{ backgroundColor: "#cfe8fc", height: "1100px" }}
    >
      <Typography variant="h5" color="textSecondary" gutterBottom>
        TechsBiz Remote Job Candidate Detail
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          value={self.fullName}
          onChange={(e) => setSelf({ ...self, fullName: e.target.value })}
          className={classes.field}
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          fullWidth
          required
          error={nameError}
        />
        <TextField
          value={self.currentCity}
          onChange={handleRadioChange}
          className={classes.field}
          id="outlined-basic"
          label="Current City"
          variant="outlined"
          fullWidth
          required
          error={isCurrentCity}
        />
        <FormControl className={classes.field}>
          <FormLabel>
            Are you comfortable in working full time remote *
          </FormLabel>
          <RadioGroup
            value={self.fullTimeRemote}
            onChange={(e) =>
              setSelf({ ...self, fullTimeRemote: e.target.value })
            }
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
          </RadioGroup>
          <FormHelperText error>{helperText}</FormHelperText>
        </FormControl>
        <TextField
          value={self.currentJobTitle}
          onChange={(e) =>
            setSelf({ ...self, currentJobTitle: e.target.value })
          }
          className={classes.field}
          id="outlined-basic"
          label="Current Job Title"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={self.currentCompany}
          onChange={(e) => setSelf({ ...self, currentCompany: e.target.value })}
          className={classes.field}
          id="outlined-basic"
          label="Current Company"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={self.currentCTC}
          onChange={(e) => setSelf({ ...self, currentCTC: e.target.value })}
          className={classes.field}
          id="outlined-basic"
          label="Your Current CTC (INR)"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={self.expectedCTC}
          onChange={(e) => setSelf({ ...self, expectedCTC: e.target.value })}
          className={classes.field}
          id="outlined-basic"
          label="Your expected CTC (INR) "
          variant="outlined"
          fullWidth
          required
          error={isExpectedCTC}
        />
        <TextField
          value={self.noticePeriod}
          onChange={(e) => setSelf({ ...self, noticePeriod: e.target.value })}
          className={classes.field}
          id="outlined-basic"
          label="Notice Period"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={self.summaryOfSkills}
          onChange={(e) =>
            setSelf({ ...self, summaryOfSkills: e.target.value })
          }
          className={classes.field}
          id="outlined-basic"
          label="Summary of skills"
          variant="outlined"
          fullWidth
          required
          error={isSummaryOfSkills}
        />
        <TextField
          value={self.experience}
          onChange={(e) => setSelf({ ...self, experience: e.target.value })}
          className={classes.field}
          id="outlined-basic"
          label="Total Years of experience in relevant field"
          variant="outlined"
          fullWidth
          required
          error={isExperience}
        />
        <Typography variant="p" color="textSecondary" gutterBottom>
          Upload Updated CV
        </Typography>
        <FormHelperText error >{cvHelperText}</FormHelperText>
        <br />
        <Button
          variant="outlined"
          color="primary"
          component="label"
          startIcon={<CloudUploadIcon />}
        >
          Add File
          <input onChange={handleUpload} type="file" hidden />
        </Button>
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button onClick={() => setSelf(initialSelf)}>Clear</Button>
      </form>
    </Container>
  );
};

export default Details;
