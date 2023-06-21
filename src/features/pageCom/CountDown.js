import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
function CountDown() {
  const getRemainingTime = () => {
    const currentTime = new Date().getTime();
    const distance = targetDate - currentTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const targetDate = new Date("September 23, 2023 00:00:00").getTime();

  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    const countdown = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item container justifyContent="center" alignItems="center">
        <Grid item xs={12} align="center">
          <Typography
            variant="h1"
            component="h2"
            gutterBottom
            sx={{ paddingBottom: "10vh" }}
          >
            WEDDING COUNTDOWN
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          align="center"
        >
          <Typography
            variant="display2"
            component="h2"
            gutterBottom
            sx={{ paddingBottom: "5vh" }}
          >
            {remainingTime.days} days,{remainingTime.hours} hours,<br />
            {remainingTime.minutes} minutes,<br />
            {remainingTime.seconds} seconds
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="body1" component="h2" gutterBottom>
          <Typography variant="letter2">U</Typography>ntil we officially become husband and wife
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CountDown;
