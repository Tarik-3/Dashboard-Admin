import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./bar";
import Header from "../../components/Header";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Evolution de la clientèle"
        subTitle="L'evolution de nombre des clients pendant les dernières annees"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;
