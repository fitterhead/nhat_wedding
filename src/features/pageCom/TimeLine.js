import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const timelineData = [
  { time: "17:00 pm", label: "Welcome photos" },
  { time: "18:00 pm", label: "Ceremony" },
  { time: "18:30 pm", label: "Dinner" },
  { time: "19:30 pm", label: "Dancing, Karaoke" },
];

export default function TimeLine() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} align="center">
        <Typography variant="h1" component="h2">
          WEDDING TIMELINE
        </Typography>
      </Grid>
      {/* <Grid item> */}
      <Timeline position="alternate">
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              {item.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index !== timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h1">{item.label}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {/* </Grid> */}
    </Grid>
  );
}
