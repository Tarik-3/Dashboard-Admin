import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../page/pieChart/pie";
import React from "react";
import Bar from "../../page/barChart/bar";
import Geo from "../../page/geography/geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "28%",  }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Avancement de Travail
        </Typography>

        <Pie isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
            21% des dossiers terminés
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          
        </Typography>
      </Paper>

      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "33%",  }}>
      <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Evolution de La Clientèle
        </Typography>


<Bar isDashbord={true} />


      </Paper>

      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "33%",  }}>
        

      </Paper>
    </Stack>
  );
};

export default Row3;
