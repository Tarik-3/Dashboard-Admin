import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
<Box>
  
      <Header title="FAQ" subTitle="Page de questions fréquemment posées" />
  
      <Stack direction={"column"} gap={2}>
  
      
      
      
      
      
        <Accordion defaultExpanded onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Réglages généraux
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ici les reglages generales
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Utilisateurs</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Vous n'êtes actuellement pas propriétaire
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Quelque chose
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Réglages avancés
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            Le filtrage a été entièrement désactivé pour l'ensemble du serveur Web
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Bla bla bla
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Données personnelles
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Bababaababababa
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Utilisateurs</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Vous n'êtes actuellement pas propriétaire
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Quelque chose
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Réglages avancés
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            Le filtrage a été entièrement désactivé pour l'ensemble du serveur Web
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Bla bla bla
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
</Box>
  );
};

export default FAQ;
