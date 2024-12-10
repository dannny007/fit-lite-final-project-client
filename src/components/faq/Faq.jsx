import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <div className="bg-customNavbar py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-center text-5xl font-bold mb-8 ">FAQ</h2>

        <Accordion
          sx={{
            backgroundColor: "#7E6284", // customLightPurple
            color: "white",
            marginTop: "1rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h2>Why FitLite?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#7E6284", // customLightPurple
            color: "white",
            marginTop: "1rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h2>How do i become a member?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#7E6284", // customLightPurple
            color: "white",
            marginTop: "1rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h2>What are the benefits of being a member?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
