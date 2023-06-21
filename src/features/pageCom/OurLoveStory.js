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
  { time: "09:30 am", label: "Childhood" },
  { time: "10:00 am", label: "First met" },
  { time: "12:00 am", label: "First date" },
  { time: "9:00 am", label: "Moving in" },
  { time: "9:00 am", label: "Proposal" },
  { time: "9:00 am", label: "Wedding" },
];

export default function OurLoveStory() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} align="center">
        <Typography variant="h1" component="h2">
          OUR LOVE STORY
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
