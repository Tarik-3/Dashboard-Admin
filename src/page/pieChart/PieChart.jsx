import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import Pie from "./pie";
import Header from "../../components/Header";

const PieChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="DIAGRAMME CIRCULAIRE" subTitle="Diagramme d'avancement des travaux" />

      <Pie />
    </Box>
  );
};

export default PieChart;
