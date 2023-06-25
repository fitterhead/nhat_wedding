import React from "react";
import Invitation from "../features/pageCom/Invitation";
import CountDown from "../features/pageCom/CountDown";
import OurLoveStory from "../features/pageCom/OurLoveStory";
import TimeLine from "../features/pageCom/TimeLine";
import DressCode from "../features/pageCom/DressCode";
import WeddingMemory from "../features/pageCom/WeddingMemory";
import { Container } from "@mui/material";
import { Element } from "react-scroll";
import Rsvp from "../features/pageCom/Rsvp";

function HomePage() {
  return (
    <Container 
    maxWidth="xl"
    sx={{padding:"0rem"}}
    >
      <Element name="invitation" className="element">
        <Invitation />
      </Element>
      <Element name="countdown" className="element">
        <CountDown />
      </Element>
      <Element name="ourlovestory" className="element">
        <OurLoveStory />
      </Element>
      <Element name="timeline" className="element">
        <TimeLine />
      </Element>
      <Element name="dresscode" className="element">
        <DressCode />
      </Element>
      <Element name="memory" className="element">
        <WeddingMemory />
      </Element>
      <Element name="rsvp" className="element">
        <Rsvp />
      </Element>
    </Container>
  );
}

export default HomePage;
