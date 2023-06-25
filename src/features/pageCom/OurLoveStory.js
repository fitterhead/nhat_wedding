import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import ImageCom from "./ImageCom";

const timelineData = [
  {
    time: "04.2018",
    event: "Our First Met",
    where: "Okinawa, Japan",
    info: "We sat next to each other on a plan from Osaka to Okinawa",
    image: "1",
  },
  {
    time: "08.2018",
    event: "Our First Trip",
    where: "Dalat, Vietnam",
    info: "Our very first trip in Vietnam and many more to go",
    image: "2",
  },
  {
    time: "05.2019",
    event: "Moving in together",
    where: "Saigon, Vietnam",
    info: "We decided no more long distance relationship",
    image: "3",
  },
  {
    time: "02.2020",
    event: "The Proposal",
    where: "Bali, Indonesia",
    info: "He popped the question and she said:” YES”",
    image: "4",
  },
  {
    time: "03.2020",
    event: "We got engaged",
    where: "Saigon, Vietnam",
    info: "Got our marriage certificate right before Covid",
    image: "5",
  },
  {
    time: "2020-2021",
    event: "The Covid-19",
    where: "Planet Earth",
    info: "We planned our wedding ever since but then Covid happened ",
    image: "6",
  },
  {
    time: "23.09.2023",
    event: "Save the date",
    where: "Saigon, Vietnam",
    info: "Finally the best day is here! We tie the knot ❤",
    image: "7",
  },
];

const TimelineImage = ({ image }) => (
  <img src={image} alt="Timeline" style={{ width: "100%", height: "auto" }} />
);

export default function OurLoveStory() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", padding: "0rem" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        align="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography
          variant="script2"
          component="h2"
          align="center"
          sx={{ paddingTop: "10vh" }}
        >
          Our Love Story
        </Typography>

        <Timeline position="alternate">
          {timelineData.map((item, index) => (
            <TimelineItem sx={{ paddingBottom: "1rem" }} key={index}>
              <TimelineOppositeContent>
                <Typography gutterBottom variant="h2">
                  {item.time}
                </Typography>
                <Typography variant="h3">{item.event}</Typography>
                <Typography
                  gutterBottom
                  paddingBottom={"0.5rem"}
                  variant="body2"
                >
                  {item.where}
                </Typography>
                <Typography variant="body1">{item.info}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {index !== timelineData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <TimelineImage image={`/${item.image}.jpg`} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Typography variant="h1" align="center" sx={{ paddingBottom: "3vh" }}>
          PRE-WEDDING
          <br />
          MOMENTS
        </Typography>
        <Card>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/u1hVAhIVa-4"
            title="YouTube video player"
            frameborder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Card>
      </Grid>
    </Grid>
  );
}
