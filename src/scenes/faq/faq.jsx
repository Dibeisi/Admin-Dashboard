import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            natus, aliquid deleniti doloremque esse iure, molestias veritatis,
            nulla exercitationem similique eveniet facilis voluptatibus neque
            eligendi sint totam velit quibusdam debitis!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Importan question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            natus, aliquid deleniti doloremque esse iure, molestias veritatis,
            nulla exercitationem similique eveniet facilis voluptatibus neque
            eligendi sint totam velit quibusdam debitis!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            natus, aliquid deleniti doloremque esse iure, molestias veritatis,
            nulla exercitationem similique eveniet facilis voluptatibus neque
            eligendi sint totam velit quibusdam debitis!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            natus, aliquid deleniti doloremque esse iure, molestias veritatis,
            nulla exercitationem similique eveniet facilis voluptatibus neque
            eligendi sint totam velit quibusdam debitis!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            natus, aliquid deleniti doloremque esse iure, molestias veritatis,
            nulla exercitationem similique eveniet facilis voluptatibus neque
            eligendi sint totam velit quibusdam debitis!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
