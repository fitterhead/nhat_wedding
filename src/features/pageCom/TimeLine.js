import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { styled } from "@mui/system";

const timelineData = [
  {
    time: "17:00",
    event: "Photo",
    info: "Welcoming photos",
    image: "photo",
  },
  {
    time: "18:00",
    event: "We do",
    info: "The ceremony",
    image: "wedo",
  },

  {
    time: "18:30",
    event: "Toast",
    info: "Speeches and dinner",
    image: "toast",
  },

  {
    time: "19:30",
    event: "We Party",
    info: "Dance time!",
    image: "party",
  },
  {
    time: "20:30",
    event: "Bouquet Toss",
    info: "To our next",
    info2: "lucky girl",
    image: "toss",
  },
];

const TimelineImage = ({ image }) => (
  <img src={image} alt="Timeline" style={{ width: "100%", height: "auto" }} />
);

const StyledTimelineItem = styled(TimelineItem)(({ theme }) => ({
  "&.MuiTimelineItem-root::before": {
    flex: 0,
    padding: 0,
  },
}));

export default function TimeLine() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        padding: "0rem",
        backgroundColor: "#F1DEC9",
      }}
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
        style={{ minHeight: "100vh", maxWidth: "400px", padding: "0rem" }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ paddingTop: "10vh" }}
        >
          BEST DAY
        </Typography>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "auto", objectFit: "cover" }}
          image={"/header1.png"}
          // alt={item.imageAlt}
        />
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            paddingTop: "10vh",
            // paddingBottom: "5vh"
          }}
        >
          WEDDING DAY <br />
          TIMELINE
        </Typography>

        <Container maxWidth="sm">
          <Timeline sx={{ paddingBottom: "10vh" }} position="alternate">
            {timelineData.map((item, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: "#DFBB9D" }} />
                  <TimelineConnector sx={{ backgroundColor: "#DFBB9D" }} />
                </TimelineSeparator>

                <TimelineContent>
                  <Grid
                    container
                    // alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={12} md={12}>
                      <Box
                        sx={{
                          // padding:"0rem 0rem 0rem 16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: 60, height: "auto", objectFit: "cover" }}
                          image={`/${item.image}.png`}
                          // alt={item.imageAlt}
                        />
                      </Box>
                      <Typography variant="script3" align="center">
                        {item.event}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Typography variant="h3">{item.time}</Typography>
                      <Typography variant="body1">{item.info}</Typography>
                      {index === 4 && (
                        <Typography variant="body1">{item.info2}</Typography>
                      )}
                    </Grid>
                  </Grid>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Grid>
    </Grid>
  );
}
